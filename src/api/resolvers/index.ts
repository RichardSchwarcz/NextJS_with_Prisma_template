import { mergeResolvers } from '@graphql-tools/merge'
import member from './member'

export default mergeResolvers([member])
