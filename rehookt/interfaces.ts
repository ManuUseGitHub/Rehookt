export interface IStateDescription {
    stateName : string,
      use : any
}

export interface IRehooktException {
  intro: string;
  code: number;
}

export interface IRehooktSpecialManagement {
  computeSpecialHooks : Function,
  doesRejectHooks : Function,
  getKeyMapping : Function
}

export interface IRehooktChecks {
  checkAbuses: Function,
  checkValidity: Function,
  checkFormat: Function,
  checkSpecialHooks: Function
}

export interface IRehooktAnalyse {
  computeStatenameAndUse : Function
}
