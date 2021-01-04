import {
  IRehooktSpecialManagement,
  IStateDescription
} from 'rehookt/interfaces';

module.exports = ((): IRehooktSpecialManagement => {
  /**
 *
 *
 * @param {any} candidate
 * @return {*}
 */
  const getKeyMapping = (definitions: any[]): any => {
    return definitions.map(candidate => {
      const type = typeof (candidate);

      if (type === 'string') {
        return candidate.toUpperCase();
      }

      if (Array.isArray(candidate)) {
        return candidate[0].toUpperCase();
      } else if (type === 'object') {
        const { name } = candidate;
        if (name) {
          return name.toUpperCase();
        }
      }

      return candidate;
    });
  };

  /**
   * Tells if hook creation have to be cancell when REHOOKT_NONE special hook
   * is met
   *
   * @param {any[]} definitions
   * @return {boolean}  {boolean}
   */
  const doesRejectHooks = (definitions: any[]): boolean => {
    // when REHOOKT_NONE is encountered, return a no hook object
    if (definitions.length === 1) {
      const keys = getKeyMapping(definitions);

      if (keys.includes('REHOOKT_NONE')) {
        return true;
      }
    }

    return false;
  };

  /**
   * Redefines hook names to create by a formula via the REHOOKT_X special hook
   *
   * @param {any[]} definitions
   * @param {IStateDescription} entry
   * @return {any[]}
   */
  const redefineByXFunct = (
    entry: IStateDescription): any[] => {
    const { stateName, use } = entry;

    const redefinitions = [];
    if (/REHOOKT_X/i.test(stateName)) {
      try {
        const { n, f, x, value } = use;
        let i = 0;
        for (; i < n; ++i) {
          redefinitions.push({ name: `rh_${f(x + i)}`, value });
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    }

    return redefinitions;
  };

  /**
   * Process special Rehookt hooks.
   * The special Hook should be the only one listed
   *
   * @param {...any[]} definitions
   * @return {any[]}
   */
  const computeSpecialHooks = (
    computeStatenameAndUse: Function,
    ...definitions: any[]): any[] => {
    let generations = [];

    definitions.forEach(e => {
      const entry = computeStatenameAndUse(e);
      generations = generations
        .concat(redefineByXFunct(entry));
    });

    return cleanUpGenerationHooks(computeStatenameAndUse, definitions)
      .concat(generations);
  };

  /**
   *
   *
   * @param {Function} computeStatenameAndUse
   * @param {any[]} definitions
   * @return {*}
   */
  const cleanUpGenerationHooks = (
    computeStatenameAndUse:Function,
    definitions : any[]
  ) =>{
    return definitions.filter(e => {
      const { stateName } = computeStatenameAndUse(e);
      return !/REHOOKT_X/i.test(stateName);
    });
  };

  return { computeSpecialHooks, doesRejectHooks, getKeyMapping };
})();
