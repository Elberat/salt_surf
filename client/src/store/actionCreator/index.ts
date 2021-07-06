import * as ItemActionCreators from './items'
import * as GalleryActionCreators from './gallery'
import * as UserActionCreators from './user'

export default {
    ...ItemActionCreators,
    ...GalleryActionCreators,
    ...UserActionCreators,
}
