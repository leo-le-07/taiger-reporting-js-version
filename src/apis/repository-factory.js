import chatbotUsersOverviewRepository from './chatbot-users-overview-repository'
import chatbotPerformanceRepository from './chatbot-performance-repository'
import contentDetailsRepository from './content-details-repository'
import contentPerformanceRepository from './content-performance-repository'
import answerRatingRepository from './answer-rating-repository'
import contentFlowDiagramRepository from './content-flow-diagram-repository'
import contentConversationsRepository from './content-conversations-repository'
import contentConversationListRepository from './content-conversation-list-repository'

const repositories = {
  chatbotUsersOverview: chatbotUsersOverviewRepository,
  chatbotPerformance: chatbotPerformanceRepository,
  contentDetails: contentDetailsRepository,
  contentPerformance: contentPerformanceRepository,
  answerRating: answerRatingRepository,
  contentFlowDiagram: contentFlowDiagramRepository,
  contentConversations: contentConversationsRepository,
  contentConversationList: contentConversationListRepository
}

export const repositoryFactory = {
  get: (name) => repositories[name]
}
