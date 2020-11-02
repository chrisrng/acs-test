import Route from '@ember/routing/route';
import { CallClient } from '@azure/communication-calling';
import { AzureCommunicationUserCredential } from '@azure/communication-common';

export default class CallRoute extends Route {
  model() {
    const logger = {
      verbose: (...args) => { console.log(...args); },
      info: (...args) => { console.info(...args); },
      warning: (...args) => { console.warn(...args); },
      error: (...args) => { console.error(...args); }
    };
    const options = { logger };
    const userToken = 'TODO';
    const callClient = new CallClient(options);
    const tokenCredential = new AzureCommunicationUserCredential(userToken);
    return callClient.createCallAgent(tokenCredential)
      .then(value => {
        debugger;
        console.log(value);
        alert('working!');
      })
      .catch(e => {
        debugger;
        console.log(e);
        alert('failed!');
        throw e;
      });
  }
}
