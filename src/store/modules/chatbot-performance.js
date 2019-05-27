import { repositoryFactory } from '@/apis/repository-factory'
import { formatNumber, formatPercentage } from '@/utils/number-formatter'

const chatbotPerformanceRepository = repositoryFactory.get('chatbotPerformance')

const state = {
  totalUsers: {
    title: '',
    value: 0,
    isPositivePercentage: false,
    percentageValue: 0
  },
  chatbotRating: {
    title: '',
    value: 0,
    total: 0,
    isPositivePercentage: false,
    percentageValue: 0
  },
  avgSessionDuration: {
    title: '',
    value: 0,
    isPositivePercentage: false,
    percentageValue: 0
  },
  goalCompletion: {
    title: '',
    value: 0,
    isPositivePercentage: false,
    percentageValue: 0
  },
  goalConversionRate: {
    title: '',
    value: 0,
    isPositivePercentage: false,
    percentageValue: 0
  },
  deflectionRate: {
    title: '',
    value: 0,
    isPositivePercentage: false,
    percentageValue: 0
  },
  totalFallbackCount: {
    title: '',
    value: 0,
    isPositivePercentage: false,
    percentageValue: 0
  },
  overallConfusion: {
    title: '',
    value: 0,
    isPositivePercentage: false,
    percentageValue: 0
  },
  chatbotActivation: {
    title: '',
    value: 0,
    isPositivePercentage: false,
    percentageValue: 0
  }
}

const getters = {
  totalUsers: state => {
    return {
      ...state.totalUsers,
      value: formatNumber(state.totalUsers.value),
      percentageValue: formatPercentage(state.totalUsers.percentageValue)
    }
  },
  chatbotRating: state => {
    return {
      ...state.chatbotRating,
      value: formatNumber(state.chatbotRating.value, '0,0.00[00]'),
      percentageValue: formatPercentage(state.chatbotRating.percentageValue)
    }
  },
  avgSessionDuration: state => {
    return {
      ...state.avgSessionDuration,
      percentageValue: formatPercentage(state.avgSessionDuration.percentageValue)
    }
  },
  goalCompletion: state => {
    return {
      ...state.goalCompletion,
      value: formatNumber(state.goalCompletion.value),
      percentageValue: formatPercentage(state.goalCompletion.percentageValue)
    }
  },
  goalConversionRate: state => {
    return {
      ...state.goalConversionRate,
      value: formatPercentage(state.goalConversionRate.value),
      percentageValue: formatPercentage(state.goalConversionRate.percentageValue)
    }
  },
  deflectionRate: state => {
    return {
      ...state.deflectionRate,
      value: formatPercentage(state.deflectionRate.value),
      percentageValue: formatPercentage(state.deflectionRate.percentageValue)
    }
  },
  totalFallbackCount: state => {
    return {
      ...state.totalFallbackCount,
      value: formatNumber(state.totalFallbackCount.value),
      percentageValue: formatPercentage(state.totalFallbackCount.percentageValue)
    }
  },
  overallConfusion: state => {
    return {
      ...state.overallConfusion,
      value: formatPercentage(state.overallConfusion.value),
      percentageValue: formatPercentage(state.overallConfusion.percentageValue)
    }
  },
  chatbotActivation: state => {
    return {
      ...state.chatbotActivation,
      value: formatPercentage(state.chatbotActivation.value),
      percentageValue: formatPercentage(state.chatbotActivation.percentageValue)
    }
  }
}

const mutations = {
  setPerformanceData (state, {
    totalUsers,
    chatbotRating,
    avgSessionDuration,
    goalCompletion,
    goalConversionRate,
    deflectionRate,
    totalFallbackCount,
    overallConfusion,
    chatbotActivation
  }) {
    state.totalUsers = totalUsers
    state.chatbotRating = chatbotRating
    state.avgSessionDuration = avgSessionDuration
    state.goalCompletion = goalCompletion
    state.goalConversionRate = goalConversionRate
    state.deflectionRate = deflectionRate
    state.totalFallbackCount = totalFallbackCount
    state.overallConfusion = overallConfusion
    state.chatbotActivation = chatbotActivation
  }
}

const actions = {
  async getPerformanceData ({ commit, state }) {
    const response = await chatbotPerformanceRepository.get()
    const data = response.data[0]
    commit('setPerformanceData', {
      totalUsers: data.totalUsers,
      chatbotRating: data.chatbotRating,
      avgSessionDuration: data.avgSessionDuration,
      goalCompletion: data.goalCompletion,
      goalConversionRate: data.goalConversionRate,
      deflectionRate: data.deflectionRate,
      totalFallbackCount: data.totalFallbackCount,
      overallConfusion: data.overallConfusion,
      chatbotActivation: data.chatbotActivation
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
