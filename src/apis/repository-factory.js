import chatbotUsersOverviewRepository from './chatbot-users-overview-repository'
import chatbotPerformanceRepository from './chatbot-performance-repository'
import contentDetailsRepository from './content-details-repository'
import contentPerformanceRepository from './content-performance-repository'
import answerRatingRepository from './answer-rating-repository'
import contentFlowDiagramRepository from './content-flow-diagram-repository'

const repositories = {
  chatbotUsersOverview: chatbotUsersOverviewRepository,
  chatbotPerformance: chatbotPerformanceRepository,
  contentDetails: contentDetailsRepository,
  contentPerformance: contentPerformanceRepository,
  answerRating: answerRatingRepository,
  contentFlowDiagram: contentFlowDiagramRepository
}

export const repositoryFactory = {
  get: (name) => repositories[name]
}
