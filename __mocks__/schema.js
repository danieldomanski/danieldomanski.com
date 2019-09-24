import Post from './schema/post.json'
import Project from './schema/project.json'
import TagContext from './schema/tagContext.json'
import TagData from './schema/tagData.json'

export default {
  Posts: n => new Array(n).fill(Post),
  Projects: n => new Array(n).fill(Project),
  Tag: () => ({ data: TagData, pageContext: TagContext }),
}
