export type Warning = Delimiters | Reinterpret | Spellcheck | Translation;

export interface Alternative {
  level: string;
  score: number;
  val: string;
}

export interface Assumption {
  count: number;
  template: string;
  type: string;
  values: Value;
  word: string;
}

export interface Cell {
  compressed: boolean;
  data: string;
}

export interface Delimiters {
  text: string;
}

export interface DidYouMean {
  level: string;
  score: number;
}

export interface Error {
  code: number;
  msg: string;
}

export interface ExamplePage {
  category: string;
  url: string;
}

export interface FutureTopic {
  msg: string;
  topic: string;
}

export interface Generalization {
  desc: string;
  topic: string;
}

export interface Image {
  alt: string;
  height: string;
  src: string;
  title: string;
  width: string;
}

export interface Info {
  img?: Image;
  links?: Link | Array<Link>;
  text?: string;
  units?: Array<Unit>;
}

export interface LanguageMsg {
  english: string;
  other: string;
}

export interface Link {
  url: string;
  text: string;
  title: string;
}

export interface Pod {
  error: false | Error;
  id: string;
  infos?: Array<Info>;
  numsubpods: number;
  position: boolean;
  scanner: string;
  sounds?: Array<Sound>;
  states: Array<State>;
  subpods: Array<SubPod>;
  title: string;
}

export interface QueryOptions {
  assumption?: string;
  async?: string;
  excludepodid?: string;
  format?: string;
  formattimeout?: number | string;
  ignorecase?: boolean | string;
  includepodid?: string;
  ip?: string;
  latlong?: string;
  location?: string;
  mag?: number | string;
  maxwidth?: number | string;
  parsetimeout?: number | string;
  plotwidth?: number | string;
  podindex?: number | string;
  podstate?: string;
  podtimeout?: number | string;
  podtitle?: string;
  reinterpret?: boolean | string;
  scanner?: string;
  scantimeout?: number | string;
  sig?: string;
  totaltimeout?: number | string;
  translation?: boolean | string;
  width?: number | string;
  units?: string;
}

export interface QueryResult {
  assumptions: Assumption | Array<Assumption>;
  datatypes: string;
  didyoumeans?: DidYouMean;
  error: false | Error;
  examplepage?: ExamplePage;
  futuretopic?: FutureTopic;
  generalization?: Generalization;
  host: string;
  id: string;
  languagemsg?: LanguageMsg;
  numpods: number;
  success: boolean;
  parsetimedout: boolean;
  parsetiming: number;
  pods: Array<Pod>;
  recalculate: string;
  related: string;
  server: string;
  sources?: Source | Array<Source>;
  timedout: string;
  timedoutpods: string;
  timing: number;
  tips?: Tip | Array<Tip>;
  version: string;
  warnings?: Warning | Array<Warning>;
}

export interface Rect {
  assumptions?: string;
  assumptions2?: string;
  bottom: number;
  left: number;
  right: number;
  title: string;
  top: number;
}

export interface Reinterpret {
  alternative?: Alternative | Array<Alternative>;
  level: string;
  new: string;
  score: number;
  text: string;
}

export interface Sound {
  url: string;
  type: string;
}

export interface Source {
  url: string;
  text: string;
}

export interface Spellcheck {
  suggestion: string;
  text: string;
  word: string;
}

export interface State {
  count?: number;
  delimiters?: string;
  input?: string;
  name?: string;
  value?: string;
  states?: Array<State>;
}

export interface SubPod {
  cell?: Cell;
  imagemap?: Array<Rect>;
  img?: Image;
  minput?: string;
  moutput?: string;
  plaintext?: string;
  states: Array<State>;
  title: string;
}

export interface Tip {
  text: string;
}

export interface Translation {
  lang: string;
  phrase: string;
  text: string;
  trans: string;
}

export interface Unit {
  short: string;
  long: string;
}

export interface Value {
  desc: string;
  input: string;
  name: string;
}

export interface WolframResponse {
  queryresult: QueryResult;
}
