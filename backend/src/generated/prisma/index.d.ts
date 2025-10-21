
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model WeightLog
 * 
 */
export type WeightLog = $Result.DefaultSelection<Prisma.$WeightLogPayload>
/**
 * Model WorkoutLog
 * 
 */
export type WorkoutLog = $Result.DefaultSelection<Prisma.$WorkoutLogPayload>
/**
 * Model StepRecord
 * 
 */
export type StepRecord = $Result.DefaultSelection<Prisma.$StepRecordPayload>
/**
 * Model WorkoutRecommendation
 * 
 */
export type WorkoutRecommendation = $Result.DefaultSelection<Prisma.$WorkoutRecommendationPayload>
/**
 * Model FitHealthTipAPI
 * 
 */
export type FitHealthTipAPI = $Result.DefaultSelection<Prisma.$FitHealthTipAPIPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weightLog`: Exposes CRUD operations for the **WeightLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeightLogs
    * const weightLogs = await prisma.weightLog.findMany()
    * ```
    */
  get weightLog(): Prisma.WeightLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutLog`: Exposes CRUD operations for the **WorkoutLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutLogs
    * const workoutLogs = await prisma.workoutLog.findMany()
    * ```
    */
  get workoutLog(): Prisma.WorkoutLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stepRecord`: Exposes CRUD operations for the **StepRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StepRecords
    * const stepRecords = await prisma.stepRecord.findMany()
    * ```
    */
  get stepRecord(): Prisma.StepRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutRecommendation`: Exposes CRUD operations for the **WorkoutRecommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutRecommendations
    * const workoutRecommendations = await prisma.workoutRecommendation.findMany()
    * ```
    */
  get workoutRecommendation(): Prisma.WorkoutRecommendationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fitHealthTipAPI`: Exposes CRUD operations for the **FitHealthTipAPI** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FitHealthTipAPIS
    * const fitHealthTipAPIS = await prisma.fitHealthTipAPI.findMany()
    * ```
    */
  get fitHealthTipAPI(): Prisma.FitHealthTipAPIDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    WeightLog: 'WeightLog',
    WorkoutLog: 'WorkoutLog',
    StepRecord: 'StepRecord',
    WorkoutRecommendation: 'WorkoutRecommendation',
    FitHealthTipAPI: 'FitHealthTipAPI'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "weightLog" | "workoutLog" | "stepRecord" | "workoutRecommendation" | "fitHealthTipAPI"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      WeightLog: {
        payload: Prisma.$WeightLogPayload<ExtArgs>
        fields: Prisma.WeightLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeightLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeightLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload>
          }
          findFirst: {
            args: Prisma.WeightLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeightLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload>
          }
          findMany: {
            args: Prisma.WeightLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload>[]
          }
          create: {
            args: Prisma.WeightLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload>
          }
          createMany: {
            args: Prisma.WeightLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeightLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload>[]
          }
          delete: {
            args: Prisma.WeightLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload>
          }
          update: {
            args: Prisma.WeightLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload>
          }
          deleteMany: {
            args: Prisma.WeightLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeightLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeightLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload>[]
          }
          upsert: {
            args: Prisma.WeightLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload>
          }
          aggregate: {
            args: Prisma.WeightLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeightLog>
          }
          groupBy: {
            args: Prisma.WeightLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeightLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeightLogCountArgs<ExtArgs>
            result: $Utils.Optional<WeightLogCountAggregateOutputType> | number
          }
        }
      }
      WorkoutLog: {
        payload: Prisma.$WorkoutLogPayload<ExtArgs>
        fields: Prisma.WorkoutLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          findFirst: {
            args: Prisma.WorkoutLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          findMany: {
            args: Prisma.WorkoutLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>[]
          }
          create: {
            args: Prisma.WorkoutLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          createMany: {
            args: Prisma.WorkoutLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>[]
          }
          delete: {
            args: Prisma.WorkoutLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          update: {
            args: Prisma.WorkoutLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          aggregate: {
            args: Prisma.WorkoutLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutLog>
          }
          groupBy: {
            args: Prisma.WorkoutLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutLogCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutLogCountAggregateOutputType> | number
          }
        }
      }
      StepRecord: {
        payload: Prisma.$StepRecordPayload<ExtArgs>
        fields: Prisma.StepRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRecordPayload>
          }
          findFirst: {
            args: Prisma.StepRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRecordPayload>
          }
          findMany: {
            args: Prisma.StepRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRecordPayload>[]
          }
          create: {
            args: Prisma.StepRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRecordPayload>
          }
          createMany: {
            args: Prisma.StepRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StepRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRecordPayload>[]
          }
          delete: {
            args: Prisma.StepRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRecordPayload>
          }
          update: {
            args: Prisma.StepRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRecordPayload>
          }
          deleteMany: {
            args: Prisma.StepRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StepRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StepRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRecordPayload>[]
          }
          upsert: {
            args: Prisma.StepRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepRecordPayload>
          }
          aggregate: {
            args: Prisma.StepRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStepRecord>
          }
          groupBy: {
            args: Prisma.StepRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<StepRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepRecordCountArgs<ExtArgs>
            result: $Utils.Optional<StepRecordCountAggregateOutputType> | number
          }
        }
      }
      WorkoutRecommendation: {
        payload: Prisma.$WorkoutRecommendationPayload<ExtArgs>
        fields: Prisma.WorkoutRecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutRecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutRecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRecommendationPayload>
          }
          findFirst: {
            args: Prisma.WorkoutRecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutRecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRecommendationPayload>
          }
          findMany: {
            args: Prisma.WorkoutRecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRecommendationPayload>[]
          }
          create: {
            args: Prisma.WorkoutRecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRecommendationPayload>
          }
          createMany: {
            args: Prisma.WorkoutRecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutRecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRecommendationPayload>[]
          }
          delete: {
            args: Prisma.WorkoutRecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRecommendationPayload>
          }
          update: {
            args: Prisma.WorkoutRecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRecommendationPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutRecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutRecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutRecommendationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRecommendationPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutRecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRecommendationPayload>
          }
          aggregate: {
            args: Prisma.WorkoutRecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutRecommendation>
          }
          groupBy: {
            args: Prisma.WorkoutRecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutRecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutRecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutRecommendationCountAggregateOutputType> | number
          }
        }
      }
      FitHealthTipAPI: {
        payload: Prisma.$FitHealthTipAPIPayload<ExtArgs>
        fields: Prisma.FitHealthTipAPIFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FitHealthTipAPIFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitHealthTipAPIPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FitHealthTipAPIFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitHealthTipAPIPayload>
          }
          findFirst: {
            args: Prisma.FitHealthTipAPIFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitHealthTipAPIPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FitHealthTipAPIFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitHealthTipAPIPayload>
          }
          findMany: {
            args: Prisma.FitHealthTipAPIFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitHealthTipAPIPayload>[]
          }
          create: {
            args: Prisma.FitHealthTipAPICreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitHealthTipAPIPayload>
          }
          createMany: {
            args: Prisma.FitHealthTipAPICreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FitHealthTipAPICreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitHealthTipAPIPayload>[]
          }
          delete: {
            args: Prisma.FitHealthTipAPIDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitHealthTipAPIPayload>
          }
          update: {
            args: Prisma.FitHealthTipAPIUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitHealthTipAPIPayload>
          }
          deleteMany: {
            args: Prisma.FitHealthTipAPIDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FitHealthTipAPIUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FitHealthTipAPIUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitHealthTipAPIPayload>[]
          }
          upsert: {
            args: Prisma.FitHealthTipAPIUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitHealthTipAPIPayload>
          }
          aggregate: {
            args: Prisma.FitHealthTipAPIAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFitHealthTipAPI>
          }
          groupBy: {
            args: Prisma.FitHealthTipAPIGroupByArgs<ExtArgs>
            result: $Utils.Optional<FitHealthTipAPIGroupByOutputType>[]
          }
          count: {
            args: Prisma.FitHealthTipAPICountArgs<ExtArgs>
            result: $Utils.Optional<FitHealthTipAPICountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    weightLog?: WeightLogOmit
    workoutLog?: WorkoutLogOmit
    stepRecord?: StepRecordOmit
    workoutRecommendation?: WorkoutRecommendationOmit
    fitHealthTipAPI?: FitHealthTipAPIOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    weightLogs: number
    workoutLogs: number
    stepRecords: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weightLogs?: boolean | UserCountOutputTypeCountWeightLogsArgs
    workoutLogs?: boolean | UserCountOutputTypeCountWorkoutLogsArgs
    stepRecords?: boolean | UserCountOutputTypeCountStepRecordsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWeightLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeightLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkoutLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStepRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userID: number | null
    height: number | null
    weight: number | null
  }

  export type UserSumAggregateOutputType = {
    userID: number | null
    height: number | null
    weight: number | null
  }

  export type UserMinAggregateOutputType = {
    userID: number | null
    username: string | null
    password: string | null
    height: number | null
    weight: number | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userID: number | null
    username: string | null
    password: string | null
    height: number | null
    weight: number | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userID: number
    username: number
    password: number
    height: number
    weight: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userID?: true
    height?: true
    weight?: true
  }

  export type UserSumAggregateInputType = {
    userID?: true
    height?: true
    weight?: true
  }

  export type UserMinAggregateInputType = {
    userID?: true
    username?: true
    password?: true
    height?: true
    weight?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    userID?: true
    username?: true
    password?: true
    height?: true
    weight?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    userID?: true
    username?: true
    password?: true
    height?: true
    weight?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userID: number
    username: string
    password: string
    height: number | null
    weight: number | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userID?: boolean
    username?: boolean
    password?: boolean
    height?: boolean
    weight?: boolean
    createdAt?: boolean
    weightLogs?: boolean | User$weightLogsArgs<ExtArgs>
    workoutLogs?: boolean | User$workoutLogsArgs<ExtArgs>
    stepRecords?: boolean | User$stepRecordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userID?: boolean
    username?: boolean
    password?: boolean
    height?: boolean
    weight?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userID?: boolean
    username?: boolean
    password?: boolean
    height?: boolean
    weight?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userID?: boolean
    username?: boolean
    password?: boolean
    height?: boolean
    weight?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userID" | "username" | "password" | "height" | "weight" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weightLogs?: boolean | User$weightLogsArgs<ExtArgs>
    workoutLogs?: boolean | User$workoutLogsArgs<ExtArgs>
    stepRecords?: boolean | User$stepRecordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      weightLogs: Prisma.$WeightLogPayload<ExtArgs>[]
      workoutLogs: Prisma.$WorkoutLogPayload<ExtArgs>[]
      stepRecords: Prisma.$StepRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userID: number
      username: string
      password: string
      height: number | null
      weight: number | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userID`
     * const userWithUserIDOnly = await prisma.user.findMany({ select: { userID: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userID`
     * const userWithUserIDOnly = await prisma.user.createManyAndReturn({
     *   select: { userID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userID`
     * const userWithUserIDOnly = await prisma.user.updateManyAndReturn({
     *   select: { userID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    weightLogs<T extends User$weightLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$weightLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workoutLogs<T extends User$workoutLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$workoutLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stepRecords<T extends User$stepRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$stepRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userID: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly height: FieldRef<"User", 'Float'>
    readonly weight: FieldRef<"User", 'Float'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.weightLogs
   */
  export type User$weightLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightLog
     */
    omit?: WeightLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    where?: WeightLogWhereInput
    orderBy?: WeightLogOrderByWithRelationInput | WeightLogOrderByWithRelationInput[]
    cursor?: WeightLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeightLogScalarFieldEnum | WeightLogScalarFieldEnum[]
  }

  /**
   * User.workoutLogs
   */
  export type User$workoutLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    where?: WorkoutLogWhereInput
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    cursor?: WorkoutLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * User.stepRecords
   */
  export type User$stepRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRecord
     */
    select?: StepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRecord
     */
    omit?: StepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRecordInclude<ExtArgs> | null
    where?: StepRecordWhereInput
    orderBy?: StepRecordOrderByWithRelationInput | StepRecordOrderByWithRelationInput[]
    cursor?: StepRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepRecordScalarFieldEnum | StepRecordScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model WeightLog
   */

  export type AggregateWeightLog = {
    _count: WeightLogCountAggregateOutputType | null
    _avg: WeightLogAvgAggregateOutputType | null
    _sum: WeightLogSumAggregateOutputType | null
    _min: WeightLogMinAggregateOutputType | null
    _max: WeightLogMaxAggregateOutputType | null
  }

  export type WeightLogAvgAggregateOutputType = {
    logID: number | null
    weight: number | null
    userID: number | null
  }

  export type WeightLogSumAggregateOutputType = {
    logID: number | null
    weight: number | null
    userID: number | null
  }

  export type WeightLogMinAggregateOutputType = {
    logID: number | null
    date: Date | null
    weight: number | null
    userID: number | null
  }

  export type WeightLogMaxAggregateOutputType = {
    logID: number | null
    date: Date | null
    weight: number | null
    userID: number | null
  }

  export type WeightLogCountAggregateOutputType = {
    logID: number
    date: number
    weight: number
    userID: number
    _all: number
  }


  export type WeightLogAvgAggregateInputType = {
    logID?: true
    weight?: true
    userID?: true
  }

  export type WeightLogSumAggregateInputType = {
    logID?: true
    weight?: true
    userID?: true
  }

  export type WeightLogMinAggregateInputType = {
    logID?: true
    date?: true
    weight?: true
    userID?: true
  }

  export type WeightLogMaxAggregateInputType = {
    logID?: true
    date?: true
    weight?: true
    userID?: true
  }

  export type WeightLogCountAggregateInputType = {
    logID?: true
    date?: true
    weight?: true
    userID?: true
    _all?: true
  }

  export type WeightLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeightLog to aggregate.
     */
    where?: WeightLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightLogs to fetch.
     */
    orderBy?: WeightLogOrderByWithRelationInput | WeightLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeightLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeightLogs
    **/
    _count?: true | WeightLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeightLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeightLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeightLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeightLogMaxAggregateInputType
  }

  export type GetWeightLogAggregateType<T extends WeightLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWeightLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeightLog[P]>
      : GetScalarType<T[P], AggregateWeightLog[P]>
  }




  export type WeightLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeightLogWhereInput
    orderBy?: WeightLogOrderByWithAggregationInput | WeightLogOrderByWithAggregationInput[]
    by: WeightLogScalarFieldEnum[] | WeightLogScalarFieldEnum
    having?: WeightLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeightLogCountAggregateInputType | true
    _avg?: WeightLogAvgAggregateInputType
    _sum?: WeightLogSumAggregateInputType
    _min?: WeightLogMinAggregateInputType
    _max?: WeightLogMaxAggregateInputType
  }

  export type WeightLogGroupByOutputType = {
    logID: number
    date: Date
    weight: number
    userID: number
    _count: WeightLogCountAggregateOutputType | null
    _avg: WeightLogAvgAggregateOutputType | null
    _sum: WeightLogSumAggregateOutputType | null
    _min: WeightLogMinAggregateOutputType | null
    _max: WeightLogMaxAggregateOutputType | null
  }

  type GetWeightLogGroupByPayload<T extends WeightLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeightLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeightLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeightLogGroupByOutputType[P]>
            : GetScalarType<T[P], WeightLogGroupByOutputType[P]>
        }
      >
    >


  export type WeightLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logID?: boolean
    date?: boolean
    weight?: boolean
    userID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weightLog"]>

  export type WeightLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logID?: boolean
    date?: boolean
    weight?: boolean
    userID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weightLog"]>

  export type WeightLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logID?: boolean
    date?: boolean
    weight?: boolean
    userID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weightLog"]>

  export type WeightLogSelectScalar = {
    logID?: boolean
    date?: boolean
    weight?: boolean
    userID?: boolean
  }

  export type WeightLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"logID" | "date" | "weight" | "userID", ExtArgs["result"]["weightLog"]>
  export type WeightLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeightLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeightLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WeightLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeightLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      logID: number
      date: Date
      weight: number
      userID: number
    }, ExtArgs["result"]["weightLog"]>
    composites: {}
  }

  type WeightLogGetPayload<S extends boolean | null | undefined | WeightLogDefaultArgs> = $Result.GetResult<Prisma.$WeightLogPayload, S>

  type WeightLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeightLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeightLogCountAggregateInputType | true
    }

  export interface WeightLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeightLog'], meta: { name: 'WeightLog' } }
    /**
     * Find zero or one WeightLog that matches the filter.
     * @param {WeightLogFindUniqueArgs} args - Arguments to find a WeightLog
     * @example
     * // Get one WeightLog
     * const weightLog = await prisma.weightLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeightLogFindUniqueArgs>(args: SelectSubset<T, WeightLogFindUniqueArgs<ExtArgs>>): Prisma__WeightLogClient<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeightLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeightLogFindUniqueOrThrowArgs} args - Arguments to find a WeightLog
     * @example
     * // Get one WeightLog
     * const weightLog = await prisma.weightLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeightLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WeightLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeightLogClient<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeightLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightLogFindFirstArgs} args - Arguments to find a WeightLog
     * @example
     * // Get one WeightLog
     * const weightLog = await prisma.weightLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeightLogFindFirstArgs>(args?: SelectSubset<T, WeightLogFindFirstArgs<ExtArgs>>): Prisma__WeightLogClient<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeightLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightLogFindFirstOrThrowArgs} args - Arguments to find a WeightLog
     * @example
     * // Get one WeightLog
     * const weightLog = await prisma.weightLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeightLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WeightLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeightLogClient<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeightLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeightLogs
     * const weightLogs = await prisma.weightLog.findMany()
     * 
     * // Get first 10 WeightLogs
     * const weightLogs = await prisma.weightLog.findMany({ take: 10 })
     * 
     * // Only select the `logID`
     * const weightLogWithLogIDOnly = await prisma.weightLog.findMany({ select: { logID: true } })
     * 
     */
    findMany<T extends WeightLogFindManyArgs>(args?: SelectSubset<T, WeightLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeightLog.
     * @param {WeightLogCreateArgs} args - Arguments to create a WeightLog.
     * @example
     * // Create one WeightLog
     * const WeightLog = await prisma.weightLog.create({
     *   data: {
     *     // ... data to create a WeightLog
     *   }
     * })
     * 
     */
    create<T extends WeightLogCreateArgs>(args: SelectSubset<T, WeightLogCreateArgs<ExtArgs>>): Prisma__WeightLogClient<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeightLogs.
     * @param {WeightLogCreateManyArgs} args - Arguments to create many WeightLogs.
     * @example
     * // Create many WeightLogs
     * const weightLog = await prisma.weightLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeightLogCreateManyArgs>(args?: SelectSubset<T, WeightLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeightLogs and returns the data saved in the database.
     * @param {WeightLogCreateManyAndReturnArgs} args - Arguments to create many WeightLogs.
     * @example
     * // Create many WeightLogs
     * const weightLog = await prisma.weightLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeightLogs and only return the `logID`
     * const weightLogWithLogIDOnly = await prisma.weightLog.createManyAndReturn({
     *   select: { logID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeightLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WeightLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeightLog.
     * @param {WeightLogDeleteArgs} args - Arguments to delete one WeightLog.
     * @example
     * // Delete one WeightLog
     * const WeightLog = await prisma.weightLog.delete({
     *   where: {
     *     // ... filter to delete one WeightLog
     *   }
     * })
     * 
     */
    delete<T extends WeightLogDeleteArgs>(args: SelectSubset<T, WeightLogDeleteArgs<ExtArgs>>): Prisma__WeightLogClient<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeightLog.
     * @param {WeightLogUpdateArgs} args - Arguments to update one WeightLog.
     * @example
     * // Update one WeightLog
     * const weightLog = await prisma.weightLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeightLogUpdateArgs>(args: SelectSubset<T, WeightLogUpdateArgs<ExtArgs>>): Prisma__WeightLogClient<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeightLogs.
     * @param {WeightLogDeleteManyArgs} args - Arguments to filter WeightLogs to delete.
     * @example
     * // Delete a few WeightLogs
     * const { count } = await prisma.weightLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeightLogDeleteManyArgs>(args?: SelectSubset<T, WeightLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeightLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeightLogs
     * const weightLog = await prisma.weightLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeightLogUpdateManyArgs>(args: SelectSubset<T, WeightLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeightLogs and returns the data updated in the database.
     * @param {WeightLogUpdateManyAndReturnArgs} args - Arguments to update many WeightLogs.
     * @example
     * // Update many WeightLogs
     * const weightLog = await prisma.weightLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeightLogs and only return the `logID`
     * const weightLogWithLogIDOnly = await prisma.weightLog.updateManyAndReturn({
     *   select: { logID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeightLogUpdateManyAndReturnArgs>(args: SelectSubset<T, WeightLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeightLog.
     * @param {WeightLogUpsertArgs} args - Arguments to update or create a WeightLog.
     * @example
     * // Update or create a WeightLog
     * const weightLog = await prisma.weightLog.upsert({
     *   create: {
     *     // ... data to create a WeightLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeightLog we want to update
     *   }
     * })
     */
    upsert<T extends WeightLogUpsertArgs>(args: SelectSubset<T, WeightLogUpsertArgs<ExtArgs>>): Prisma__WeightLogClient<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeightLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightLogCountArgs} args - Arguments to filter WeightLogs to count.
     * @example
     * // Count the number of WeightLogs
     * const count = await prisma.weightLog.count({
     *   where: {
     *     // ... the filter for the WeightLogs we want to count
     *   }
     * })
    **/
    count<T extends WeightLogCountArgs>(
      args?: Subset<T, WeightLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeightLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeightLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeightLogAggregateArgs>(args: Subset<T, WeightLogAggregateArgs>): Prisma.PrismaPromise<GetWeightLogAggregateType<T>>

    /**
     * Group by WeightLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeightLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeightLogGroupByArgs['orderBy'] }
        : { orderBy?: WeightLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeightLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeightLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeightLog model
   */
  readonly fields: WeightLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeightLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeightLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WeightLog model
   */
  interface WeightLogFieldRefs {
    readonly logID: FieldRef<"WeightLog", 'Int'>
    readonly date: FieldRef<"WeightLog", 'DateTime'>
    readonly weight: FieldRef<"WeightLog", 'Float'>
    readonly userID: FieldRef<"WeightLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WeightLog findUnique
   */
  export type WeightLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightLog
     */
    omit?: WeightLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * Filter, which WeightLog to fetch.
     */
    where: WeightLogWhereUniqueInput
  }

  /**
   * WeightLog findUniqueOrThrow
   */
  export type WeightLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightLog
     */
    omit?: WeightLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * Filter, which WeightLog to fetch.
     */
    where: WeightLogWhereUniqueInput
  }

  /**
   * WeightLog findFirst
   */
  export type WeightLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightLog
     */
    omit?: WeightLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * Filter, which WeightLog to fetch.
     */
    where?: WeightLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightLogs to fetch.
     */
    orderBy?: WeightLogOrderByWithRelationInput | WeightLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeightLogs.
     */
    cursor?: WeightLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeightLogs.
     */
    distinct?: WeightLogScalarFieldEnum | WeightLogScalarFieldEnum[]
  }

  /**
   * WeightLog findFirstOrThrow
   */
  export type WeightLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightLog
     */
    omit?: WeightLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * Filter, which WeightLog to fetch.
     */
    where?: WeightLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightLogs to fetch.
     */
    orderBy?: WeightLogOrderByWithRelationInput | WeightLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeightLogs.
     */
    cursor?: WeightLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeightLogs.
     */
    distinct?: WeightLogScalarFieldEnum | WeightLogScalarFieldEnum[]
  }

  /**
   * WeightLog findMany
   */
  export type WeightLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightLog
     */
    omit?: WeightLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * Filter, which WeightLogs to fetch.
     */
    where?: WeightLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightLogs to fetch.
     */
    orderBy?: WeightLogOrderByWithRelationInput | WeightLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeightLogs.
     */
    cursor?: WeightLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightLogs.
     */
    skip?: number
    distinct?: WeightLogScalarFieldEnum | WeightLogScalarFieldEnum[]
  }

  /**
   * WeightLog create
   */
  export type WeightLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightLog
     */
    omit?: WeightLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WeightLog.
     */
    data: XOR<WeightLogCreateInput, WeightLogUncheckedCreateInput>
  }

  /**
   * WeightLog createMany
   */
  export type WeightLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeightLogs.
     */
    data: WeightLogCreateManyInput | WeightLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeightLog createManyAndReturn
   */
  export type WeightLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeightLog
     */
    omit?: WeightLogOmit<ExtArgs> | null
    /**
     * The data used to create many WeightLogs.
     */
    data: WeightLogCreateManyInput | WeightLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeightLog update
   */
  export type WeightLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightLog
     */
    omit?: WeightLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WeightLog.
     */
    data: XOR<WeightLogUpdateInput, WeightLogUncheckedUpdateInput>
    /**
     * Choose, which WeightLog to update.
     */
    where: WeightLogWhereUniqueInput
  }

  /**
   * WeightLog updateMany
   */
  export type WeightLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeightLogs.
     */
    data: XOR<WeightLogUpdateManyMutationInput, WeightLogUncheckedUpdateManyInput>
    /**
     * Filter which WeightLogs to update
     */
    where?: WeightLogWhereInput
    /**
     * Limit how many WeightLogs to update.
     */
    limit?: number
  }

  /**
   * WeightLog updateManyAndReturn
   */
  export type WeightLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeightLog
     */
    omit?: WeightLogOmit<ExtArgs> | null
    /**
     * The data used to update WeightLogs.
     */
    data: XOR<WeightLogUpdateManyMutationInput, WeightLogUncheckedUpdateManyInput>
    /**
     * Filter which WeightLogs to update
     */
    where?: WeightLogWhereInput
    /**
     * Limit how many WeightLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeightLog upsert
   */
  export type WeightLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightLog
     */
    omit?: WeightLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WeightLog to update in case it exists.
     */
    where: WeightLogWhereUniqueInput
    /**
     * In case the WeightLog found by the `where` argument doesn't exist, create a new WeightLog with this data.
     */
    create: XOR<WeightLogCreateInput, WeightLogUncheckedCreateInput>
    /**
     * In case the WeightLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeightLogUpdateInput, WeightLogUncheckedUpdateInput>
  }

  /**
   * WeightLog delete
   */
  export type WeightLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightLog
     */
    omit?: WeightLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * Filter which WeightLog to delete.
     */
    where: WeightLogWhereUniqueInput
  }

  /**
   * WeightLog deleteMany
   */
  export type WeightLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeightLogs to delete
     */
    where?: WeightLogWhereInput
    /**
     * Limit how many WeightLogs to delete.
     */
    limit?: number
  }

  /**
   * WeightLog without action
   */
  export type WeightLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeightLog
     */
    omit?: WeightLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutLog
   */

  export type AggregateWorkoutLog = {
    _count: WorkoutLogCountAggregateOutputType | null
    _avg: WorkoutLogAvgAggregateOutputType | null
    _sum: WorkoutLogSumAggregateOutputType | null
    _min: WorkoutLogMinAggregateOutputType | null
    _max: WorkoutLogMaxAggregateOutputType | null
  }

  export type WorkoutLogAvgAggregateOutputType = {
    logID: number | null
    sets: number | null
    reps: number | null
    weight: number | null
    userID: number | null
  }

  export type WorkoutLogSumAggregateOutputType = {
    logID: number | null
    sets: number | null
    reps: number | null
    weight: number | null
    userID: number | null
  }

  export type WorkoutLogMinAggregateOutputType = {
    logID: number | null
    planName: string | null
    exerciseName: string | null
    sets: number | null
    reps: number | null
    weight: number | null
    date: Date | null
    userID: number | null
  }

  export type WorkoutLogMaxAggregateOutputType = {
    logID: number | null
    planName: string | null
    exerciseName: string | null
    sets: number | null
    reps: number | null
    weight: number | null
    date: Date | null
    userID: number | null
  }

  export type WorkoutLogCountAggregateOutputType = {
    logID: number
    planName: number
    exerciseName: number
    sets: number
    reps: number
    weight: number
    date: number
    userID: number
    _all: number
  }


  export type WorkoutLogAvgAggregateInputType = {
    logID?: true
    sets?: true
    reps?: true
    weight?: true
    userID?: true
  }

  export type WorkoutLogSumAggregateInputType = {
    logID?: true
    sets?: true
    reps?: true
    weight?: true
    userID?: true
  }

  export type WorkoutLogMinAggregateInputType = {
    logID?: true
    planName?: true
    exerciseName?: true
    sets?: true
    reps?: true
    weight?: true
    date?: true
    userID?: true
  }

  export type WorkoutLogMaxAggregateInputType = {
    logID?: true
    planName?: true
    exerciseName?: true
    sets?: true
    reps?: true
    weight?: true
    date?: true
    userID?: true
  }

  export type WorkoutLogCountAggregateInputType = {
    logID?: true
    planName?: true
    exerciseName?: true
    sets?: true
    reps?: true
    weight?: true
    date?: true
    userID?: true
    _all?: true
  }

  export type WorkoutLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutLog to aggregate.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutLogs
    **/
    _count?: true | WorkoutLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutLogMaxAggregateInputType
  }

  export type GetWorkoutLogAggregateType<T extends WorkoutLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutLog[P]>
      : GetScalarType<T[P], AggregateWorkoutLog[P]>
  }




  export type WorkoutLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutLogWhereInput
    orderBy?: WorkoutLogOrderByWithAggregationInput | WorkoutLogOrderByWithAggregationInput[]
    by: WorkoutLogScalarFieldEnum[] | WorkoutLogScalarFieldEnum
    having?: WorkoutLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutLogCountAggregateInputType | true
    _avg?: WorkoutLogAvgAggregateInputType
    _sum?: WorkoutLogSumAggregateInputType
    _min?: WorkoutLogMinAggregateInputType
    _max?: WorkoutLogMaxAggregateInputType
  }

  export type WorkoutLogGroupByOutputType = {
    logID: number
    planName: string | null
    exerciseName: string
    sets: number | null
    reps: number | null
    weight: number | null
    date: Date
    userID: number
    _count: WorkoutLogCountAggregateOutputType | null
    _avg: WorkoutLogAvgAggregateOutputType | null
    _sum: WorkoutLogSumAggregateOutputType | null
    _min: WorkoutLogMinAggregateOutputType | null
    _max: WorkoutLogMaxAggregateOutputType | null
  }

  type GetWorkoutLogGroupByPayload<T extends WorkoutLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutLogGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutLogGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logID?: boolean
    planName?: boolean
    exerciseName?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    date?: boolean
    userID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutLog"]>

  export type WorkoutLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logID?: boolean
    planName?: boolean
    exerciseName?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    date?: boolean
    userID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutLog"]>

  export type WorkoutLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logID?: boolean
    planName?: boolean
    exerciseName?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    date?: boolean
    userID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutLog"]>

  export type WorkoutLogSelectScalar = {
    logID?: boolean
    planName?: boolean
    exerciseName?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    date?: boolean
    userID?: boolean
  }

  export type WorkoutLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"logID" | "planName" | "exerciseName" | "sets" | "reps" | "weight" | "date" | "userID", ExtArgs["result"]["workoutLog"]>
  export type WorkoutLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkoutLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      logID: number
      planName: string | null
      exerciseName: string
      sets: number | null
      reps: number | null
      weight: number | null
      date: Date
      userID: number
    }, ExtArgs["result"]["workoutLog"]>
    composites: {}
  }

  type WorkoutLogGetPayload<S extends boolean | null | undefined | WorkoutLogDefaultArgs> = $Result.GetResult<Prisma.$WorkoutLogPayload, S>

  type WorkoutLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutLogCountAggregateInputType | true
    }

  export interface WorkoutLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutLog'], meta: { name: 'WorkoutLog' } }
    /**
     * Find zero or one WorkoutLog that matches the filter.
     * @param {WorkoutLogFindUniqueArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutLogFindUniqueArgs>(args: SelectSubset<T, WorkoutLogFindUniqueArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutLogFindUniqueOrThrowArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogFindFirstArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutLogFindFirstArgs>(args?: SelectSubset<T, WorkoutLogFindFirstArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogFindFirstOrThrowArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutLogs
     * const workoutLogs = await prisma.workoutLog.findMany()
     * 
     * // Get first 10 WorkoutLogs
     * const workoutLogs = await prisma.workoutLog.findMany({ take: 10 })
     * 
     * // Only select the `logID`
     * const workoutLogWithLogIDOnly = await prisma.workoutLog.findMany({ select: { logID: true } })
     * 
     */
    findMany<T extends WorkoutLogFindManyArgs>(args?: SelectSubset<T, WorkoutLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutLog.
     * @param {WorkoutLogCreateArgs} args - Arguments to create a WorkoutLog.
     * @example
     * // Create one WorkoutLog
     * const WorkoutLog = await prisma.workoutLog.create({
     *   data: {
     *     // ... data to create a WorkoutLog
     *   }
     * })
     * 
     */
    create<T extends WorkoutLogCreateArgs>(args: SelectSubset<T, WorkoutLogCreateArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutLogs.
     * @param {WorkoutLogCreateManyArgs} args - Arguments to create many WorkoutLogs.
     * @example
     * // Create many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutLogCreateManyArgs>(args?: SelectSubset<T, WorkoutLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutLogs and returns the data saved in the database.
     * @param {WorkoutLogCreateManyAndReturnArgs} args - Arguments to create many WorkoutLogs.
     * @example
     * // Create many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutLogs and only return the `logID`
     * const workoutLogWithLogIDOnly = await prisma.workoutLog.createManyAndReturn({
     *   select: { logID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutLog.
     * @param {WorkoutLogDeleteArgs} args - Arguments to delete one WorkoutLog.
     * @example
     * // Delete one WorkoutLog
     * const WorkoutLog = await prisma.workoutLog.delete({
     *   where: {
     *     // ... filter to delete one WorkoutLog
     *   }
     * })
     * 
     */
    delete<T extends WorkoutLogDeleteArgs>(args: SelectSubset<T, WorkoutLogDeleteArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutLog.
     * @param {WorkoutLogUpdateArgs} args - Arguments to update one WorkoutLog.
     * @example
     * // Update one WorkoutLog
     * const workoutLog = await prisma.workoutLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutLogUpdateArgs>(args: SelectSubset<T, WorkoutLogUpdateArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutLogs.
     * @param {WorkoutLogDeleteManyArgs} args - Arguments to filter WorkoutLogs to delete.
     * @example
     * // Delete a few WorkoutLogs
     * const { count } = await prisma.workoutLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutLogDeleteManyArgs>(args?: SelectSubset<T, WorkoutLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutLogUpdateManyArgs>(args: SelectSubset<T, WorkoutLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutLogs and returns the data updated in the database.
     * @param {WorkoutLogUpdateManyAndReturnArgs} args - Arguments to update many WorkoutLogs.
     * @example
     * // Update many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutLogs and only return the `logID`
     * const workoutLogWithLogIDOnly = await prisma.workoutLog.updateManyAndReturn({
     *   select: { logID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkoutLogUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutLog.
     * @param {WorkoutLogUpsertArgs} args - Arguments to update or create a WorkoutLog.
     * @example
     * // Update or create a WorkoutLog
     * const workoutLog = await prisma.workoutLog.upsert({
     *   create: {
     *     // ... data to create a WorkoutLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutLog we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutLogUpsertArgs>(args: SelectSubset<T, WorkoutLogUpsertArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogCountArgs} args - Arguments to filter WorkoutLogs to count.
     * @example
     * // Count the number of WorkoutLogs
     * const count = await prisma.workoutLog.count({
     *   where: {
     *     // ... the filter for the WorkoutLogs we want to count
     *   }
     * })
    **/
    count<T extends WorkoutLogCountArgs>(
      args?: Subset<T, WorkoutLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutLogAggregateArgs>(args: Subset<T, WorkoutLogAggregateArgs>): Prisma.PrismaPromise<GetWorkoutLogAggregateType<T>>

    /**
     * Group by WorkoutLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutLogGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutLog model
   */
  readonly fields: WorkoutLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkoutLog model
   */
  interface WorkoutLogFieldRefs {
    readonly logID: FieldRef<"WorkoutLog", 'Int'>
    readonly planName: FieldRef<"WorkoutLog", 'String'>
    readonly exerciseName: FieldRef<"WorkoutLog", 'String'>
    readonly sets: FieldRef<"WorkoutLog", 'Int'>
    readonly reps: FieldRef<"WorkoutLog", 'Int'>
    readonly weight: FieldRef<"WorkoutLog", 'Float'>
    readonly date: FieldRef<"WorkoutLog", 'DateTime'>
    readonly userID: FieldRef<"WorkoutLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutLog findUnique
   */
  export type WorkoutLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog findUniqueOrThrow
   */
  export type WorkoutLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog findFirst
   */
  export type WorkoutLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutLogs.
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutLogs.
     */
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * WorkoutLog findFirstOrThrow
   */
  export type WorkoutLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutLogs.
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutLogs.
     */
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * WorkoutLog findMany
   */
  export type WorkoutLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLogs to fetch.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutLogs.
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * WorkoutLog create
   */
  export type WorkoutLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutLog.
     */
    data: XOR<WorkoutLogCreateInput, WorkoutLogUncheckedCreateInput>
  }

  /**
   * WorkoutLog createMany
   */
  export type WorkoutLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutLogs.
     */
    data: WorkoutLogCreateManyInput | WorkoutLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutLog createManyAndReturn
   */
  export type WorkoutLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutLogs.
     */
    data: WorkoutLogCreateManyInput | WorkoutLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutLog update
   */
  export type WorkoutLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutLog.
     */
    data: XOR<WorkoutLogUpdateInput, WorkoutLogUncheckedUpdateInput>
    /**
     * Choose, which WorkoutLog to update.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog updateMany
   */
  export type WorkoutLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutLogs.
     */
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutLogs to update
     */
    where?: WorkoutLogWhereInput
    /**
     * Limit how many WorkoutLogs to update.
     */
    limit?: number
  }

  /**
   * WorkoutLog updateManyAndReturn
   */
  export type WorkoutLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutLogs.
     */
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutLogs to update
     */
    where?: WorkoutLogWhereInput
    /**
     * Limit how many WorkoutLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutLog upsert
   */
  export type WorkoutLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutLog to update in case it exists.
     */
    where: WorkoutLogWhereUniqueInput
    /**
     * In case the WorkoutLog found by the `where` argument doesn't exist, create a new WorkoutLog with this data.
     */
    create: XOR<WorkoutLogCreateInput, WorkoutLogUncheckedCreateInput>
    /**
     * In case the WorkoutLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutLogUpdateInput, WorkoutLogUncheckedUpdateInput>
  }

  /**
   * WorkoutLog delete
   */
  export type WorkoutLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter which WorkoutLog to delete.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog deleteMany
   */
  export type WorkoutLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutLogs to delete
     */
    where?: WorkoutLogWhereInput
    /**
     * Limit how many WorkoutLogs to delete.
     */
    limit?: number
  }

  /**
   * WorkoutLog without action
   */
  export type WorkoutLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
  }


  /**
   * Model StepRecord
   */

  export type AggregateStepRecord = {
    _count: StepRecordCountAggregateOutputType | null
    _avg: StepRecordAvgAggregateOutputType | null
    _sum: StepRecordSumAggregateOutputType | null
    _min: StepRecordMinAggregateOutputType | null
    _max: StepRecordMaxAggregateOutputType | null
  }

  export type StepRecordAvgAggregateOutputType = {
    recordID: number | null
    stepsCount: number | null
    distance: number | null
    calories: number | null
    userID: number | null
  }

  export type StepRecordSumAggregateOutputType = {
    recordID: number | null
    stepsCount: number | null
    distance: number | null
    calories: number | null
    userID: number | null
  }

  export type StepRecordMinAggregateOutputType = {
    recordID: number | null
    stepsCount: number | null
    distance: number | null
    calories: number | null
    date: Date | null
    userID: number | null
  }

  export type StepRecordMaxAggregateOutputType = {
    recordID: number | null
    stepsCount: number | null
    distance: number | null
    calories: number | null
    date: Date | null
    userID: number | null
  }

  export type StepRecordCountAggregateOutputType = {
    recordID: number
    stepsCount: number
    distance: number
    calories: number
    date: number
    userID: number
    _all: number
  }


  export type StepRecordAvgAggregateInputType = {
    recordID?: true
    stepsCount?: true
    distance?: true
    calories?: true
    userID?: true
  }

  export type StepRecordSumAggregateInputType = {
    recordID?: true
    stepsCount?: true
    distance?: true
    calories?: true
    userID?: true
  }

  export type StepRecordMinAggregateInputType = {
    recordID?: true
    stepsCount?: true
    distance?: true
    calories?: true
    date?: true
    userID?: true
  }

  export type StepRecordMaxAggregateInputType = {
    recordID?: true
    stepsCount?: true
    distance?: true
    calories?: true
    date?: true
    userID?: true
  }

  export type StepRecordCountAggregateInputType = {
    recordID?: true
    stepsCount?: true
    distance?: true
    calories?: true
    date?: true
    userID?: true
    _all?: true
  }

  export type StepRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StepRecord to aggregate.
     */
    where?: StepRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepRecords to fetch.
     */
    orderBy?: StepRecordOrderByWithRelationInput | StepRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StepRecords
    **/
    _count?: true | StepRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StepRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StepRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepRecordMaxAggregateInputType
  }

  export type GetStepRecordAggregateType<T extends StepRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateStepRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStepRecord[P]>
      : GetScalarType<T[P], AggregateStepRecord[P]>
  }




  export type StepRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepRecordWhereInput
    orderBy?: StepRecordOrderByWithAggregationInput | StepRecordOrderByWithAggregationInput[]
    by: StepRecordScalarFieldEnum[] | StepRecordScalarFieldEnum
    having?: StepRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepRecordCountAggregateInputType | true
    _avg?: StepRecordAvgAggregateInputType
    _sum?: StepRecordSumAggregateInputType
    _min?: StepRecordMinAggregateInputType
    _max?: StepRecordMaxAggregateInputType
  }

  export type StepRecordGroupByOutputType = {
    recordID: number
    stepsCount: number
    distance: number | null
    calories: number | null
    date: Date
    userID: number
    _count: StepRecordCountAggregateOutputType | null
    _avg: StepRecordAvgAggregateOutputType | null
    _sum: StepRecordSumAggregateOutputType | null
    _min: StepRecordMinAggregateOutputType | null
    _max: StepRecordMaxAggregateOutputType | null
  }

  type GetStepRecordGroupByPayload<T extends StepRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepRecordGroupByOutputType[P]>
            : GetScalarType<T[P], StepRecordGroupByOutputType[P]>
        }
      >
    >


  export type StepRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recordID?: boolean
    stepsCount?: boolean
    distance?: boolean
    calories?: boolean
    date?: boolean
    userID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepRecord"]>

  export type StepRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recordID?: boolean
    stepsCount?: boolean
    distance?: boolean
    calories?: boolean
    date?: boolean
    userID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepRecord"]>

  export type StepRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recordID?: boolean
    stepsCount?: boolean
    distance?: boolean
    calories?: boolean
    date?: boolean
    userID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepRecord"]>

  export type StepRecordSelectScalar = {
    recordID?: boolean
    stepsCount?: boolean
    distance?: boolean
    calories?: boolean
    date?: boolean
    userID?: boolean
  }

  export type StepRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"recordID" | "stepsCount" | "distance" | "calories" | "date" | "userID", ExtArgs["result"]["stepRecord"]>
  export type StepRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StepRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StepRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StepRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StepRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      recordID: number
      stepsCount: number
      distance: number | null
      calories: number | null
      date: Date
      userID: number
    }, ExtArgs["result"]["stepRecord"]>
    composites: {}
  }

  type StepRecordGetPayload<S extends boolean | null | undefined | StepRecordDefaultArgs> = $Result.GetResult<Prisma.$StepRecordPayload, S>

  type StepRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StepRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StepRecordCountAggregateInputType | true
    }

  export interface StepRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StepRecord'], meta: { name: 'StepRecord' } }
    /**
     * Find zero or one StepRecord that matches the filter.
     * @param {StepRecordFindUniqueArgs} args - Arguments to find a StepRecord
     * @example
     * // Get one StepRecord
     * const stepRecord = await prisma.stepRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepRecordFindUniqueArgs>(args: SelectSubset<T, StepRecordFindUniqueArgs<ExtArgs>>): Prisma__StepRecordClient<$Result.GetResult<Prisma.$StepRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StepRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StepRecordFindUniqueOrThrowArgs} args - Arguments to find a StepRecord
     * @example
     * // Get one StepRecord
     * const stepRecord = await prisma.stepRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, StepRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StepRecordClient<$Result.GetResult<Prisma.$StepRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StepRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepRecordFindFirstArgs} args - Arguments to find a StepRecord
     * @example
     * // Get one StepRecord
     * const stepRecord = await prisma.stepRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepRecordFindFirstArgs>(args?: SelectSubset<T, StepRecordFindFirstArgs<ExtArgs>>): Prisma__StepRecordClient<$Result.GetResult<Prisma.$StepRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StepRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepRecordFindFirstOrThrowArgs} args - Arguments to find a StepRecord
     * @example
     * // Get one StepRecord
     * const stepRecord = await prisma.stepRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, StepRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__StepRecordClient<$Result.GetResult<Prisma.$StepRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StepRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StepRecords
     * const stepRecords = await prisma.stepRecord.findMany()
     * 
     * // Get first 10 StepRecords
     * const stepRecords = await prisma.stepRecord.findMany({ take: 10 })
     * 
     * // Only select the `recordID`
     * const stepRecordWithRecordIDOnly = await prisma.stepRecord.findMany({ select: { recordID: true } })
     * 
     */
    findMany<T extends StepRecordFindManyArgs>(args?: SelectSubset<T, StepRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StepRecord.
     * @param {StepRecordCreateArgs} args - Arguments to create a StepRecord.
     * @example
     * // Create one StepRecord
     * const StepRecord = await prisma.stepRecord.create({
     *   data: {
     *     // ... data to create a StepRecord
     *   }
     * })
     * 
     */
    create<T extends StepRecordCreateArgs>(args: SelectSubset<T, StepRecordCreateArgs<ExtArgs>>): Prisma__StepRecordClient<$Result.GetResult<Prisma.$StepRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StepRecords.
     * @param {StepRecordCreateManyArgs} args - Arguments to create many StepRecords.
     * @example
     * // Create many StepRecords
     * const stepRecord = await prisma.stepRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StepRecordCreateManyArgs>(args?: SelectSubset<T, StepRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StepRecords and returns the data saved in the database.
     * @param {StepRecordCreateManyAndReturnArgs} args - Arguments to create many StepRecords.
     * @example
     * // Create many StepRecords
     * const stepRecord = await prisma.stepRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StepRecords and only return the `recordID`
     * const stepRecordWithRecordIDOnly = await prisma.stepRecord.createManyAndReturn({
     *   select: { recordID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StepRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, StepRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StepRecord.
     * @param {StepRecordDeleteArgs} args - Arguments to delete one StepRecord.
     * @example
     * // Delete one StepRecord
     * const StepRecord = await prisma.stepRecord.delete({
     *   where: {
     *     // ... filter to delete one StepRecord
     *   }
     * })
     * 
     */
    delete<T extends StepRecordDeleteArgs>(args: SelectSubset<T, StepRecordDeleteArgs<ExtArgs>>): Prisma__StepRecordClient<$Result.GetResult<Prisma.$StepRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StepRecord.
     * @param {StepRecordUpdateArgs} args - Arguments to update one StepRecord.
     * @example
     * // Update one StepRecord
     * const stepRecord = await prisma.stepRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StepRecordUpdateArgs>(args: SelectSubset<T, StepRecordUpdateArgs<ExtArgs>>): Prisma__StepRecordClient<$Result.GetResult<Prisma.$StepRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StepRecords.
     * @param {StepRecordDeleteManyArgs} args - Arguments to filter StepRecords to delete.
     * @example
     * // Delete a few StepRecords
     * const { count } = await prisma.stepRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StepRecordDeleteManyArgs>(args?: SelectSubset<T, StepRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StepRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StepRecords
     * const stepRecord = await prisma.stepRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StepRecordUpdateManyArgs>(args: SelectSubset<T, StepRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StepRecords and returns the data updated in the database.
     * @param {StepRecordUpdateManyAndReturnArgs} args - Arguments to update many StepRecords.
     * @example
     * // Update many StepRecords
     * const stepRecord = await prisma.stepRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StepRecords and only return the `recordID`
     * const stepRecordWithRecordIDOnly = await prisma.stepRecord.updateManyAndReturn({
     *   select: { recordID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StepRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, StepRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StepRecord.
     * @param {StepRecordUpsertArgs} args - Arguments to update or create a StepRecord.
     * @example
     * // Update or create a StepRecord
     * const stepRecord = await prisma.stepRecord.upsert({
     *   create: {
     *     // ... data to create a StepRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StepRecord we want to update
     *   }
     * })
     */
    upsert<T extends StepRecordUpsertArgs>(args: SelectSubset<T, StepRecordUpsertArgs<ExtArgs>>): Prisma__StepRecordClient<$Result.GetResult<Prisma.$StepRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StepRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepRecordCountArgs} args - Arguments to filter StepRecords to count.
     * @example
     * // Count the number of StepRecords
     * const count = await prisma.stepRecord.count({
     *   where: {
     *     // ... the filter for the StepRecords we want to count
     *   }
     * })
    **/
    count<T extends StepRecordCountArgs>(
      args?: Subset<T, StepRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StepRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StepRecordAggregateArgs>(args: Subset<T, StepRecordAggregateArgs>): Prisma.PrismaPromise<GetStepRecordAggregateType<T>>

    /**
     * Group by StepRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StepRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepRecordGroupByArgs['orderBy'] }
        : { orderBy?: StepRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StepRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StepRecord model
   */
  readonly fields: StepRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StepRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StepRecord model
   */
  interface StepRecordFieldRefs {
    readonly recordID: FieldRef<"StepRecord", 'Int'>
    readonly stepsCount: FieldRef<"StepRecord", 'Int'>
    readonly distance: FieldRef<"StepRecord", 'Float'>
    readonly calories: FieldRef<"StepRecord", 'Float'>
    readonly date: FieldRef<"StepRecord", 'DateTime'>
    readonly userID: FieldRef<"StepRecord", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StepRecord findUnique
   */
  export type StepRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRecord
     */
    select?: StepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRecord
     */
    omit?: StepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRecordInclude<ExtArgs> | null
    /**
     * Filter, which StepRecord to fetch.
     */
    where: StepRecordWhereUniqueInput
  }

  /**
   * StepRecord findUniqueOrThrow
   */
  export type StepRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRecord
     */
    select?: StepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRecord
     */
    omit?: StepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRecordInclude<ExtArgs> | null
    /**
     * Filter, which StepRecord to fetch.
     */
    where: StepRecordWhereUniqueInput
  }

  /**
   * StepRecord findFirst
   */
  export type StepRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRecord
     */
    select?: StepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRecord
     */
    omit?: StepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRecordInclude<ExtArgs> | null
    /**
     * Filter, which StepRecord to fetch.
     */
    where?: StepRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepRecords to fetch.
     */
    orderBy?: StepRecordOrderByWithRelationInput | StepRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StepRecords.
     */
    cursor?: StepRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StepRecords.
     */
    distinct?: StepRecordScalarFieldEnum | StepRecordScalarFieldEnum[]
  }

  /**
   * StepRecord findFirstOrThrow
   */
  export type StepRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRecord
     */
    select?: StepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRecord
     */
    omit?: StepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRecordInclude<ExtArgs> | null
    /**
     * Filter, which StepRecord to fetch.
     */
    where?: StepRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepRecords to fetch.
     */
    orderBy?: StepRecordOrderByWithRelationInput | StepRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StepRecords.
     */
    cursor?: StepRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StepRecords.
     */
    distinct?: StepRecordScalarFieldEnum | StepRecordScalarFieldEnum[]
  }

  /**
   * StepRecord findMany
   */
  export type StepRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRecord
     */
    select?: StepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRecord
     */
    omit?: StepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRecordInclude<ExtArgs> | null
    /**
     * Filter, which StepRecords to fetch.
     */
    where?: StepRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepRecords to fetch.
     */
    orderBy?: StepRecordOrderByWithRelationInput | StepRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StepRecords.
     */
    cursor?: StepRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepRecords.
     */
    skip?: number
    distinct?: StepRecordScalarFieldEnum | StepRecordScalarFieldEnum[]
  }

  /**
   * StepRecord create
   */
  export type StepRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRecord
     */
    select?: StepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRecord
     */
    omit?: StepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a StepRecord.
     */
    data: XOR<StepRecordCreateInput, StepRecordUncheckedCreateInput>
  }

  /**
   * StepRecord createMany
   */
  export type StepRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StepRecords.
     */
    data: StepRecordCreateManyInput | StepRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StepRecord createManyAndReturn
   */
  export type StepRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRecord
     */
    select?: StepRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StepRecord
     */
    omit?: StepRecordOmit<ExtArgs> | null
    /**
     * The data used to create many StepRecords.
     */
    data: StepRecordCreateManyInput | StepRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StepRecord update
   */
  export type StepRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRecord
     */
    select?: StepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRecord
     */
    omit?: StepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a StepRecord.
     */
    data: XOR<StepRecordUpdateInput, StepRecordUncheckedUpdateInput>
    /**
     * Choose, which StepRecord to update.
     */
    where: StepRecordWhereUniqueInput
  }

  /**
   * StepRecord updateMany
   */
  export type StepRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StepRecords.
     */
    data: XOR<StepRecordUpdateManyMutationInput, StepRecordUncheckedUpdateManyInput>
    /**
     * Filter which StepRecords to update
     */
    where?: StepRecordWhereInput
    /**
     * Limit how many StepRecords to update.
     */
    limit?: number
  }

  /**
   * StepRecord updateManyAndReturn
   */
  export type StepRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRecord
     */
    select?: StepRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StepRecord
     */
    omit?: StepRecordOmit<ExtArgs> | null
    /**
     * The data used to update StepRecords.
     */
    data: XOR<StepRecordUpdateManyMutationInput, StepRecordUncheckedUpdateManyInput>
    /**
     * Filter which StepRecords to update
     */
    where?: StepRecordWhereInput
    /**
     * Limit how many StepRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StepRecord upsert
   */
  export type StepRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRecord
     */
    select?: StepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRecord
     */
    omit?: StepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the StepRecord to update in case it exists.
     */
    where: StepRecordWhereUniqueInput
    /**
     * In case the StepRecord found by the `where` argument doesn't exist, create a new StepRecord with this data.
     */
    create: XOR<StepRecordCreateInput, StepRecordUncheckedCreateInput>
    /**
     * In case the StepRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepRecordUpdateInput, StepRecordUncheckedUpdateInput>
  }

  /**
   * StepRecord delete
   */
  export type StepRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRecord
     */
    select?: StepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRecord
     */
    omit?: StepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRecordInclude<ExtArgs> | null
    /**
     * Filter which StepRecord to delete.
     */
    where: StepRecordWhereUniqueInput
  }

  /**
   * StepRecord deleteMany
   */
  export type StepRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StepRecords to delete
     */
    where?: StepRecordWhereInput
    /**
     * Limit how many StepRecords to delete.
     */
    limit?: number
  }

  /**
   * StepRecord without action
   */
  export type StepRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepRecord
     */
    select?: StepRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepRecord
     */
    omit?: StepRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepRecordInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutRecommendation
   */

  export type AggregateWorkoutRecommendation = {
    _count: WorkoutRecommendationCountAggregateOutputType | null
    _avg: WorkoutRecommendationAvgAggregateOutputType | null
    _sum: WorkoutRecommendationSumAggregateOutputType | null
    _min: WorkoutRecommendationMinAggregateOutputType | null
    _max: WorkoutRecommendationMaxAggregateOutputType | null
  }

  export type WorkoutRecommendationAvgAggregateOutputType = {
    recommendationID: number | null
  }

  export type WorkoutRecommendationSumAggregateOutputType = {
    recommendationID: number | null
  }

  export type WorkoutRecommendationMinAggregateOutputType = {
    recommendationID: number | null
    planName: string | null
    description: string | null
  }

  export type WorkoutRecommendationMaxAggregateOutputType = {
    recommendationID: number | null
    planName: string | null
    description: string | null
  }

  export type WorkoutRecommendationCountAggregateOutputType = {
    recommendationID: number
    planName: number
    workoutType: number
    description: number
    _all: number
  }


  export type WorkoutRecommendationAvgAggregateInputType = {
    recommendationID?: true
  }

  export type WorkoutRecommendationSumAggregateInputType = {
    recommendationID?: true
  }

  export type WorkoutRecommendationMinAggregateInputType = {
    recommendationID?: true
    planName?: true
    description?: true
  }

  export type WorkoutRecommendationMaxAggregateInputType = {
    recommendationID?: true
    planName?: true
    description?: true
  }

  export type WorkoutRecommendationCountAggregateInputType = {
    recommendationID?: true
    planName?: true
    workoutType?: true
    description?: true
    _all?: true
  }

  export type WorkoutRecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutRecommendation to aggregate.
     */
    where?: WorkoutRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutRecommendations to fetch.
     */
    orderBy?: WorkoutRecommendationOrderByWithRelationInput | WorkoutRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutRecommendations
    **/
    _count?: true | WorkoutRecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutRecommendationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutRecommendationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutRecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutRecommendationMaxAggregateInputType
  }

  export type GetWorkoutRecommendationAggregateType<T extends WorkoutRecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutRecommendation[P]>
      : GetScalarType<T[P], AggregateWorkoutRecommendation[P]>
  }




  export type WorkoutRecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutRecommendationWhereInput
    orderBy?: WorkoutRecommendationOrderByWithAggregationInput | WorkoutRecommendationOrderByWithAggregationInput[]
    by: WorkoutRecommendationScalarFieldEnum[] | WorkoutRecommendationScalarFieldEnum
    having?: WorkoutRecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutRecommendationCountAggregateInputType | true
    _avg?: WorkoutRecommendationAvgAggregateInputType
    _sum?: WorkoutRecommendationSumAggregateInputType
    _min?: WorkoutRecommendationMinAggregateInputType
    _max?: WorkoutRecommendationMaxAggregateInputType
  }

  export type WorkoutRecommendationGroupByOutputType = {
    recommendationID: number
    planName: string
    workoutType: string[]
    description: string
    _count: WorkoutRecommendationCountAggregateOutputType | null
    _avg: WorkoutRecommendationAvgAggregateOutputType | null
    _sum: WorkoutRecommendationSumAggregateOutputType | null
    _min: WorkoutRecommendationMinAggregateOutputType | null
    _max: WorkoutRecommendationMaxAggregateOutputType | null
  }

  type GetWorkoutRecommendationGroupByPayload<T extends WorkoutRecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutRecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutRecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutRecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutRecommendationGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutRecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recommendationID?: boolean
    planName?: boolean
    workoutType?: boolean
    description?: boolean
  }, ExtArgs["result"]["workoutRecommendation"]>

  export type WorkoutRecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recommendationID?: boolean
    planName?: boolean
    workoutType?: boolean
    description?: boolean
  }, ExtArgs["result"]["workoutRecommendation"]>

  export type WorkoutRecommendationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recommendationID?: boolean
    planName?: boolean
    workoutType?: boolean
    description?: boolean
  }, ExtArgs["result"]["workoutRecommendation"]>

  export type WorkoutRecommendationSelectScalar = {
    recommendationID?: boolean
    planName?: boolean
    workoutType?: boolean
    description?: boolean
  }

  export type WorkoutRecommendationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"recommendationID" | "planName" | "workoutType" | "description", ExtArgs["result"]["workoutRecommendation"]>

  export type $WorkoutRecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutRecommendation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      recommendationID: number
      planName: string
      workoutType: string[]
      description: string
    }, ExtArgs["result"]["workoutRecommendation"]>
    composites: {}
  }

  type WorkoutRecommendationGetPayload<S extends boolean | null | undefined | WorkoutRecommendationDefaultArgs> = $Result.GetResult<Prisma.$WorkoutRecommendationPayload, S>

  type WorkoutRecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutRecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutRecommendationCountAggregateInputType | true
    }

  export interface WorkoutRecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutRecommendation'], meta: { name: 'WorkoutRecommendation' } }
    /**
     * Find zero or one WorkoutRecommendation that matches the filter.
     * @param {WorkoutRecommendationFindUniqueArgs} args - Arguments to find a WorkoutRecommendation
     * @example
     * // Get one WorkoutRecommendation
     * const workoutRecommendation = await prisma.workoutRecommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutRecommendationFindUniqueArgs>(args: SelectSubset<T, WorkoutRecommendationFindUniqueArgs<ExtArgs>>): Prisma__WorkoutRecommendationClient<$Result.GetResult<Prisma.$WorkoutRecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutRecommendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutRecommendationFindUniqueOrThrowArgs} args - Arguments to find a WorkoutRecommendation
     * @example
     * // Get one WorkoutRecommendation
     * const workoutRecommendation = await prisma.workoutRecommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutRecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutRecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutRecommendationClient<$Result.GetResult<Prisma.$WorkoutRecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutRecommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRecommendationFindFirstArgs} args - Arguments to find a WorkoutRecommendation
     * @example
     * // Get one WorkoutRecommendation
     * const workoutRecommendation = await prisma.workoutRecommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutRecommendationFindFirstArgs>(args?: SelectSubset<T, WorkoutRecommendationFindFirstArgs<ExtArgs>>): Prisma__WorkoutRecommendationClient<$Result.GetResult<Prisma.$WorkoutRecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutRecommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRecommendationFindFirstOrThrowArgs} args - Arguments to find a WorkoutRecommendation
     * @example
     * // Get one WorkoutRecommendation
     * const workoutRecommendation = await prisma.workoutRecommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutRecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutRecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutRecommendationClient<$Result.GetResult<Prisma.$WorkoutRecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutRecommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutRecommendations
     * const workoutRecommendations = await prisma.workoutRecommendation.findMany()
     * 
     * // Get first 10 WorkoutRecommendations
     * const workoutRecommendations = await prisma.workoutRecommendation.findMany({ take: 10 })
     * 
     * // Only select the `recommendationID`
     * const workoutRecommendationWithRecommendationIDOnly = await prisma.workoutRecommendation.findMany({ select: { recommendationID: true } })
     * 
     */
    findMany<T extends WorkoutRecommendationFindManyArgs>(args?: SelectSubset<T, WorkoutRecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutRecommendation.
     * @param {WorkoutRecommendationCreateArgs} args - Arguments to create a WorkoutRecommendation.
     * @example
     * // Create one WorkoutRecommendation
     * const WorkoutRecommendation = await prisma.workoutRecommendation.create({
     *   data: {
     *     // ... data to create a WorkoutRecommendation
     *   }
     * })
     * 
     */
    create<T extends WorkoutRecommendationCreateArgs>(args: SelectSubset<T, WorkoutRecommendationCreateArgs<ExtArgs>>): Prisma__WorkoutRecommendationClient<$Result.GetResult<Prisma.$WorkoutRecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutRecommendations.
     * @param {WorkoutRecommendationCreateManyArgs} args - Arguments to create many WorkoutRecommendations.
     * @example
     * // Create many WorkoutRecommendations
     * const workoutRecommendation = await prisma.workoutRecommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutRecommendationCreateManyArgs>(args?: SelectSubset<T, WorkoutRecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutRecommendations and returns the data saved in the database.
     * @param {WorkoutRecommendationCreateManyAndReturnArgs} args - Arguments to create many WorkoutRecommendations.
     * @example
     * // Create many WorkoutRecommendations
     * const workoutRecommendation = await prisma.workoutRecommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutRecommendations and only return the `recommendationID`
     * const workoutRecommendationWithRecommendationIDOnly = await prisma.workoutRecommendation.createManyAndReturn({
     *   select: { recommendationID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutRecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutRecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutRecommendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutRecommendation.
     * @param {WorkoutRecommendationDeleteArgs} args - Arguments to delete one WorkoutRecommendation.
     * @example
     * // Delete one WorkoutRecommendation
     * const WorkoutRecommendation = await prisma.workoutRecommendation.delete({
     *   where: {
     *     // ... filter to delete one WorkoutRecommendation
     *   }
     * })
     * 
     */
    delete<T extends WorkoutRecommendationDeleteArgs>(args: SelectSubset<T, WorkoutRecommendationDeleteArgs<ExtArgs>>): Prisma__WorkoutRecommendationClient<$Result.GetResult<Prisma.$WorkoutRecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutRecommendation.
     * @param {WorkoutRecommendationUpdateArgs} args - Arguments to update one WorkoutRecommendation.
     * @example
     * // Update one WorkoutRecommendation
     * const workoutRecommendation = await prisma.workoutRecommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutRecommendationUpdateArgs>(args: SelectSubset<T, WorkoutRecommendationUpdateArgs<ExtArgs>>): Prisma__WorkoutRecommendationClient<$Result.GetResult<Prisma.$WorkoutRecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutRecommendations.
     * @param {WorkoutRecommendationDeleteManyArgs} args - Arguments to filter WorkoutRecommendations to delete.
     * @example
     * // Delete a few WorkoutRecommendations
     * const { count } = await prisma.workoutRecommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutRecommendationDeleteManyArgs>(args?: SelectSubset<T, WorkoutRecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutRecommendations
     * const workoutRecommendation = await prisma.workoutRecommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutRecommendationUpdateManyArgs>(args: SelectSubset<T, WorkoutRecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutRecommendations and returns the data updated in the database.
     * @param {WorkoutRecommendationUpdateManyAndReturnArgs} args - Arguments to update many WorkoutRecommendations.
     * @example
     * // Update many WorkoutRecommendations
     * const workoutRecommendation = await prisma.workoutRecommendation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutRecommendations and only return the `recommendationID`
     * const workoutRecommendationWithRecommendationIDOnly = await prisma.workoutRecommendation.updateManyAndReturn({
     *   select: { recommendationID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkoutRecommendationUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutRecommendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutRecommendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutRecommendation.
     * @param {WorkoutRecommendationUpsertArgs} args - Arguments to update or create a WorkoutRecommendation.
     * @example
     * // Update or create a WorkoutRecommendation
     * const workoutRecommendation = await prisma.workoutRecommendation.upsert({
     *   create: {
     *     // ... data to create a WorkoutRecommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutRecommendation we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutRecommendationUpsertArgs>(args: SelectSubset<T, WorkoutRecommendationUpsertArgs<ExtArgs>>): Prisma__WorkoutRecommendationClient<$Result.GetResult<Prisma.$WorkoutRecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRecommendationCountArgs} args - Arguments to filter WorkoutRecommendations to count.
     * @example
     * // Count the number of WorkoutRecommendations
     * const count = await prisma.workoutRecommendation.count({
     *   where: {
     *     // ... the filter for the WorkoutRecommendations we want to count
     *   }
     * })
    **/
    count<T extends WorkoutRecommendationCountArgs>(
      args?: Subset<T, WorkoutRecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutRecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutRecommendationAggregateArgs>(args: Subset<T, WorkoutRecommendationAggregateArgs>): Prisma.PrismaPromise<GetWorkoutRecommendationAggregateType<T>>

    /**
     * Group by WorkoutRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRecommendationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutRecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutRecommendationGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutRecommendationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutRecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutRecommendation model
   */
  readonly fields: WorkoutRecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutRecommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutRecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkoutRecommendation model
   */
  interface WorkoutRecommendationFieldRefs {
    readonly recommendationID: FieldRef<"WorkoutRecommendation", 'Int'>
    readonly planName: FieldRef<"WorkoutRecommendation", 'String'>
    readonly workoutType: FieldRef<"WorkoutRecommendation", 'String[]'>
    readonly description: FieldRef<"WorkoutRecommendation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutRecommendation findUnique
   */
  export type WorkoutRecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRecommendation
     */
    select?: WorkoutRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRecommendation
     */
    omit?: WorkoutRecommendationOmit<ExtArgs> | null
    /**
     * Filter, which WorkoutRecommendation to fetch.
     */
    where: WorkoutRecommendationWhereUniqueInput
  }

  /**
   * WorkoutRecommendation findUniqueOrThrow
   */
  export type WorkoutRecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRecommendation
     */
    select?: WorkoutRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRecommendation
     */
    omit?: WorkoutRecommendationOmit<ExtArgs> | null
    /**
     * Filter, which WorkoutRecommendation to fetch.
     */
    where: WorkoutRecommendationWhereUniqueInput
  }

  /**
   * WorkoutRecommendation findFirst
   */
  export type WorkoutRecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRecommendation
     */
    select?: WorkoutRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRecommendation
     */
    omit?: WorkoutRecommendationOmit<ExtArgs> | null
    /**
     * Filter, which WorkoutRecommendation to fetch.
     */
    where?: WorkoutRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutRecommendations to fetch.
     */
    orderBy?: WorkoutRecommendationOrderByWithRelationInput | WorkoutRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutRecommendations.
     */
    cursor?: WorkoutRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutRecommendations.
     */
    distinct?: WorkoutRecommendationScalarFieldEnum | WorkoutRecommendationScalarFieldEnum[]
  }

  /**
   * WorkoutRecommendation findFirstOrThrow
   */
  export type WorkoutRecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRecommendation
     */
    select?: WorkoutRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRecommendation
     */
    omit?: WorkoutRecommendationOmit<ExtArgs> | null
    /**
     * Filter, which WorkoutRecommendation to fetch.
     */
    where?: WorkoutRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutRecommendations to fetch.
     */
    orderBy?: WorkoutRecommendationOrderByWithRelationInput | WorkoutRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutRecommendations.
     */
    cursor?: WorkoutRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutRecommendations.
     */
    distinct?: WorkoutRecommendationScalarFieldEnum | WorkoutRecommendationScalarFieldEnum[]
  }

  /**
   * WorkoutRecommendation findMany
   */
  export type WorkoutRecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRecommendation
     */
    select?: WorkoutRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRecommendation
     */
    omit?: WorkoutRecommendationOmit<ExtArgs> | null
    /**
     * Filter, which WorkoutRecommendations to fetch.
     */
    where?: WorkoutRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutRecommendations to fetch.
     */
    orderBy?: WorkoutRecommendationOrderByWithRelationInput | WorkoutRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutRecommendations.
     */
    cursor?: WorkoutRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutRecommendations.
     */
    skip?: number
    distinct?: WorkoutRecommendationScalarFieldEnum | WorkoutRecommendationScalarFieldEnum[]
  }

  /**
   * WorkoutRecommendation create
   */
  export type WorkoutRecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRecommendation
     */
    select?: WorkoutRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRecommendation
     */
    omit?: WorkoutRecommendationOmit<ExtArgs> | null
    /**
     * The data needed to create a WorkoutRecommendation.
     */
    data: XOR<WorkoutRecommendationCreateInput, WorkoutRecommendationUncheckedCreateInput>
  }

  /**
   * WorkoutRecommendation createMany
   */
  export type WorkoutRecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutRecommendations.
     */
    data: WorkoutRecommendationCreateManyInput | WorkoutRecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutRecommendation createManyAndReturn
   */
  export type WorkoutRecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRecommendation
     */
    select?: WorkoutRecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRecommendation
     */
    omit?: WorkoutRecommendationOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutRecommendations.
     */
    data: WorkoutRecommendationCreateManyInput | WorkoutRecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutRecommendation update
   */
  export type WorkoutRecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRecommendation
     */
    select?: WorkoutRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRecommendation
     */
    omit?: WorkoutRecommendationOmit<ExtArgs> | null
    /**
     * The data needed to update a WorkoutRecommendation.
     */
    data: XOR<WorkoutRecommendationUpdateInput, WorkoutRecommendationUncheckedUpdateInput>
    /**
     * Choose, which WorkoutRecommendation to update.
     */
    where: WorkoutRecommendationWhereUniqueInput
  }

  /**
   * WorkoutRecommendation updateMany
   */
  export type WorkoutRecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutRecommendations.
     */
    data: XOR<WorkoutRecommendationUpdateManyMutationInput, WorkoutRecommendationUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutRecommendations to update
     */
    where?: WorkoutRecommendationWhereInput
    /**
     * Limit how many WorkoutRecommendations to update.
     */
    limit?: number
  }

  /**
   * WorkoutRecommendation updateManyAndReturn
   */
  export type WorkoutRecommendationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRecommendation
     */
    select?: WorkoutRecommendationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRecommendation
     */
    omit?: WorkoutRecommendationOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutRecommendations.
     */
    data: XOR<WorkoutRecommendationUpdateManyMutationInput, WorkoutRecommendationUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutRecommendations to update
     */
    where?: WorkoutRecommendationWhereInput
    /**
     * Limit how many WorkoutRecommendations to update.
     */
    limit?: number
  }

  /**
   * WorkoutRecommendation upsert
   */
  export type WorkoutRecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRecommendation
     */
    select?: WorkoutRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRecommendation
     */
    omit?: WorkoutRecommendationOmit<ExtArgs> | null
    /**
     * The filter to search for the WorkoutRecommendation to update in case it exists.
     */
    where: WorkoutRecommendationWhereUniqueInput
    /**
     * In case the WorkoutRecommendation found by the `where` argument doesn't exist, create a new WorkoutRecommendation with this data.
     */
    create: XOR<WorkoutRecommendationCreateInput, WorkoutRecommendationUncheckedCreateInput>
    /**
     * In case the WorkoutRecommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutRecommendationUpdateInput, WorkoutRecommendationUncheckedUpdateInput>
  }

  /**
   * WorkoutRecommendation delete
   */
  export type WorkoutRecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRecommendation
     */
    select?: WorkoutRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRecommendation
     */
    omit?: WorkoutRecommendationOmit<ExtArgs> | null
    /**
     * Filter which WorkoutRecommendation to delete.
     */
    where: WorkoutRecommendationWhereUniqueInput
  }

  /**
   * WorkoutRecommendation deleteMany
   */
  export type WorkoutRecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutRecommendations to delete
     */
    where?: WorkoutRecommendationWhereInput
    /**
     * Limit how many WorkoutRecommendations to delete.
     */
    limit?: number
  }

  /**
   * WorkoutRecommendation without action
   */
  export type WorkoutRecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRecommendation
     */
    select?: WorkoutRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutRecommendation
     */
    omit?: WorkoutRecommendationOmit<ExtArgs> | null
  }


  /**
   * Model FitHealthTipAPI
   */

  export type AggregateFitHealthTipAPI = {
    _count: FitHealthTipAPICountAggregateOutputType | null
    _avg: FitHealthTipAPIAvgAggregateOutputType | null
    _sum: FitHealthTipAPISumAggregateOutputType | null
    _min: FitHealthTipAPIMinAggregateOutputType | null
    _max: FitHealthTipAPIMaxAggregateOutputType | null
  }

  export type FitHealthTipAPIAvgAggregateOutputType = {
    id: number | null
  }

  export type FitHealthTipAPISumAggregateOutputType = {
    id: number | null
  }

  export type FitHealthTipAPIMinAggregateOutputType = {
    id: number | null
    APIName: string | null
    connected: boolean | null
    lastChecked: Date | null
  }

  export type FitHealthTipAPIMaxAggregateOutputType = {
    id: number | null
    APIName: string | null
    connected: boolean | null
    lastChecked: Date | null
  }

  export type FitHealthTipAPICountAggregateOutputType = {
    id: number
    APIName: number
    connected: number
    lastChecked: number
    _all: number
  }


  export type FitHealthTipAPIAvgAggregateInputType = {
    id?: true
  }

  export type FitHealthTipAPISumAggregateInputType = {
    id?: true
  }

  export type FitHealthTipAPIMinAggregateInputType = {
    id?: true
    APIName?: true
    connected?: true
    lastChecked?: true
  }

  export type FitHealthTipAPIMaxAggregateInputType = {
    id?: true
    APIName?: true
    connected?: true
    lastChecked?: true
  }

  export type FitHealthTipAPICountAggregateInputType = {
    id?: true
    APIName?: true
    connected?: true
    lastChecked?: true
    _all?: true
  }

  export type FitHealthTipAPIAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FitHealthTipAPI to aggregate.
     */
    where?: FitHealthTipAPIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FitHealthTipAPIS to fetch.
     */
    orderBy?: FitHealthTipAPIOrderByWithRelationInput | FitHealthTipAPIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FitHealthTipAPIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FitHealthTipAPIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FitHealthTipAPIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FitHealthTipAPIS
    **/
    _count?: true | FitHealthTipAPICountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FitHealthTipAPIAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FitHealthTipAPISumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FitHealthTipAPIMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FitHealthTipAPIMaxAggregateInputType
  }

  export type GetFitHealthTipAPIAggregateType<T extends FitHealthTipAPIAggregateArgs> = {
        [P in keyof T & keyof AggregateFitHealthTipAPI]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFitHealthTipAPI[P]>
      : GetScalarType<T[P], AggregateFitHealthTipAPI[P]>
  }




  export type FitHealthTipAPIGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FitHealthTipAPIWhereInput
    orderBy?: FitHealthTipAPIOrderByWithAggregationInput | FitHealthTipAPIOrderByWithAggregationInput[]
    by: FitHealthTipAPIScalarFieldEnum[] | FitHealthTipAPIScalarFieldEnum
    having?: FitHealthTipAPIScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FitHealthTipAPICountAggregateInputType | true
    _avg?: FitHealthTipAPIAvgAggregateInputType
    _sum?: FitHealthTipAPISumAggregateInputType
    _min?: FitHealthTipAPIMinAggregateInputType
    _max?: FitHealthTipAPIMaxAggregateInputType
  }

  export type FitHealthTipAPIGroupByOutputType = {
    id: number
    APIName: string
    connected: boolean
    lastChecked: Date | null
    _count: FitHealthTipAPICountAggregateOutputType | null
    _avg: FitHealthTipAPIAvgAggregateOutputType | null
    _sum: FitHealthTipAPISumAggregateOutputType | null
    _min: FitHealthTipAPIMinAggregateOutputType | null
    _max: FitHealthTipAPIMaxAggregateOutputType | null
  }

  type GetFitHealthTipAPIGroupByPayload<T extends FitHealthTipAPIGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FitHealthTipAPIGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FitHealthTipAPIGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FitHealthTipAPIGroupByOutputType[P]>
            : GetScalarType<T[P], FitHealthTipAPIGroupByOutputType[P]>
        }
      >
    >


  export type FitHealthTipAPISelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    APIName?: boolean
    connected?: boolean
    lastChecked?: boolean
  }, ExtArgs["result"]["fitHealthTipAPI"]>

  export type FitHealthTipAPISelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    APIName?: boolean
    connected?: boolean
    lastChecked?: boolean
  }, ExtArgs["result"]["fitHealthTipAPI"]>

  export type FitHealthTipAPISelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    APIName?: boolean
    connected?: boolean
    lastChecked?: boolean
  }, ExtArgs["result"]["fitHealthTipAPI"]>

  export type FitHealthTipAPISelectScalar = {
    id?: boolean
    APIName?: boolean
    connected?: boolean
    lastChecked?: boolean
  }

  export type FitHealthTipAPIOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "APIName" | "connected" | "lastChecked", ExtArgs["result"]["fitHealthTipAPI"]>

  export type $FitHealthTipAPIPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FitHealthTipAPI"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      APIName: string
      connected: boolean
      lastChecked: Date | null
    }, ExtArgs["result"]["fitHealthTipAPI"]>
    composites: {}
  }

  type FitHealthTipAPIGetPayload<S extends boolean | null | undefined | FitHealthTipAPIDefaultArgs> = $Result.GetResult<Prisma.$FitHealthTipAPIPayload, S>

  type FitHealthTipAPICountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FitHealthTipAPIFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FitHealthTipAPICountAggregateInputType | true
    }

  export interface FitHealthTipAPIDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FitHealthTipAPI'], meta: { name: 'FitHealthTipAPI' } }
    /**
     * Find zero or one FitHealthTipAPI that matches the filter.
     * @param {FitHealthTipAPIFindUniqueArgs} args - Arguments to find a FitHealthTipAPI
     * @example
     * // Get one FitHealthTipAPI
     * const fitHealthTipAPI = await prisma.fitHealthTipAPI.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FitHealthTipAPIFindUniqueArgs>(args: SelectSubset<T, FitHealthTipAPIFindUniqueArgs<ExtArgs>>): Prisma__FitHealthTipAPIClient<$Result.GetResult<Prisma.$FitHealthTipAPIPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FitHealthTipAPI that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FitHealthTipAPIFindUniqueOrThrowArgs} args - Arguments to find a FitHealthTipAPI
     * @example
     * // Get one FitHealthTipAPI
     * const fitHealthTipAPI = await prisma.fitHealthTipAPI.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FitHealthTipAPIFindUniqueOrThrowArgs>(args: SelectSubset<T, FitHealthTipAPIFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FitHealthTipAPIClient<$Result.GetResult<Prisma.$FitHealthTipAPIPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FitHealthTipAPI that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitHealthTipAPIFindFirstArgs} args - Arguments to find a FitHealthTipAPI
     * @example
     * // Get one FitHealthTipAPI
     * const fitHealthTipAPI = await prisma.fitHealthTipAPI.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FitHealthTipAPIFindFirstArgs>(args?: SelectSubset<T, FitHealthTipAPIFindFirstArgs<ExtArgs>>): Prisma__FitHealthTipAPIClient<$Result.GetResult<Prisma.$FitHealthTipAPIPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FitHealthTipAPI that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitHealthTipAPIFindFirstOrThrowArgs} args - Arguments to find a FitHealthTipAPI
     * @example
     * // Get one FitHealthTipAPI
     * const fitHealthTipAPI = await prisma.fitHealthTipAPI.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FitHealthTipAPIFindFirstOrThrowArgs>(args?: SelectSubset<T, FitHealthTipAPIFindFirstOrThrowArgs<ExtArgs>>): Prisma__FitHealthTipAPIClient<$Result.GetResult<Prisma.$FitHealthTipAPIPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FitHealthTipAPIS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitHealthTipAPIFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FitHealthTipAPIS
     * const fitHealthTipAPIS = await prisma.fitHealthTipAPI.findMany()
     * 
     * // Get first 10 FitHealthTipAPIS
     * const fitHealthTipAPIS = await prisma.fitHealthTipAPI.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fitHealthTipAPIWithIdOnly = await prisma.fitHealthTipAPI.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FitHealthTipAPIFindManyArgs>(args?: SelectSubset<T, FitHealthTipAPIFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FitHealthTipAPIPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FitHealthTipAPI.
     * @param {FitHealthTipAPICreateArgs} args - Arguments to create a FitHealthTipAPI.
     * @example
     * // Create one FitHealthTipAPI
     * const FitHealthTipAPI = await prisma.fitHealthTipAPI.create({
     *   data: {
     *     // ... data to create a FitHealthTipAPI
     *   }
     * })
     * 
     */
    create<T extends FitHealthTipAPICreateArgs>(args: SelectSubset<T, FitHealthTipAPICreateArgs<ExtArgs>>): Prisma__FitHealthTipAPIClient<$Result.GetResult<Prisma.$FitHealthTipAPIPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FitHealthTipAPIS.
     * @param {FitHealthTipAPICreateManyArgs} args - Arguments to create many FitHealthTipAPIS.
     * @example
     * // Create many FitHealthTipAPIS
     * const fitHealthTipAPI = await prisma.fitHealthTipAPI.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FitHealthTipAPICreateManyArgs>(args?: SelectSubset<T, FitHealthTipAPICreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FitHealthTipAPIS and returns the data saved in the database.
     * @param {FitHealthTipAPICreateManyAndReturnArgs} args - Arguments to create many FitHealthTipAPIS.
     * @example
     * // Create many FitHealthTipAPIS
     * const fitHealthTipAPI = await prisma.fitHealthTipAPI.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FitHealthTipAPIS and only return the `id`
     * const fitHealthTipAPIWithIdOnly = await prisma.fitHealthTipAPI.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FitHealthTipAPICreateManyAndReturnArgs>(args?: SelectSubset<T, FitHealthTipAPICreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FitHealthTipAPIPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FitHealthTipAPI.
     * @param {FitHealthTipAPIDeleteArgs} args - Arguments to delete one FitHealthTipAPI.
     * @example
     * // Delete one FitHealthTipAPI
     * const FitHealthTipAPI = await prisma.fitHealthTipAPI.delete({
     *   where: {
     *     // ... filter to delete one FitHealthTipAPI
     *   }
     * })
     * 
     */
    delete<T extends FitHealthTipAPIDeleteArgs>(args: SelectSubset<T, FitHealthTipAPIDeleteArgs<ExtArgs>>): Prisma__FitHealthTipAPIClient<$Result.GetResult<Prisma.$FitHealthTipAPIPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FitHealthTipAPI.
     * @param {FitHealthTipAPIUpdateArgs} args - Arguments to update one FitHealthTipAPI.
     * @example
     * // Update one FitHealthTipAPI
     * const fitHealthTipAPI = await prisma.fitHealthTipAPI.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FitHealthTipAPIUpdateArgs>(args: SelectSubset<T, FitHealthTipAPIUpdateArgs<ExtArgs>>): Prisma__FitHealthTipAPIClient<$Result.GetResult<Prisma.$FitHealthTipAPIPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FitHealthTipAPIS.
     * @param {FitHealthTipAPIDeleteManyArgs} args - Arguments to filter FitHealthTipAPIS to delete.
     * @example
     * // Delete a few FitHealthTipAPIS
     * const { count } = await prisma.fitHealthTipAPI.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FitHealthTipAPIDeleteManyArgs>(args?: SelectSubset<T, FitHealthTipAPIDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FitHealthTipAPIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitHealthTipAPIUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FitHealthTipAPIS
     * const fitHealthTipAPI = await prisma.fitHealthTipAPI.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FitHealthTipAPIUpdateManyArgs>(args: SelectSubset<T, FitHealthTipAPIUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FitHealthTipAPIS and returns the data updated in the database.
     * @param {FitHealthTipAPIUpdateManyAndReturnArgs} args - Arguments to update many FitHealthTipAPIS.
     * @example
     * // Update many FitHealthTipAPIS
     * const fitHealthTipAPI = await prisma.fitHealthTipAPI.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FitHealthTipAPIS and only return the `id`
     * const fitHealthTipAPIWithIdOnly = await prisma.fitHealthTipAPI.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FitHealthTipAPIUpdateManyAndReturnArgs>(args: SelectSubset<T, FitHealthTipAPIUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FitHealthTipAPIPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FitHealthTipAPI.
     * @param {FitHealthTipAPIUpsertArgs} args - Arguments to update or create a FitHealthTipAPI.
     * @example
     * // Update or create a FitHealthTipAPI
     * const fitHealthTipAPI = await prisma.fitHealthTipAPI.upsert({
     *   create: {
     *     // ... data to create a FitHealthTipAPI
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FitHealthTipAPI we want to update
     *   }
     * })
     */
    upsert<T extends FitHealthTipAPIUpsertArgs>(args: SelectSubset<T, FitHealthTipAPIUpsertArgs<ExtArgs>>): Prisma__FitHealthTipAPIClient<$Result.GetResult<Prisma.$FitHealthTipAPIPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FitHealthTipAPIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitHealthTipAPICountArgs} args - Arguments to filter FitHealthTipAPIS to count.
     * @example
     * // Count the number of FitHealthTipAPIS
     * const count = await prisma.fitHealthTipAPI.count({
     *   where: {
     *     // ... the filter for the FitHealthTipAPIS we want to count
     *   }
     * })
    **/
    count<T extends FitHealthTipAPICountArgs>(
      args?: Subset<T, FitHealthTipAPICountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FitHealthTipAPICountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FitHealthTipAPI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitHealthTipAPIAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FitHealthTipAPIAggregateArgs>(args: Subset<T, FitHealthTipAPIAggregateArgs>): Prisma.PrismaPromise<GetFitHealthTipAPIAggregateType<T>>

    /**
     * Group by FitHealthTipAPI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitHealthTipAPIGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FitHealthTipAPIGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FitHealthTipAPIGroupByArgs['orderBy'] }
        : { orderBy?: FitHealthTipAPIGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FitHealthTipAPIGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFitHealthTipAPIGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FitHealthTipAPI model
   */
  readonly fields: FitHealthTipAPIFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FitHealthTipAPI.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FitHealthTipAPIClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FitHealthTipAPI model
   */
  interface FitHealthTipAPIFieldRefs {
    readonly id: FieldRef<"FitHealthTipAPI", 'Int'>
    readonly APIName: FieldRef<"FitHealthTipAPI", 'String'>
    readonly connected: FieldRef<"FitHealthTipAPI", 'Boolean'>
    readonly lastChecked: FieldRef<"FitHealthTipAPI", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FitHealthTipAPI findUnique
   */
  export type FitHealthTipAPIFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitHealthTipAPI
     */
    select?: FitHealthTipAPISelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitHealthTipAPI
     */
    omit?: FitHealthTipAPIOmit<ExtArgs> | null
    /**
     * Filter, which FitHealthTipAPI to fetch.
     */
    where: FitHealthTipAPIWhereUniqueInput
  }

  /**
   * FitHealthTipAPI findUniqueOrThrow
   */
  export type FitHealthTipAPIFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitHealthTipAPI
     */
    select?: FitHealthTipAPISelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitHealthTipAPI
     */
    omit?: FitHealthTipAPIOmit<ExtArgs> | null
    /**
     * Filter, which FitHealthTipAPI to fetch.
     */
    where: FitHealthTipAPIWhereUniqueInput
  }

  /**
   * FitHealthTipAPI findFirst
   */
  export type FitHealthTipAPIFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitHealthTipAPI
     */
    select?: FitHealthTipAPISelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitHealthTipAPI
     */
    omit?: FitHealthTipAPIOmit<ExtArgs> | null
    /**
     * Filter, which FitHealthTipAPI to fetch.
     */
    where?: FitHealthTipAPIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FitHealthTipAPIS to fetch.
     */
    orderBy?: FitHealthTipAPIOrderByWithRelationInput | FitHealthTipAPIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FitHealthTipAPIS.
     */
    cursor?: FitHealthTipAPIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FitHealthTipAPIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FitHealthTipAPIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FitHealthTipAPIS.
     */
    distinct?: FitHealthTipAPIScalarFieldEnum | FitHealthTipAPIScalarFieldEnum[]
  }

  /**
   * FitHealthTipAPI findFirstOrThrow
   */
  export type FitHealthTipAPIFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitHealthTipAPI
     */
    select?: FitHealthTipAPISelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitHealthTipAPI
     */
    omit?: FitHealthTipAPIOmit<ExtArgs> | null
    /**
     * Filter, which FitHealthTipAPI to fetch.
     */
    where?: FitHealthTipAPIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FitHealthTipAPIS to fetch.
     */
    orderBy?: FitHealthTipAPIOrderByWithRelationInput | FitHealthTipAPIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FitHealthTipAPIS.
     */
    cursor?: FitHealthTipAPIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FitHealthTipAPIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FitHealthTipAPIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FitHealthTipAPIS.
     */
    distinct?: FitHealthTipAPIScalarFieldEnum | FitHealthTipAPIScalarFieldEnum[]
  }

  /**
   * FitHealthTipAPI findMany
   */
  export type FitHealthTipAPIFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitHealthTipAPI
     */
    select?: FitHealthTipAPISelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitHealthTipAPI
     */
    omit?: FitHealthTipAPIOmit<ExtArgs> | null
    /**
     * Filter, which FitHealthTipAPIS to fetch.
     */
    where?: FitHealthTipAPIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FitHealthTipAPIS to fetch.
     */
    orderBy?: FitHealthTipAPIOrderByWithRelationInput | FitHealthTipAPIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FitHealthTipAPIS.
     */
    cursor?: FitHealthTipAPIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FitHealthTipAPIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FitHealthTipAPIS.
     */
    skip?: number
    distinct?: FitHealthTipAPIScalarFieldEnum | FitHealthTipAPIScalarFieldEnum[]
  }

  /**
   * FitHealthTipAPI create
   */
  export type FitHealthTipAPICreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitHealthTipAPI
     */
    select?: FitHealthTipAPISelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitHealthTipAPI
     */
    omit?: FitHealthTipAPIOmit<ExtArgs> | null
    /**
     * The data needed to create a FitHealthTipAPI.
     */
    data: XOR<FitHealthTipAPICreateInput, FitHealthTipAPIUncheckedCreateInput>
  }

  /**
   * FitHealthTipAPI createMany
   */
  export type FitHealthTipAPICreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FitHealthTipAPIS.
     */
    data: FitHealthTipAPICreateManyInput | FitHealthTipAPICreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FitHealthTipAPI createManyAndReturn
   */
  export type FitHealthTipAPICreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitHealthTipAPI
     */
    select?: FitHealthTipAPISelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FitHealthTipAPI
     */
    omit?: FitHealthTipAPIOmit<ExtArgs> | null
    /**
     * The data used to create many FitHealthTipAPIS.
     */
    data: FitHealthTipAPICreateManyInput | FitHealthTipAPICreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FitHealthTipAPI update
   */
  export type FitHealthTipAPIUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitHealthTipAPI
     */
    select?: FitHealthTipAPISelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitHealthTipAPI
     */
    omit?: FitHealthTipAPIOmit<ExtArgs> | null
    /**
     * The data needed to update a FitHealthTipAPI.
     */
    data: XOR<FitHealthTipAPIUpdateInput, FitHealthTipAPIUncheckedUpdateInput>
    /**
     * Choose, which FitHealthTipAPI to update.
     */
    where: FitHealthTipAPIWhereUniqueInput
  }

  /**
   * FitHealthTipAPI updateMany
   */
  export type FitHealthTipAPIUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FitHealthTipAPIS.
     */
    data: XOR<FitHealthTipAPIUpdateManyMutationInput, FitHealthTipAPIUncheckedUpdateManyInput>
    /**
     * Filter which FitHealthTipAPIS to update
     */
    where?: FitHealthTipAPIWhereInput
    /**
     * Limit how many FitHealthTipAPIS to update.
     */
    limit?: number
  }

  /**
   * FitHealthTipAPI updateManyAndReturn
   */
  export type FitHealthTipAPIUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitHealthTipAPI
     */
    select?: FitHealthTipAPISelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FitHealthTipAPI
     */
    omit?: FitHealthTipAPIOmit<ExtArgs> | null
    /**
     * The data used to update FitHealthTipAPIS.
     */
    data: XOR<FitHealthTipAPIUpdateManyMutationInput, FitHealthTipAPIUncheckedUpdateManyInput>
    /**
     * Filter which FitHealthTipAPIS to update
     */
    where?: FitHealthTipAPIWhereInput
    /**
     * Limit how many FitHealthTipAPIS to update.
     */
    limit?: number
  }

  /**
   * FitHealthTipAPI upsert
   */
  export type FitHealthTipAPIUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitHealthTipAPI
     */
    select?: FitHealthTipAPISelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitHealthTipAPI
     */
    omit?: FitHealthTipAPIOmit<ExtArgs> | null
    /**
     * The filter to search for the FitHealthTipAPI to update in case it exists.
     */
    where: FitHealthTipAPIWhereUniqueInput
    /**
     * In case the FitHealthTipAPI found by the `where` argument doesn't exist, create a new FitHealthTipAPI with this data.
     */
    create: XOR<FitHealthTipAPICreateInput, FitHealthTipAPIUncheckedCreateInput>
    /**
     * In case the FitHealthTipAPI was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FitHealthTipAPIUpdateInput, FitHealthTipAPIUncheckedUpdateInput>
  }

  /**
   * FitHealthTipAPI delete
   */
  export type FitHealthTipAPIDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitHealthTipAPI
     */
    select?: FitHealthTipAPISelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitHealthTipAPI
     */
    omit?: FitHealthTipAPIOmit<ExtArgs> | null
    /**
     * Filter which FitHealthTipAPI to delete.
     */
    where: FitHealthTipAPIWhereUniqueInput
  }

  /**
   * FitHealthTipAPI deleteMany
   */
  export type FitHealthTipAPIDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FitHealthTipAPIS to delete
     */
    where?: FitHealthTipAPIWhereInput
    /**
     * Limit how many FitHealthTipAPIS to delete.
     */
    limit?: number
  }

  /**
   * FitHealthTipAPI without action
   */
  export type FitHealthTipAPIDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitHealthTipAPI
     */
    select?: FitHealthTipAPISelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitHealthTipAPI
     */
    omit?: FitHealthTipAPIOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userID: 'userID',
    username: 'username',
    password: 'password',
    height: 'height',
    weight: 'weight',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WeightLogScalarFieldEnum: {
    logID: 'logID',
    date: 'date',
    weight: 'weight',
    userID: 'userID'
  };

  export type WeightLogScalarFieldEnum = (typeof WeightLogScalarFieldEnum)[keyof typeof WeightLogScalarFieldEnum]


  export const WorkoutLogScalarFieldEnum: {
    logID: 'logID',
    planName: 'planName',
    exerciseName: 'exerciseName',
    sets: 'sets',
    reps: 'reps',
    weight: 'weight',
    date: 'date',
    userID: 'userID'
  };

  export type WorkoutLogScalarFieldEnum = (typeof WorkoutLogScalarFieldEnum)[keyof typeof WorkoutLogScalarFieldEnum]


  export const StepRecordScalarFieldEnum: {
    recordID: 'recordID',
    stepsCount: 'stepsCount',
    distance: 'distance',
    calories: 'calories',
    date: 'date',
    userID: 'userID'
  };

  export type StepRecordScalarFieldEnum = (typeof StepRecordScalarFieldEnum)[keyof typeof StepRecordScalarFieldEnum]


  export const WorkoutRecommendationScalarFieldEnum: {
    recommendationID: 'recommendationID',
    planName: 'planName',
    workoutType: 'workoutType',
    description: 'description'
  };

  export type WorkoutRecommendationScalarFieldEnum = (typeof WorkoutRecommendationScalarFieldEnum)[keyof typeof WorkoutRecommendationScalarFieldEnum]


  export const FitHealthTipAPIScalarFieldEnum: {
    id: 'id',
    APIName: 'APIName',
    connected: 'connected',
    lastChecked: 'lastChecked'
  };

  export type FitHealthTipAPIScalarFieldEnum = (typeof FitHealthTipAPIScalarFieldEnum)[keyof typeof FitHealthTipAPIScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userID?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    height?: FloatNullableFilter<"User"> | number | null
    weight?: FloatNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    weightLogs?: WeightLogListRelationFilter
    workoutLogs?: WorkoutLogListRelationFilter
    stepRecords?: StepRecordListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userID?: SortOrder
    username?: SortOrder
    password?: SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    weightLogs?: WeightLogOrderByRelationAggregateInput
    workoutLogs?: WorkoutLogOrderByRelationAggregateInput
    stepRecords?: StepRecordOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userID?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    height?: FloatNullableFilter<"User"> | number | null
    weight?: FloatNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    weightLogs?: WeightLogListRelationFilter
    workoutLogs?: WorkoutLogListRelationFilter
    stepRecords?: StepRecordListRelationFilter
  }, "userID" | "username">

  export type UserOrderByWithAggregationInput = {
    userID?: SortOrder
    username?: SortOrder
    password?: SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userID?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    height?: FloatNullableWithAggregatesFilter<"User"> | number | null
    weight?: FloatNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WeightLogWhereInput = {
    AND?: WeightLogWhereInput | WeightLogWhereInput[]
    OR?: WeightLogWhereInput[]
    NOT?: WeightLogWhereInput | WeightLogWhereInput[]
    logID?: IntFilter<"WeightLog"> | number
    date?: DateTimeFilter<"WeightLog"> | Date | string
    weight?: FloatFilter<"WeightLog"> | number
    userID?: IntFilter<"WeightLog"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WeightLogOrderByWithRelationInput = {
    logID?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    userID?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WeightLogWhereUniqueInput = Prisma.AtLeast<{
    logID?: number
    AND?: WeightLogWhereInput | WeightLogWhereInput[]
    OR?: WeightLogWhereInput[]
    NOT?: WeightLogWhereInput | WeightLogWhereInput[]
    date?: DateTimeFilter<"WeightLog"> | Date | string
    weight?: FloatFilter<"WeightLog"> | number
    userID?: IntFilter<"WeightLog"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "logID">

  export type WeightLogOrderByWithAggregationInput = {
    logID?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    userID?: SortOrder
    _count?: WeightLogCountOrderByAggregateInput
    _avg?: WeightLogAvgOrderByAggregateInput
    _max?: WeightLogMaxOrderByAggregateInput
    _min?: WeightLogMinOrderByAggregateInput
    _sum?: WeightLogSumOrderByAggregateInput
  }

  export type WeightLogScalarWhereWithAggregatesInput = {
    AND?: WeightLogScalarWhereWithAggregatesInput | WeightLogScalarWhereWithAggregatesInput[]
    OR?: WeightLogScalarWhereWithAggregatesInput[]
    NOT?: WeightLogScalarWhereWithAggregatesInput | WeightLogScalarWhereWithAggregatesInput[]
    logID?: IntWithAggregatesFilter<"WeightLog"> | number
    date?: DateTimeWithAggregatesFilter<"WeightLog"> | Date | string
    weight?: FloatWithAggregatesFilter<"WeightLog"> | number
    userID?: IntWithAggregatesFilter<"WeightLog"> | number
  }

  export type WorkoutLogWhereInput = {
    AND?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    OR?: WorkoutLogWhereInput[]
    NOT?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    logID?: IntFilter<"WorkoutLog"> | number
    planName?: StringNullableFilter<"WorkoutLog"> | string | null
    exerciseName?: StringFilter<"WorkoutLog"> | string
    sets?: IntNullableFilter<"WorkoutLog"> | number | null
    reps?: IntNullableFilter<"WorkoutLog"> | number | null
    weight?: FloatNullableFilter<"WorkoutLog"> | number | null
    date?: DateTimeFilter<"WorkoutLog"> | Date | string
    userID?: IntFilter<"WorkoutLog"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WorkoutLogOrderByWithRelationInput = {
    logID?: SortOrder
    planName?: SortOrderInput | SortOrder
    exerciseName?: SortOrder
    sets?: SortOrderInput | SortOrder
    reps?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    date?: SortOrder
    userID?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WorkoutLogWhereUniqueInput = Prisma.AtLeast<{
    logID?: number
    AND?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    OR?: WorkoutLogWhereInput[]
    NOT?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    planName?: StringNullableFilter<"WorkoutLog"> | string | null
    exerciseName?: StringFilter<"WorkoutLog"> | string
    sets?: IntNullableFilter<"WorkoutLog"> | number | null
    reps?: IntNullableFilter<"WorkoutLog"> | number | null
    weight?: FloatNullableFilter<"WorkoutLog"> | number | null
    date?: DateTimeFilter<"WorkoutLog"> | Date | string
    userID?: IntFilter<"WorkoutLog"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "logID">

  export type WorkoutLogOrderByWithAggregationInput = {
    logID?: SortOrder
    planName?: SortOrderInput | SortOrder
    exerciseName?: SortOrder
    sets?: SortOrderInput | SortOrder
    reps?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    date?: SortOrder
    userID?: SortOrder
    _count?: WorkoutLogCountOrderByAggregateInput
    _avg?: WorkoutLogAvgOrderByAggregateInput
    _max?: WorkoutLogMaxOrderByAggregateInput
    _min?: WorkoutLogMinOrderByAggregateInput
    _sum?: WorkoutLogSumOrderByAggregateInput
  }

  export type WorkoutLogScalarWhereWithAggregatesInput = {
    AND?: WorkoutLogScalarWhereWithAggregatesInput | WorkoutLogScalarWhereWithAggregatesInput[]
    OR?: WorkoutLogScalarWhereWithAggregatesInput[]
    NOT?: WorkoutLogScalarWhereWithAggregatesInput | WorkoutLogScalarWhereWithAggregatesInput[]
    logID?: IntWithAggregatesFilter<"WorkoutLog"> | number
    planName?: StringNullableWithAggregatesFilter<"WorkoutLog"> | string | null
    exerciseName?: StringWithAggregatesFilter<"WorkoutLog"> | string
    sets?: IntNullableWithAggregatesFilter<"WorkoutLog"> | number | null
    reps?: IntNullableWithAggregatesFilter<"WorkoutLog"> | number | null
    weight?: FloatNullableWithAggregatesFilter<"WorkoutLog"> | number | null
    date?: DateTimeWithAggregatesFilter<"WorkoutLog"> | Date | string
    userID?: IntWithAggregatesFilter<"WorkoutLog"> | number
  }

  export type StepRecordWhereInput = {
    AND?: StepRecordWhereInput | StepRecordWhereInput[]
    OR?: StepRecordWhereInput[]
    NOT?: StepRecordWhereInput | StepRecordWhereInput[]
    recordID?: IntFilter<"StepRecord"> | number
    stepsCount?: IntFilter<"StepRecord"> | number
    distance?: FloatNullableFilter<"StepRecord"> | number | null
    calories?: FloatNullableFilter<"StepRecord"> | number | null
    date?: DateTimeFilter<"StepRecord"> | Date | string
    userID?: IntFilter<"StepRecord"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StepRecordOrderByWithRelationInput = {
    recordID?: SortOrder
    stepsCount?: SortOrder
    distance?: SortOrderInput | SortOrder
    calories?: SortOrderInput | SortOrder
    date?: SortOrder
    userID?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StepRecordWhereUniqueInput = Prisma.AtLeast<{
    recordID?: number
    AND?: StepRecordWhereInput | StepRecordWhereInput[]
    OR?: StepRecordWhereInput[]
    NOT?: StepRecordWhereInput | StepRecordWhereInput[]
    stepsCount?: IntFilter<"StepRecord"> | number
    distance?: FloatNullableFilter<"StepRecord"> | number | null
    calories?: FloatNullableFilter<"StepRecord"> | number | null
    date?: DateTimeFilter<"StepRecord"> | Date | string
    userID?: IntFilter<"StepRecord"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "recordID">

  export type StepRecordOrderByWithAggregationInput = {
    recordID?: SortOrder
    stepsCount?: SortOrder
    distance?: SortOrderInput | SortOrder
    calories?: SortOrderInput | SortOrder
    date?: SortOrder
    userID?: SortOrder
    _count?: StepRecordCountOrderByAggregateInput
    _avg?: StepRecordAvgOrderByAggregateInput
    _max?: StepRecordMaxOrderByAggregateInput
    _min?: StepRecordMinOrderByAggregateInput
    _sum?: StepRecordSumOrderByAggregateInput
  }

  export type StepRecordScalarWhereWithAggregatesInput = {
    AND?: StepRecordScalarWhereWithAggregatesInput | StepRecordScalarWhereWithAggregatesInput[]
    OR?: StepRecordScalarWhereWithAggregatesInput[]
    NOT?: StepRecordScalarWhereWithAggregatesInput | StepRecordScalarWhereWithAggregatesInput[]
    recordID?: IntWithAggregatesFilter<"StepRecord"> | number
    stepsCount?: IntWithAggregatesFilter<"StepRecord"> | number
    distance?: FloatNullableWithAggregatesFilter<"StepRecord"> | number | null
    calories?: FloatNullableWithAggregatesFilter<"StepRecord"> | number | null
    date?: DateTimeWithAggregatesFilter<"StepRecord"> | Date | string
    userID?: IntWithAggregatesFilter<"StepRecord"> | number
  }

  export type WorkoutRecommendationWhereInput = {
    AND?: WorkoutRecommendationWhereInput | WorkoutRecommendationWhereInput[]
    OR?: WorkoutRecommendationWhereInput[]
    NOT?: WorkoutRecommendationWhereInput | WorkoutRecommendationWhereInput[]
    recommendationID?: IntFilter<"WorkoutRecommendation"> | number
    planName?: StringFilter<"WorkoutRecommendation"> | string
    workoutType?: StringNullableListFilter<"WorkoutRecommendation">
    description?: StringFilter<"WorkoutRecommendation"> | string
  }

  export type WorkoutRecommendationOrderByWithRelationInput = {
    recommendationID?: SortOrder
    planName?: SortOrder
    workoutType?: SortOrder
    description?: SortOrder
  }

  export type WorkoutRecommendationWhereUniqueInput = Prisma.AtLeast<{
    recommendationID?: number
    AND?: WorkoutRecommendationWhereInput | WorkoutRecommendationWhereInput[]
    OR?: WorkoutRecommendationWhereInput[]
    NOT?: WorkoutRecommendationWhereInput | WorkoutRecommendationWhereInput[]
    planName?: StringFilter<"WorkoutRecommendation"> | string
    workoutType?: StringNullableListFilter<"WorkoutRecommendation">
    description?: StringFilter<"WorkoutRecommendation"> | string
  }, "recommendationID">

  export type WorkoutRecommendationOrderByWithAggregationInput = {
    recommendationID?: SortOrder
    planName?: SortOrder
    workoutType?: SortOrder
    description?: SortOrder
    _count?: WorkoutRecommendationCountOrderByAggregateInput
    _avg?: WorkoutRecommendationAvgOrderByAggregateInput
    _max?: WorkoutRecommendationMaxOrderByAggregateInput
    _min?: WorkoutRecommendationMinOrderByAggregateInput
    _sum?: WorkoutRecommendationSumOrderByAggregateInput
  }

  export type WorkoutRecommendationScalarWhereWithAggregatesInput = {
    AND?: WorkoutRecommendationScalarWhereWithAggregatesInput | WorkoutRecommendationScalarWhereWithAggregatesInput[]
    OR?: WorkoutRecommendationScalarWhereWithAggregatesInput[]
    NOT?: WorkoutRecommendationScalarWhereWithAggregatesInput | WorkoutRecommendationScalarWhereWithAggregatesInput[]
    recommendationID?: IntWithAggregatesFilter<"WorkoutRecommendation"> | number
    planName?: StringWithAggregatesFilter<"WorkoutRecommendation"> | string
    workoutType?: StringNullableListFilter<"WorkoutRecommendation">
    description?: StringWithAggregatesFilter<"WorkoutRecommendation"> | string
  }

  export type FitHealthTipAPIWhereInput = {
    AND?: FitHealthTipAPIWhereInput | FitHealthTipAPIWhereInput[]
    OR?: FitHealthTipAPIWhereInput[]
    NOT?: FitHealthTipAPIWhereInput | FitHealthTipAPIWhereInput[]
    id?: IntFilter<"FitHealthTipAPI"> | number
    APIName?: StringFilter<"FitHealthTipAPI"> | string
    connected?: BoolFilter<"FitHealthTipAPI"> | boolean
    lastChecked?: DateTimeNullableFilter<"FitHealthTipAPI"> | Date | string | null
  }

  export type FitHealthTipAPIOrderByWithRelationInput = {
    id?: SortOrder
    APIName?: SortOrder
    connected?: SortOrder
    lastChecked?: SortOrderInput | SortOrder
  }

  export type FitHealthTipAPIWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FitHealthTipAPIWhereInput | FitHealthTipAPIWhereInput[]
    OR?: FitHealthTipAPIWhereInput[]
    NOT?: FitHealthTipAPIWhereInput | FitHealthTipAPIWhereInput[]
    APIName?: StringFilter<"FitHealthTipAPI"> | string
    connected?: BoolFilter<"FitHealthTipAPI"> | boolean
    lastChecked?: DateTimeNullableFilter<"FitHealthTipAPI"> | Date | string | null
  }, "id">

  export type FitHealthTipAPIOrderByWithAggregationInput = {
    id?: SortOrder
    APIName?: SortOrder
    connected?: SortOrder
    lastChecked?: SortOrderInput | SortOrder
    _count?: FitHealthTipAPICountOrderByAggregateInput
    _avg?: FitHealthTipAPIAvgOrderByAggregateInput
    _max?: FitHealthTipAPIMaxOrderByAggregateInput
    _min?: FitHealthTipAPIMinOrderByAggregateInput
    _sum?: FitHealthTipAPISumOrderByAggregateInput
  }

  export type FitHealthTipAPIScalarWhereWithAggregatesInput = {
    AND?: FitHealthTipAPIScalarWhereWithAggregatesInput | FitHealthTipAPIScalarWhereWithAggregatesInput[]
    OR?: FitHealthTipAPIScalarWhereWithAggregatesInput[]
    NOT?: FitHealthTipAPIScalarWhereWithAggregatesInput | FitHealthTipAPIScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FitHealthTipAPI"> | number
    APIName?: StringWithAggregatesFilter<"FitHealthTipAPI"> | string
    connected?: BoolWithAggregatesFilter<"FitHealthTipAPI"> | boolean
    lastChecked?: DateTimeNullableWithAggregatesFilter<"FitHealthTipAPI"> | Date | string | null
  }

  export type UserCreateInput = {
    username: string
    password: string
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    weightLogs?: WeightLogCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    stepRecords?: StepRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userID?: number
    username: string
    password: string
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    weightLogs?: WeightLogUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    stepRecords?: StepRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weightLogs?: WeightLogUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    stepRecords?: StepRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userID?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weightLogs?: WeightLogUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    stepRecords?: StepRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userID?: number
    username: string
    password: string
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userID?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeightLogCreateInput = {
    date: Date | string
    weight: number
    user: UserCreateNestedOneWithoutWeightLogsInput
  }

  export type WeightLogUncheckedCreateInput = {
    logID?: number
    date: Date | string
    weight: number
    userID: number
  }

  export type WeightLogUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutWeightLogsNestedInput
  }

  export type WeightLogUncheckedUpdateInput = {
    logID?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    userID?: IntFieldUpdateOperationsInput | number
  }

  export type WeightLogCreateManyInput = {
    logID?: number
    date: Date | string
    weight: number
    userID: number
  }

  export type WeightLogUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type WeightLogUncheckedUpdateManyInput = {
    logID?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    userID?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutLogCreateInput = {
    planName?: string | null
    exerciseName: string
    sets?: number | null
    reps?: number | null
    weight?: number | null
    date: Date | string
    user: UserCreateNestedOneWithoutWorkoutLogsInput
  }

  export type WorkoutLogUncheckedCreateInput = {
    logID?: number
    planName?: string | null
    exerciseName: string
    sets?: number | null
    reps?: number | null
    weight?: number | null
    date: Date | string
    userID: number
  }

  export type WorkoutLogUpdateInput = {
    planName?: NullableStringFieldUpdateOperationsInput | string | null
    exerciseName?: StringFieldUpdateOperationsInput | string
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkoutLogsNestedInput
  }

  export type WorkoutLogUncheckedUpdateInput = {
    logID?: IntFieldUpdateOperationsInput | number
    planName?: NullableStringFieldUpdateOperationsInput | string | null
    exerciseName?: StringFieldUpdateOperationsInput | string
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userID?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutLogCreateManyInput = {
    logID?: number
    planName?: string | null
    exerciseName: string
    sets?: number | null
    reps?: number | null
    weight?: number | null
    date: Date | string
    userID: number
  }

  export type WorkoutLogUpdateManyMutationInput = {
    planName?: NullableStringFieldUpdateOperationsInput | string | null
    exerciseName?: StringFieldUpdateOperationsInput | string
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutLogUncheckedUpdateManyInput = {
    logID?: IntFieldUpdateOperationsInput | number
    planName?: NullableStringFieldUpdateOperationsInput | string | null
    exerciseName?: StringFieldUpdateOperationsInput | string
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userID?: IntFieldUpdateOperationsInput | number
  }

  export type StepRecordCreateInput = {
    stepsCount: number
    distance?: number | null
    calories?: number | null
    date: Date | string
    user: UserCreateNestedOneWithoutStepRecordsInput
  }

  export type StepRecordUncheckedCreateInput = {
    recordID?: number
    stepsCount: number
    distance?: number | null
    calories?: number | null
    date: Date | string
    userID: number
  }

  export type StepRecordUpdateInput = {
    stepsCount?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStepRecordsNestedInput
  }

  export type StepRecordUncheckedUpdateInput = {
    recordID?: IntFieldUpdateOperationsInput | number
    stepsCount?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userID?: IntFieldUpdateOperationsInput | number
  }

  export type StepRecordCreateManyInput = {
    recordID?: number
    stepsCount: number
    distance?: number | null
    calories?: number | null
    date: Date | string
    userID: number
  }

  export type StepRecordUpdateManyMutationInput = {
    stepsCount?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepRecordUncheckedUpdateManyInput = {
    recordID?: IntFieldUpdateOperationsInput | number
    stepsCount?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userID?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutRecommendationCreateInput = {
    planName: string
    workoutType?: WorkoutRecommendationCreateworkoutTypeInput | string[]
    description: string
  }

  export type WorkoutRecommendationUncheckedCreateInput = {
    recommendationID?: number
    planName: string
    workoutType?: WorkoutRecommendationCreateworkoutTypeInput | string[]
    description: string
  }

  export type WorkoutRecommendationUpdateInput = {
    planName?: StringFieldUpdateOperationsInput | string
    workoutType?: WorkoutRecommendationUpdateworkoutTypeInput | string[]
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutRecommendationUncheckedUpdateInput = {
    recommendationID?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    workoutType?: WorkoutRecommendationUpdateworkoutTypeInput | string[]
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutRecommendationCreateManyInput = {
    recommendationID?: number
    planName: string
    workoutType?: WorkoutRecommendationCreateworkoutTypeInput | string[]
    description: string
  }

  export type WorkoutRecommendationUpdateManyMutationInput = {
    planName?: StringFieldUpdateOperationsInput | string
    workoutType?: WorkoutRecommendationUpdateworkoutTypeInput | string[]
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutRecommendationUncheckedUpdateManyInput = {
    recommendationID?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    workoutType?: WorkoutRecommendationUpdateworkoutTypeInput | string[]
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FitHealthTipAPICreateInput = {
    APIName: string
    connected?: boolean
    lastChecked?: Date | string | null
  }

  export type FitHealthTipAPIUncheckedCreateInput = {
    id?: number
    APIName: string
    connected?: boolean
    lastChecked?: Date | string | null
  }

  export type FitHealthTipAPIUpdateInput = {
    APIName?: StringFieldUpdateOperationsInput | string
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FitHealthTipAPIUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    APIName?: StringFieldUpdateOperationsInput | string
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FitHealthTipAPICreateManyInput = {
    id?: number
    APIName: string
    connected?: boolean
    lastChecked?: Date | string | null
  }

  export type FitHealthTipAPIUpdateManyMutationInput = {
    APIName?: StringFieldUpdateOperationsInput | string
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FitHealthTipAPIUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    APIName?: StringFieldUpdateOperationsInput | string
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastChecked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WeightLogListRelationFilter = {
    every?: WeightLogWhereInput
    some?: WeightLogWhereInput
    none?: WeightLogWhereInput
  }

  export type WorkoutLogListRelationFilter = {
    every?: WorkoutLogWhereInput
    some?: WorkoutLogWhereInput
    none?: WorkoutLogWhereInput
  }

  export type StepRecordListRelationFilter = {
    every?: StepRecordWhereInput
    some?: StepRecordWhereInput
    none?: StepRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WeightLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StepRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userID?: SortOrder
    username?: SortOrder
    password?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userID?: SortOrder
    height?: SortOrder
    weight?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userID?: SortOrder
    username?: SortOrder
    password?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userID?: SortOrder
    username?: SortOrder
    password?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userID?: SortOrder
    height?: SortOrder
    weight?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WeightLogCountOrderByAggregateInput = {
    logID?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    userID?: SortOrder
  }

  export type WeightLogAvgOrderByAggregateInput = {
    logID?: SortOrder
    weight?: SortOrder
    userID?: SortOrder
  }

  export type WeightLogMaxOrderByAggregateInput = {
    logID?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    userID?: SortOrder
  }

  export type WeightLogMinOrderByAggregateInput = {
    logID?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    userID?: SortOrder
  }

  export type WeightLogSumOrderByAggregateInput = {
    logID?: SortOrder
    weight?: SortOrder
    userID?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WorkoutLogCountOrderByAggregateInput = {
    logID?: SortOrder
    planName?: SortOrder
    exerciseName?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    date?: SortOrder
    userID?: SortOrder
  }

  export type WorkoutLogAvgOrderByAggregateInput = {
    logID?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    userID?: SortOrder
  }

  export type WorkoutLogMaxOrderByAggregateInput = {
    logID?: SortOrder
    planName?: SortOrder
    exerciseName?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    date?: SortOrder
    userID?: SortOrder
  }

  export type WorkoutLogMinOrderByAggregateInput = {
    logID?: SortOrder
    planName?: SortOrder
    exerciseName?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    date?: SortOrder
    userID?: SortOrder
  }

  export type WorkoutLogSumOrderByAggregateInput = {
    logID?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    userID?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StepRecordCountOrderByAggregateInput = {
    recordID?: SortOrder
    stepsCount?: SortOrder
    distance?: SortOrder
    calories?: SortOrder
    date?: SortOrder
    userID?: SortOrder
  }

  export type StepRecordAvgOrderByAggregateInput = {
    recordID?: SortOrder
    stepsCount?: SortOrder
    distance?: SortOrder
    calories?: SortOrder
    userID?: SortOrder
  }

  export type StepRecordMaxOrderByAggregateInput = {
    recordID?: SortOrder
    stepsCount?: SortOrder
    distance?: SortOrder
    calories?: SortOrder
    date?: SortOrder
    userID?: SortOrder
  }

  export type StepRecordMinOrderByAggregateInput = {
    recordID?: SortOrder
    stepsCount?: SortOrder
    distance?: SortOrder
    calories?: SortOrder
    date?: SortOrder
    userID?: SortOrder
  }

  export type StepRecordSumOrderByAggregateInput = {
    recordID?: SortOrder
    stepsCount?: SortOrder
    distance?: SortOrder
    calories?: SortOrder
    userID?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type WorkoutRecommendationCountOrderByAggregateInput = {
    recommendationID?: SortOrder
    planName?: SortOrder
    workoutType?: SortOrder
    description?: SortOrder
  }

  export type WorkoutRecommendationAvgOrderByAggregateInput = {
    recommendationID?: SortOrder
  }

  export type WorkoutRecommendationMaxOrderByAggregateInput = {
    recommendationID?: SortOrder
    planName?: SortOrder
    description?: SortOrder
  }

  export type WorkoutRecommendationMinOrderByAggregateInput = {
    recommendationID?: SortOrder
    planName?: SortOrder
    description?: SortOrder
  }

  export type WorkoutRecommendationSumOrderByAggregateInput = {
    recommendationID?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FitHealthTipAPICountOrderByAggregateInput = {
    id?: SortOrder
    APIName?: SortOrder
    connected?: SortOrder
    lastChecked?: SortOrder
  }

  export type FitHealthTipAPIAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FitHealthTipAPIMaxOrderByAggregateInput = {
    id?: SortOrder
    APIName?: SortOrder
    connected?: SortOrder
    lastChecked?: SortOrder
  }

  export type FitHealthTipAPIMinOrderByAggregateInput = {
    id?: SortOrder
    APIName?: SortOrder
    connected?: SortOrder
    lastChecked?: SortOrder
  }

  export type FitHealthTipAPISumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type WeightLogCreateNestedManyWithoutUserInput = {
    create?: XOR<WeightLogCreateWithoutUserInput, WeightLogUncheckedCreateWithoutUserInput> | WeightLogCreateWithoutUserInput[] | WeightLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeightLogCreateOrConnectWithoutUserInput | WeightLogCreateOrConnectWithoutUserInput[]
    createMany?: WeightLogCreateManyUserInputEnvelope
    connect?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
  }

  export type WorkoutLogCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type StepRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<StepRecordCreateWithoutUserInput, StepRecordUncheckedCreateWithoutUserInput> | StepRecordCreateWithoutUserInput[] | StepRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepRecordCreateOrConnectWithoutUserInput | StepRecordCreateOrConnectWithoutUserInput[]
    createMany?: StepRecordCreateManyUserInputEnvelope
    connect?: StepRecordWhereUniqueInput | StepRecordWhereUniqueInput[]
  }

  export type WeightLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WeightLogCreateWithoutUserInput, WeightLogUncheckedCreateWithoutUserInput> | WeightLogCreateWithoutUserInput[] | WeightLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeightLogCreateOrConnectWithoutUserInput | WeightLogCreateOrConnectWithoutUserInput[]
    createMany?: WeightLogCreateManyUserInputEnvelope
    connect?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
  }

  export type WorkoutLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type StepRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StepRecordCreateWithoutUserInput, StepRecordUncheckedCreateWithoutUserInput> | StepRecordCreateWithoutUserInput[] | StepRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepRecordCreateOrConnectWithoutUserInput | StepRecordCreateOrConnectWithoutUserInput[]
    createMany?: StepRecordCreateManyUserInputEnvelope
    connect?: StepRecordWhereUniqueInput | StepRecordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WeightLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeightLogCreateWithoutUserInput, WeightLogUncheckedCreateWithoutUserInput> | WeightLogCreateWithoutUserInput[] | WeightLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeightLogCreateOrConnectWithoutUserInput | WeightLogCreateOrConnectWithoutUserInput[]
    upsert?: WeightLogUpsertWithWhereUniqueWithoutUserInput | WeightLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeightLogCreateManyUserInputEnvelope
    set?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
    disconnect?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
    delete?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
    connect?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
    update?: WeightLogUpdateWithWhereUniqueWithoutUserInput | WeightLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeightLogUpdateManyWithWhereWithoutUserInput | WeightLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeightLogScalarWhereInput | WeightLogScalarWhereInput[]
  }

  export type WorkoutLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutUserInput | WorkoutLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutUserInput | WorkoutLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutUserInput | WorkoutLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type StepRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<StepRecordCreateWithoutUserInput, StepRecordUncheckedCreateWithoutUserInput> | StepRecordCreateWithoutUserInput[] | StepRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepRecordCreateOrConnectWithoutUserInput | StepRecordCreateOrConnectWithoutUserInput[]
    upsert?: StepRecordUpsertWithWhereUniqueWithoutUserInput | StepRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StepRecordCreateManyUserInputEnvelope
    set?: StepRecordWhereUniqueInput | StepRecordWhereUniqueInput[]
    disconnect?: StepRecordWhereUniqueInput | StepRecordWhereUniqueInput[]
    delete?: StepRecordWhereUniqueInput | StepRecordWhereUniqueInput[]
    connect?: StepRecordWhereUniqueInput | StepRecordWhereUniqueInput[]
    update?: StepRecordUpdateWithWhereUniqueWithoutUserInput | StepRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StepRecordUpdateManyWithWhereWithoutUserInput | StepRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StepRecordScalarWhereInput | StepRecordScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WeightLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeightLogCreateWithoutUserInput, WeightLogUncheckedCreateWithoutUserInput> | WeightLogCreateWithoutUserInput[] | WeightLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeightLogCreateOrConnectWithoutUserInput | WeightLogCreateOrConnectWithoutUserInput[]
    upsert?: WeightLogUpsertWithWhereUniqueWithoutUserInput | WeightLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeightLogCreateManyUserInputEnvelope
    set?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
    disconnect?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
    delete?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
    connect?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
    update?: WeightLogUpdateWithWhereUniqueWithoutUserInput | WeightLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeightLogUpdateManyWithWhereWithoutUserInput | WeightLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeightLogScalarWhereInput | WeightLogScalarWhereInput[]
  }

  export type WorkoutLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutUserInput | WorkoutLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutUserInput | WorkoutLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutUserInput | WorkoutLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type StepRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StepRecordCreateWithoutUserInput, StepRecordUncheckedCreateWithoutUserInput> | StepRecordCreateWithoutUserInput[] | StepRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepRecordCreateOrConnectWithoutUserInput | StepRecordCreateOrConnectWithoutUserInput[]
    upsert?: StepRecordUpsertWithWhereUniqueWithoutUserInput | StepRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StepRecordCreateManyUserInputEnvelope
    set?: StepRecordWhereUniqueInput | StepRecordWhereUniqueInput[]
    disconnect?: StepRecordWhereUniqueInput | StepRecordWhereUniqueInput[]
    delete?: StepRecordWhereUniqueInput | StepRecordWhereUniqueInput[]
    connect?: StepRecordWhereUniqueInput | StepRecordWhereUniqueInput[]
    update?: StepRecordUpdateWithWhereUniqueWithoutUserInput | StepRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StepRecordUpdateManyWithWhereWithoutUserInput | StepRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StepRecordScalarWhereInput | StepRecordScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWeightLogsInput = {
    create?: XOR<UserCreateWithoutWeightLogsInput, UserUncheckedCreateWithoutWeightLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeightLogsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWeightLogsNestedInput = {
    create?: XOR<UserCreateWithoutWeightLogsInput, UserUncheckedCreateWithoutWeightLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeightLogsInput
    upsert?: UserUpsertWithoutWeightLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWeightLogsInput, UserUpdateWithoutWeightLogsInput>, UserUncheckedUpdateWithoutWeightLogsInput>
  }

  export type UserCreateNestedOneWithoutWorkoutLogsInput = {
    create?: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWorkoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutLogsInput
    upsert?: UserUpsertWithoutWorkoutLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkoutLogsInput, UserUpdateWithoutWorkoutLogsInput>, UserUncheckedUpdateWithoutWorkoutLogsInput>
  }

  export type UserCreateNestedOneWithoutStepRecordsInput = {
    create?: XOR<UserCreateWithoutStepRecordsInput, UserUncheckedCreateWithoutStepRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStepRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStepRecordsNestedInput = {
    create?: XOR<UserCreateWithoutStepRecordsInput, UserUncheckedCreateWithoutStepRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStepRecordsInput
    upsert?: UserUpsertWithoutStepRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStepRecordsInput, UserUpdateWithoutStepRecordsInput>, UserUncheckedUpdateWithoutStepRecordsInput>
  }

  export type WorkoutRecommendationCreateworkoutTypeInput = {
    set: string[]
  }

  export type WorkoutRecommendationUpdateworkoutTypeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type WeightLogCreateWithoutUserInput = {
    date: Date | string
    weight: number
  }

  export type WeightLogUncheckedCreateWithoutUserInput = {
    logID?: number
    date: Date | string
    weight: number
  }

  export type WeightLogCreateOrConnectWithoutUserInput = {
    where: WeightLogWhereUniqueInput
    create: XOR<WeightLogCreateWithoutUserInput, WeightLogUncheckedCreateWithoutUserInput>
  }

  export type WeightLogCreateManyUserInputEnvelope = {
    data: WeightLogCreateManyUserInput | WeightLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutLogCreateWithoutUserInput = {
    planName?: string | null
    exerciseName: string
    sets?: number | null
    reps?: number | null
    weight?: number | null
    date: Date | string
  }

  export type WorkoutLogUncheckedCreateWithoutUserInput = {
    logID?: number
    planName?: string | null
    exerciseName: string
    sets?: number | null
    reps?: number | null
    weight?: number | null
    date: Date | string
  }

  export type WorkoutLogCreateOrConnectWithoutUserInput = {
    where: WorkoutLogWhereUniqueInput
    create: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput>
  }

  export type WorkoutLogCreateManyUserInputEnvelope = {
    data: WorkoutLogCreateManyUserInput | WorkoutLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StepRecordCreateWithoutUserInput = {
    stepsCount: number
    distance?: number | null
    calories?: number | null
    date: Date | string
  }

  export type StepRecordUncheckedCreateWithoutUserInput = {
    recordID?: number
    stepsCount: number
    distance?: number | null
    calories?: number | null
    date: Date | string
  }

  export type StepRecordCreateOrConnectWithoutUserInput = {
    where: StepRecordWhereUniqueInput
    create: XOR<StepRecordCreateWithoutUserInput, StepRecordUncheckedCreateWithoutUserInput>
  }

  export type StepRecordCreateManyUserInputEnvelope = {
    data: StepRecordCreateManyUserInput | StepRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WeightLogUpsertWithWhereUniqueWithoutUserInput = {
    where: WeightLogWhereUniqueInput
    update: XOR<WeightLogUpdateWithoutUserInput, WeightLogUncheckedUpdateWithoutUserInput>
    create: XOR<WeightLogCreateWithoutUserInput, WeightLogUncheckedCreateWithoutUserInput>
  }

  export type WeightLogUpdateWithWhereUniqueWithoutUserInput = {
    where: WeightLogWhereUniqueInput
    data: XOR<WeightLogUpdateWithoutUserInput, WeightLogUncheckedUpdateWithoutUserInput>
  }

  export type WeightLogUpdateManyWithWhereWithoutUserInput = {
    where: WeightLogScalarWhereInput
    data: XOR<WeightLogUpdateManyMutationInput, WeightLogUncheckedUpdateManyWithoutUserInput>
  }

  export type WeightLogScalarWhereInput = {
    AND?: WeightLogScalarWhereInput | WeightLogScalarWhereInput[]
    OR?: WeightLogScalarWhereInput[]
    NOT?: WeightLogScalarWhereInput | WeightLogScalarWhereInput[]
    logID?: IntFilter<"WeightLog"> | number
    date?: DateTimeFilter<"WeightLog"> | Date | string
    weight?: FloatFilter<"WeightLog"> | number
    userID?: IntFilter<"WeightLog"> | number
  }

  export type WorkoutLogUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutLogWhereUniqueInput
    update: XOR<WorkoutLogUpdateWithoutUserInput, WorkoutLogUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput>
  }

  export type WorkoutLogUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutLogWhereUniqueInput
    data: XOR<WorkoutLogUpdateWithoutUserInput, WorkoutLogUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutLogUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutLogScalarWhereInput
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutLogScalarWhereInput = {
    AND?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
    OR?: WorkoutLogScalarWhereInput[]
    NOT?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
    logID?: IntFilter<"WorkoutLog"> | number
    planName?: StringNullableFilter<"WorkoutLog"> | string | null
    exerciseName?: StringFilter<"WorkoutLog"> | string
    sets?: IntNullableFilter<"WorkoutLog"> | number | null
    reps?: IntNullableFilter<"WorkoutLog"> | number | null
    weight?: FloatNullableFilter<"WorkoutLog"> | number | null
    date?: DateTimeFilter<"WorkoutLog"> | Date | string
    userID?: IntFilter<"WorkoutLog"> | number
  }

  export type StepRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: StepRecordWhereUniqueInput
    update: XOR<StepRecordUpdateWithoutUserInput, StepRecordUncheckedUpdateWithoutUserInput>
    create: XOR<StepRecordCreateWithoutUserInput, StepRecordUncheckedCreateWithoutUserInput>
  }

  export type StepRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: StepRecordWhereUniqueInput
    data: XOR<StepRecordUpdateWithoutUserInput, StepRecordUncheckedUpdateWithoutUserInput>
  }

  export type StepRecordUpdateManyWithWhereWithoutUserInput = {
    where: StepRecordScalarWhereInput
    data: XOR<StepRecordUpdateManyMutationInput, StepRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type StepRecordScalarWhereInput = {
    AND?: StepRecordScalarWhereInput | StepRecordScalarWhereInput[]
    OR?: StepRecordScalarWhereInput[]
    NOT?: StepRecordScalarWhereInput | StepRecordScalarWhereInput[]
    recordID?: IntFilter<"StepRecord"> | number
    stepsCount?: IntFilter<"StepRecord"> | number
    distance?: FloatNullableFilter<"StepRecord"> | number | null
    calories?: FloatNullableFilter<"StepRecord"> | number | null
    date?: DateTimeFilter<"StepRecord"> | Date | string
    userID?: IntFilter<"StepRecord"> | number
  }

  export type UserCreateWithoutWeightLogsInput = {
    username: string
    password: string
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    stepRecords?: StepRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWeightLogsInput = {
    userID?: number
    username: string
    password: string
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    stepRecords?: StepRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWeightLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWeightLogsInput, UserUncheckedCreateWithoutWeightLogsInput>
  }

  export type UserUpsertWithoutWeightLogsInput = {
    update: XOR<UserUpdateWithoutWeightLogsInput, UserUncheckedUpdateWithoutWeightLogsInput>
    create: XOR<UserCreateWithoutWeightLogsInput, UserUncheckedCreateWithoutWeightLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWeightLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWeightLogsInput, UserUncheckedUpdateWithoutWeightLogsInput>
  }

  export type UserUpdateWithoutWeightLogsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    stepRecords?: StepRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWeightLogsInput = {
    userID?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    stepRecords?: StepRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWorkoutLogsInput = {
    username: string
    password: string
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    weightLogs?: WeightLogCreateNestedManyWithoutUserInput
    stepRecords?: StepRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkoutLogsInput = {
    userID?: number
    username: string
    password: string
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    weightLogs?: WeightLogUncheckedCreateNestedManyWithoutUserInput
    stepRecords?: StepRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
  }

  export type UserUpsertWithoutWorkoutLogsInput = {
    update: XOR<UserUpdateWithoutWorkoutLogsInput, UserUncheckedUpdateWithoutWorkoutLogsInput>
    create: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkoutLogsInput, UserUncheckedUpdateWithoutWorkoutLogsInput>
  }

  export type UserUpdateWithoutWorkoutLogsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weightLogs?: WeightLogUpdateManyWithoutUserNestedInput
    stepRecords?: StepRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkoutLogsInput = {
    userID?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weightLogs?: WeightLogUncheckedUpdateManyWithoutUserNestedInput
    stepRecords?: StepRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStepRecordsInput = {
    username: string
    password: string
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    weightLogs?: WeightLogCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStepRecordsInput = {
    userID?: number
    username: string
    password: string
    height?: number | null
    weight?: number | null
    createdAt?: Date | string
    weightLogs?: WeightLogUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStepRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStepRecordsInput, UserUncheckedCreateWithoutStepRecordsInput>
  }

  export type UserUpsertWithoutStepRecordsInput = {
    update: XOR<UserUpdateWithoutStepRecordsInput, UserUncheckedUpdateWithoutStepRecordsInput>
    create: XOR<UserCreateWithoutStepRecordsInput, UserUncheckedCreateWithoutStepRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStepRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStepRecordsInput, UserUncheckedUpdateWithoutStepRecordsInput>
  }

  export type UserUpdateWithoutStepRecordsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weightLogs?: WeightLogUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStepRecordsInput = {
    userID?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weightLogs?: WeightLogUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WeightLogCreateManyUserInput = {
    logID?: number
    date: Date | string
    weight: number
  }

  export type WorkoutLogCreateManyUserInput = {
    logID?: number
    planName?: string | null
    exerciseName: string
    sets?: number | null
    reps?: number | null
    weight?: number | null
    date: Date | string
  }

  export type StepRecordCreateManyUserInput = {
    recordID?: number
    stepsCount: number
    distance?: number | null
    calories?: number | null
    date: Date | string
  }

  export type WeightLogUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type WeightLogUncheckedUpdateWithoutUserInput = {
    logID?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type WeightLogUncheckedUpdateManyWithoutUserInput = {
    logID?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type WorkoutLogUpdateWithoutUserInput = {
    planName?: NullableStringFieldUpdateOperationsInput | string | null
    exerciseName?: StringFieldUpdateOperationsInput | string
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutLogUncheckedUpdateWithoutUserInput = {
    logID?: IntFieldUpdateOperationsInput | number
    planName?: NullableStringFieldUpdateOperationsInput | string | null
    exerciseName?: StringFieldUpdateOperationsInput | string
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutLogUncheckedUpdateManyWithoutUserInput = {
    logID?: IntFieldUpdateOperationsInput | number
    planName?: NullableStringFieldUpdateOperationsInput | string | null
    exerciseName?: StringFieldUpdateOperationsInput | string
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepRecordUpdateWithoutUserInput = {
    stepsCount?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepRecordUncheckedUpdateWithoutUserInput = {
    recordID?: IntFieldUpdateOperationsInput | number
    stepsCount?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepRecordUncheckedUpdateManyWithoutUserInput = {
    recordID?: IntFieldUpdateOperationsInput | number
    stepsCount?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}