import { IRehooktAnalyse, IStateDescription } from 'rehookt/interfaces';

module.exports = (() : IRehooktAnalyse => {
  /**
   * Parse the state name into json string object if it is not a string
   * By this way you have the representation in the log.
   *
   * @param {string} stateName
   * @return {string}
   */
  const specifiedStateName = (stateName: string): string => {
    if (typeof stateName !== 'string') {
      // not apply on null or undefined because these can be valid names
      if (typeof stateName !== 'undefined' && stateName !== null) {
        return JSON.stringify(stateName);
      }
    }

    return stateName;
  };

  /**
   * Gives a description for given item. A description describe for a
   * stateName a used state
   *
   * @param {any} item
   * @return {IStateDescription}
   */
  const computeStatenameAndUse = (item: any) : IStateDescription => {
    /* eslint-disable no-undefined */
    const description : IStateDescription = {
      stateName: undefined,
      use: undefined
    };
    /* eslint-enable no-undefined */

    // dealing with objects or arrays.
    if (typeof item !== 'string') {
      /* eslint-disable no-empty */
      if (doesDescribeFromAnArray(description, item)) {
      } else if (doesDescribeFromObject(description, item)) {
      } else if (doesDescribeFromDefined(description, item)) {
      }
      /* eslint-enable no-empty */

      // dealing with only the name of the hook
    } else {
      description.stateName = item;
    }

    return description;
  };

  /**
   * Is the item an [Object] and not null or not undefined ?
   *
   * @param {IStateDescription} description
   * @param {*} item
   * @return {*}  {boolean}
   */
  const doesDescribeFromObject = (
    description: IStateDescription,
    item: any) :boolean => {
    if ((typeof item === 'object' && item)) {
      description.stateName = specifiedStateName(item.name);
      description.use = item.value;

      return true;
    }
    return false;
  };

  /**
   * Is the item an [array] ?
   * Checking if array before checking if the item is an object
   * because an array can be considered as an is also identified as object.
   *
   * @param {IStateDescription} description
   * @param {*} item
   * @return {*}  {boolean}
   */
  const doesDescribeFromAnArray = (
    description: IStateDescription,
    item:any) :boolean =>{
    if (Array.isArray(item)) {
      description.stateName = specifiedStateName(item[0]);
      description.use = item[1];

      return true;
    }
    return false;
  };

  /**
   * Is the item anything else but not undefined ?
   *
   * @param {*} description
   * @param {*} item
   * @return {*}  {boolean}
   */
  const doesDescribeFromDefined = (description, item) : boolean => {
    if (typeof item !== 'undefined' && item) {
      description.stateName = item;

      return true;
    }

    return false;
  };

  return { computeStatenameAndUse };
})();
