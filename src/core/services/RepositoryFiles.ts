import { BaseService, RequestHelper, BaseRequestOptions, Sudo } from '../infrastructure';
import { ProjectId } from '.';

class RepositoryFiles extends BaseService {
  create(
    projectId: ProjectId,
    filePath: string,
    branch: string,
    content: string,
    commitMessage: string,
    options?: BaseRequestOptions,
  ) {
    const [pId, path] = [projectId, filePath].map(encodeURIComponent);

    return RequestHelper.post(this, `projects/${pId}/repository/files/${path}`, {
      branch,
      content,
      commitMessage,
      ...options,
    });
  }

  edit(
    projectId: ProjectId,
    filePath: string,
    branch: string,
    content: string,
    commitMessage: string,
    options?: BaseRequestOptions,
  ) {
    const [pId, path] = [projectId, filePath].map(encodeURIComponent);

    return RequestHelper.put(this, `projects/${pId}/repository/files/${path}`, {
      branch,
      content,
      commitMessage,
      ...options,
    });
  }

  remove(
    projectId: ProjectId,
    filePath: string,
    branch: string,
    commitMessage: string,
    options?: BaseRequestOptions,
  ) {
    const [pId, path] = [projectId, filePath].map(encodeURIComponent);

    return RequestHelper.del(this, `projects/${pId}/repository/files/${path}`, {
      branch,
      commitMessage,
      ...options,
    });
  }

  show(projectId: ProjectId, filePath: string, ref: string, options?: Sudo) {
    const [pId, path] = [projectId, filePath].map(encodeURIComponent);

    return RequestHelper.get(this, `projects/${pId}/repository/files/${path}`, {
      ref,
      ...options,
    });
  }

  showBlame(projectId: ProjectId, filePath: string, options?: Sudo) {
    const [pId, path] = [projectId, filePath].map(encodeURIComponent);

    return RequestHelper.get(this, `projects/${pId}/repository/files/${path}/blame`, options);
  }

  showRaw(projectId: ProjectId, filePath: string, ref: string, options?: Sudo) {
    const [pId, path] = [projectId, filePath].map(encodeURIComponent);

    return RequestHelper.get(this, `projects/${pId}/repository/files/${path}/raw`, {
      ref,
      ...options,
    });
  }
}

export default RepositoryFiles;
