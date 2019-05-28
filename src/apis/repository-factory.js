import chatbotUsersOverviewRepository from './chatbot-users-overview-repository'
import chatbotPerformanceRepository from './chatbot-performance-repository'
import contentDetailsRepository from './content-details-repository'

const repositories = {
  chatbotUsersOverview: chatbotUsersOverviewRepository,
  chatbotPerformance: chatbotPerformanceRepository,
  contentDetails: contentDetailsRepository
}

export const repositoryFactory = {
  get: (name) => repositories[name]
}
