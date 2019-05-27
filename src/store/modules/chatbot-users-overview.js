import moment from 'moment'
import sortBy from 'lodash/sortBy'

import { DD_MM } from '@/utils/date-formatter'
import { repositoryFactory } from '@/apis/repository-factory'
import { timeTypeFilters } from '@/constants'

const chatbotUsersOverviewRepository = repositoryFactory.get('chatbotUsersOverview')

const formatChartData = (chartData) => {
  const { newUser, returningUser, totalUser } = chartData
  const labels = sortBy(newUser, 'date').map((item) => moment(item.date).format(DD_MM))
  const datasets = [
    {
      label: 'New users',
      fill: false,
      pointBackgroundColor: 'rgba(236, 95, 51, 0.7)',
      pointRadius: 5,
      borderColor: '#EC5F33',
      borderWidth: 1,
      data: sortBy(newUser, 'date').map((item) => item.value)
    },
    {
      label: 'Returning users',
      fill: false,
      pointBackgroundColor: 'rgba(26, 179, 148, 0.7)',
      pointRadius: 5,
      borderColor: '#1AB394',
      borderWidth: 1,
      data: sortBy(returningUser, 'date').map((item) => item.value)
    },
    {
      label: 'Total users',
      fill: false,
      pointBackgroundColor: 'rgba(2, 117, 216, 0.7)',
      pointRadius: 5,
      borderColor: '#0275D8',
      borderWidth: 1,
      data: sortBy(totalUser, 'date').map((item) => item.value)
    }
  ]

  return {
    labels,
    datasets
  }
}

const state = {
  timeType: timeTypeFilters.DAY,
  chartData: {
    newUser: [],
    returningUser: [],
    totalUser: []
  }
}

const getters = {
  chartData: (state) => {
    return formatChartData(state.chartData)
  }
}

const mutations = {
  setChartData (state, { chartData }) {
    state.chartData = chartData
  },
  setTimeType (state, { timeType }) {
    state.timeType = timeType
  }
}

const actions = {
  async getChartData ({ commit, state }) {
    const response = await chatbotUsersOverviewRepository.get({
      timeType: state.timeType
    })
    const data = response.data[0]
    commit('setChartData', { chartData: {
      newUser: data.newUser,
      returningUser: data.returningUser,
      totalUser: data.totalUser
    } })
  },
  async updateTimeType ({ commit, dispatch }, { timeType }) {
    commit('setTimeType', { timeType })
    dispatch('getChartData')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
