import Post from './schema/post.json'
import Project from './schema/project.json'

export default {
  Posts: n => new Array(n).fill(Post),
  Projects: n => new Array(n).fill(Project),
}
