import ChatbotUsersOverviewRepository from './chatbot-users-overview-repository'

const repositories = {
  chatbotUsersOverview: ChatbotUsersOverviewRepository
}

export const repositoryFactory = {
  get: (name) => repositories[name]
}
