import { ResourceDiscussions } from '../templates';
import { BaseServiceOptions } from '../infrastructure';

class CommitDiscussions extends ResourceDiscussions {
  constructor(options: BaseServiceOptions) {
    super('projects', 'commits', options);
  }
}

export default CommitDiscussions;
