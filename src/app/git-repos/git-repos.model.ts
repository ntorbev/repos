export interface Repos {
  node: {
    author?: { name: string },
    message?: string
    name: string,
    description: string,
    url: string,
    licenseInfo: string,
    defaultBranchRef: {
      target: {
        history: {
          totalCount: number,
          edges: [{
            node: {
              message: string
            }
          }]
        }
      }
    }
  };
}
