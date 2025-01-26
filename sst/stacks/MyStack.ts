import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Create a Lambda API
    const api = new sst.Api(this, "Api", {
      routes: {
        "GET /tasks": "functions/list.main",
      },
    });

    this.addOutputs({
      ApiEndpoint: api.url,
    });
  }
}
