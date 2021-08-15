import {BehaviorSubject, Observable} from 'rxjs'

export class Store<T> {
  state$: Observable<T>
  private stateP$: BehaviorSubject<T>

  protected constructor(initialState: T) {
    this.stateP$ = new BehaviorSubject<T>(initialState)
    this.state$ = this.stateP$.asObservable()
  }

  get state(): T {
    return this.stateP$.getValue()
  }

  setState(nextState: T) {
    this.stateP$.next(nextState)
  }
}
