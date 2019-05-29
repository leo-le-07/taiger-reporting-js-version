import chatbotUsersOverviewRepository from './chatbot-users-overview-repository'
import chatbotPerformanceRepository from './chatbot-performance-repository'
import contentDetailsRepository from './content-details-repository'
import contentPerformanceRepository from './content-performance-repository'

const repositories = {
  chatbotUsersOverview: chatbotUsersOverviewRepository,
  chatbotPerformance: chatbotPerformanceRepository,
  contentDetails: contentDetailsRepository,
  contentPerformance: contentPerformanceRepository
}

export const repositoryFactory = {
  get: (name) => repositories[name]
}
