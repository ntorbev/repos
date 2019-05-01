export interface Repos {
  node: {
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
