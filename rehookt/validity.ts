module.exports = (() => {
    interface IrehooktException {
      intro : string;
      code : number;
    }
    const REHOOKT_ABUSE_EXP:IrehooktException  = {
        intro: 'Hook integrity',
        code: 0
      };
    
      const REHOOKT_UNCONCISTENCY_EXP:IrehooktException = {
        intro: 'Hook unconsitency',
        code: 1000
      };
    
      const REHOOKT_REFERER_EXP:IrehooktException = {
        intro: 'Wrong hook referer',
        code: 2000
      };
    
      const rehooktException = (exclass:IrehooktException, number : number, submessage : string) => {
        const message = `${exclass.intro} exception\n${submessage}`;
    
        const error:NodeJS.ErrnoException = new Error(message);
    
        error.code = (exclass.code + number).toString();
    
        return error;
      };
    
      rehooktException.prototype = Object.create(Error.prototype);

      const checkAbuses = function (...definitions : any[]) : boolean {
        // At least one hook should be supplied for creation ...
        if (definitions.length === 0) {
          throw rehooktException(REHOOKT_ABUSE_EXP, 1,
            'Rehookt need definitions to work on. Nothing provided.');
        }
    
        // A hook should not be registered ...
        if (definitions.length > 99) {
          throw rehooktException(REHOOKT_ABUSE_EXP, 2,
            'Rehookt prefers not to create an abusive number of rehookts.');
        }

        return true;
      };
    
      const checkValidity = function (state : any, stateName : any) : boolean {
        // A hook should have a name that is defined ...
        if (typeof stateName === 'undefined') {
          throw rehooktException(REHOOKT_REFERER_EXP, 1,
            'Rehookts have to have a name defined');
        }
    
        // A hook should have a name that is defined ...
        if (stateName === null) {
          throw rehooktException(REHOOKT_REFERER_EXP, 2,
            'Rehookts have to have a non null name');
        }
    
        // A hook should not be registered ...
        if (typeof state[stateName] !== 'undefined') {
          throw rehooktException(REHOOKT_UNCONCISTENCY_EXP, 1,
            `One hook already exists under the name ${stateName}`);
        }
    
        // A hook should have a name that is anything else than an string ...
        // eslint-disable-next-line no-useless-escape
        if (/^[\[{].*[\]}]$/.test(stateName)) {
          throw rehooktException(REHOOKT_UNCONCISTENCY_EXP, 2,
            'Nothing than a string can be accepted as hook'
            + ` name given ${JSON.stringify(stateName)}`);
        }
    
        // A hook should not start by a numeric ...
        if (/^[0-9].*$/.test(stateName)) {
          throw rehooktException(REHOOKT_REFERER_EXP, 3,
            'A rehookt hook name should be valid.'
            + ' You should avoid making your hooks start by a number');
        }
    
        // A hook should not have a forbiden special char ...
        // eslint-disable-next-line no-useless-escape
        if (/^.*[!@#%^&*()+\=\[\]{};':"\\|,.<>\/?~\]].*$/.test(stateName)) {
          throw rehooktException(REHOOKT_REFERER_EXP, 4,
            'A rehookt hook name should be valid.'
            + ' You must avoid forbiden special chars in your hook name');
        }
    
        // A hook should not have a space or linebreak in the name ...
        if (/^.*[\r\n\s].*$/.test(stateName)) {
          throw rehooktException(REHOOKT_REFERER_EXP, 5,
            'A rehookt hook name should be valid.'
            + ' You must avoid space chars or linebreak in your hook name');
        }

        return true;
      };

    return {checkAbuses,checkValidity};
})();