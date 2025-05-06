
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
 * Model Challenge
 * 
 */
export type Challenge = $Result.DefaultSelection<Prisma.$ChallengePayload>
/**
 * Model Serie
 * 
 */
export type Serie = $Result.DefaultSelection<Prisma.$SeriePayload>
/**
 * Model Theme
 * 
 */
export type Theme = $Result.DefaultSelection<Prisma.$ThemePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  GAME_MAKER: 'GAME_MAKER',
  PLAYER: 'PLAYER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.challenge`: Exposes CRUD operations for the **Challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.ChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serie`: Exposes CRUD operations for the **Serie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Series
    * const series = await prisma.serie.findMany()
    * ```
    */
  get serie(): Prisma.SerieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.theme`: Exposes CRUD operations for the **Theme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Themes
    * const themes = await prisma.theme.findMany()
    * ```
    */
  get theme(): Prisma.ThemeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Challenge: 'Challenge',
    Serie: 'Serie',
    Theme: 'Theme'
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
      modelProps: "user" | "challenge" | "serie" | "theme"
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
      Challenge: {
        payload: Prisma.$ChallengePayload<ExtArgs>
        fields: Prisma.ChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findFirst: {
            args: Prisma.ChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findMany: {
            args: Prisma.ChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          create: {
            args: Prisma.ChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          createMany: {
            args: Prisma.ChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          update: {
            args: Prisma.ChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          deleteMany: {
            args: Prisma.ChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          aggregate: {
            args: Prisma.ChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge>
          }
          groupBy: {
            args: Prisma.ChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCountAggregateOutputType> | number
          }
        }
      }
      Serie: {
        payload: Prisma.$SeriePayload<ExtArgs>
        fields: Prisma.SerieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SerieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SerieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          findFirst: {
            args: Prisma.SerieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SerieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          findMany: {
            args: Prisma.SerieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>[]
          }
          create: {
            args: Prisma.SerieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          createMany: {
            args: Prisma.SerieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SerieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          update: {
            args: Prisma.SerieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          deleteMany: {
            args: Prisma.SerieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SerieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SerieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriePayload>
          }
          aggregate: {
            args: Prisma.SerieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSerie>
          }
          groupBy: {
            args: Prisma.SerieGroupByArgs<ExtArgs>
            result: $Utils.Optional<SerieGroupByOutputType>[]
          }
          count: {
            args: Prisma.SerieCountArgs<ExtArgs>
            result: $Utils.Optional<SerieCountAggregateOutputType> | number
          }
        }
      }
      Theme: {
        payload: Prisma.$ThemePayload<ExtArgs>
        fields: Prisma.ThemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThemeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThemeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findFirst: {
            args: Prisma.ThemeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThemeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findMany: {
            args: Prisma.ThemeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          create: {
            args: Prisma.ThemeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          createMany: {
            args: Prisma.ThemeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ThemeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          update: {
            args: Prisma.ThemeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          deleteMany: {
            args: Prisma.ThemeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThemeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ThemeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          aggregate: {
            args: Prisma.ThemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTheme>
          }
          groupBy: {
            args: Prisma.ThemeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThemeCountArgs<ExtArgs>
            result: $Utils.Optional<ThemeCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    challenge?: ChallengeOmit
    serie?: SerieOmit
    theme?: ThemeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    Challenge: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Challenge?: boolean | UserCountOutputTypeCountChallengeArgs
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
  export type UserCountOutputTypeCountChallengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
  }


  /**
   * Count Type SerieCountOutputType
   */

  export type SerieCountOutputType = {
    Challenge: number
  }

  export type SerieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Challenge?: boolean | SerieCountOutputTypeCountChallengeArgs
  }

  // Custom InputTypes
  /**
   * SerieCountOutputType without action
   */
  export type SerieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SerieCountOutputType
     */
    select?: SerieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SerieCountOutputType without action
   */
  export type SerieCountOutputTypeCountChallengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
  }


  /**
   * Count Type ThemeCountOutputType
   */

  export type ThemeCountOutputType = {
    Serie: number
  }

  export type ThemeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Serie?: boolean | ThemeCountOutputTypeCountSerieArgs
  }

  // Custom InputTypes
  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemeCountOutputType
     */
    select?: ThemeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeCountSerieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SerieWhereInput
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstname: string | null
    lastname: string | null
    role: $Enums.Role | null
    isEmailVerified: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstname: string | null
    lastname: string | null
    role: $Enums.Role | null
    isEmailVerified: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstname: number
    lastname: number
    role: number
    isEmailVerified: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    role?: true
    isEmailVerified?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    role?: true
    isEmailVerified?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    role?: true
    isEmailVerified?: true
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
    id: number
    email: string
    password: string
    firstname: string
    lastname: string
    role: $Enums.Role
    isEmailVerified: boolean
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
    id?: boolean
    email?: boolean
    password?: boolean
    firstname?: boolean
    lastname?: boolean
    role?: boolean
    isEmailVerified?: boolean
    Challenge?: boolean | User$ChallengeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstname?: boolean
    lastname?: boolean
    role?: boolean
    isEmailVerified?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstname" | "lastname" | "role" | "isEmailVerified", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Challenge?: boolean | User$ChallengeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Challenge: Prisma.$ChallengePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      firstname: string
      lastname: string
      role: $Enums.Role
      isEmailVerified: boolean
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
    Challenge<T extends User$ChallengeArgs<ExtArgs> = {}>(args?: Subset<T, User$ChallengeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
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
   * User.Challenge
   */
  export type User$ChallengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    cursor?: ChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
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
   * Model Challenge
   */

  export type AggregateChallenge = {
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  export type ChallengeAvgAggregateOutputType = {
    id: number | null
    xp: number | null
    id_serie: number | null
    id_creator: number | null
  }

  export type ChallengeSumAggregateOutputType = {
    id: number | null
    xp: number | null
    id_serie: number | null
    id_creator: number | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    xp: number | null
    id_serie: number | null
    id_creator: number | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    xp: number | null
    id_serie: number | null
    id_creator: number | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    title: number
    description: number
    xp: number
    id_serie: number
    id_creator: number
    _all: number
  }


  export type ChallengeAvgAggregateInputType = {
    id?: true
    xp?: true
    id_serie?: true
    id_creator?: true
  }

  export type ChallengeSumAggregateInputType = {
    id?: true
    xp?: true
    id_serie?: true
    id_creator?: true
  }

  export type ChallengeMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    xp?: true
    id_serie?: true
    id_creator?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    xp?: true
    id_serie?: true
    id_creator?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    xp?: true
    id_serie?: true
    id_creator?: true
    _all?: true
  }

  export type ChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenge to aggregate.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Challenges
    **/
    _count?: true | ChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeMaxAggregateInputType
  }

  export type GetChallengeAggregateType<T extends ChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge[P]>
      : GetScalarType<T[P], AggregateChallenge[P]>
  }




  export type ChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithAggregationInput | ChallengeOrderByWithAggregationInput[]
    by: ChallengeScalarFieldEnum[] | ChallengeScalarFieldEnum
    having?: ChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCountAggregateInputType | true
    _avg?: ChallengeAvgAggregateInputType
    _sum?: ChallengeSumAggregateInputType
    _min?: ChallengeMinAggregateInputType
    _max?: ChallengeMaxAggregateInputType
  }

  export type ChallengeGroupByOutputType = {
    id: number
    title: string
    description: string
    xp: number
    id_serie: number
    id_creator: number
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  type GetChallengeGroupByPayload<T extends ChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    xp?: boolean
    id_serie?: boolean
    id_creator?: boolean
    Serie?: boolean | SerieDefaultArgs<ExtArgs>
    Creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>



  export type ChallengeSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    xp?: boolean
    id_serie?: boolean
    id_creator?: boolean
  }

  export type ChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "xp" | "id_serie" | "id_creator", ExtArgs["result"]["challenge"]>
  export type ChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Serie?: boolean | SerieDefaultArgs<ExtArgs>
    Creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Challenge"
    objects: {
      Serie: Prisma.$SeriePayload<ExtArgs>
      Creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      xp: number
      id_serie: number
      id_creator: number
    }, ExtArgs["result"]["challenge"]>
    composites: {}
  }

  type ChallengeGetPayload<S extends boolean | null | undefined | ChallengeDefaultArgs> = $Result.GetResult<Prisma.$ChallengePayload, S>

  type ChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeCountAggregateInputType | true
    }

  export interface ChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Challenge'], meta: { name: 'Challenge' } }
    /**
     * Find zero or one Challenge that matches the filter.
     * @param {ChallengeFindUniqueArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeFindUniqueArgs>(args: SelectSubset<T, ChallengeFindUniqueArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeFindUniqueOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeFindFirstArgs>(args?: SelectSubset<T, ChallengeFindFirstArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenge.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeWithIdOnly = await prisma.challenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeFindManyArgs>(args?: SelectSubset<T, ChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenge.
     * @param {ChallengeCreateArgs} args - Arguments to create a Challenge.
     * @example
     * // Create one Challenge
     * const Challenge = await prisma.challenge.create({
     *   data: {
     *     // ... data to create a Challenge
     *   }
     * })
     * 
     */
    create<T extends ChallengeCreateArgs>(args: SelectSubset<T, ChallengeCreateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenges.
     * @param {ChallengeCreateManyArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeCreateManyArgs>(args?: SelectSubset<T, ChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Challenge.
     * @param {ChallengeDeleteArgs} args - Arguments to delete one Challenge.
     * @example
     * // Delete one Challenge
     * const Challenge = await prisma.challenge.delete({
     *   where: {
     *     // ... filter to delete one Challenge
     *   }
     * })
     * 
     */
    delete<T extends ChallengeDeleteArgs>(args: SelectSubset<T, ChallengeDeleteArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenge.
     * @param {ChallengeUpdateArgs} args - Arguments to update one Challenge.
     * @example
     * // Update one Challenge
     * const challenge = await prisma.challenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeUpdateArgs>(args: SelectSubset<T, ChallengeUpdateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenges.
     * @param {ChallengeDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeDeleteManyArgs>(args?: SelectSubset<T, ChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeUpdateManyArgs>(args: SelectSubset<T, ChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Challenge.
     * @param {ChallengeUpsertArgs} args - Arguments to update or create a Challenge.
     * @example
     * // Update or create a Challenge
     * const challenge = await prisma.challenge.upsert({
     *   create: {
     *     // ... data to create a Challenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeUpsertArgs>(args: SelectSubset<T, ChallengeUpsertArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenge.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends ChallengeCountArgs>(
      args?: Subset<T, ChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): Prisma.PrismaPromise<GetChallengeAggregateType<T>>

    /**
     * Group by Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeGroupByArgs} args - Group by arguments.
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
      T extends ChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Challenge model
   */
  readonly fields: ChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Serie<T extends SerieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SerieDefaultArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Challenge model
   */
  interface ChallengeFieldRefs {
    readonly id: FieldRef<"Challenge", 'Int'>
    readonly title: FieldRef<"Challenge", 'String'>
    readonly description: FieldRef<"Challenge", 'String'>
    readonly xp: FieldRef<"Challenge", 'Int'>
    readonly id_serie: FieldRef<"Challenge", 'Int'>
    readonly id_creator: FieldRef<"Challenge", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Challenge findUnique
   */
  export type ChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findUniqueOrThrow
   */
  export type ChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findFirst
   */
  export type ChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findFirstOrThrow
   */
  export type ChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findMany
   */
  export type ChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenges to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge create
   */
  export type ChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a Challenge.
     */
    data: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
  }

  /**
   * Challenge createMany
   */
  export type ChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Challenge update
   */
  export type ChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a Challenge.
     */
    data: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
    /**
     * Choose, which Challenge to update.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge updateMany
   */
  export type ChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
  }

  /**
   * Challenge upsert
   */
  export type ChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the Challenge to update in case it exists.
     */
    where: ChallengeWhereUniqueInput
    /**
     * In case the Challenge found by the `where` argument doesn't exist, create a new Challenge with this data.
     */
    create: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
    /**
     * In case the Challenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
  }

  /**
   * Challenge delete
   */
  export type ChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter which Challenge to delete.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge deleteMany
   */
  export type ChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenges to delete
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to delete.
     */
    limit?: number
  }

  /**
   * Challenge without action
   */
  export type ChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
  }


  /**
   * Model Serie
   */

  export type AggregateSerie = {
    _count: SerieCountAggregateOutputType | null
    _avg: SerieAvgAggregateOutputType | null
    _sum: SerieSumAggregateOutputType | null
    _min: SerieMinAggregateOutputType | null
    _max: SerieMaxAggregateOutputType | null
  }

  export type SerieAvgAggregateOutputType = {
    id: number | null
    id_theme: number | null
  }

  export type SerieSumAggregateOutputType = {
    id: number | null
    id_theme: number | null
  }

  export type SerieMinAggregateOutputType = {
    id: number | null
    title: string | null
    obtained_title: string | null
    id_theme: number | null
  }

  export type SerieMaxAggregateOutputType = {
    id: number | null
    title: string | null
    obtained_title: string | null
    id_theme: number | null
  }

  export type SerieCountAggregateOutputType = {
    id: number
    title: number
    obtained_title: number
    id_theme: number
    _all: number
  }


  export type SerieAvgAggregateInputType = {
    id?: true
    id_theme?: true
  }

  export type SerieSumAggregateInputType = {
    id?: true
    id_theme?: true
  }

  export type SerieMinAggregateInputType = {
    id?: true
    title?: true
    obtained_title?: true
    id_theme?: true
  }

  export type SerieMaxAggregateInputType = {
    id?: true
    title?: true
    obtained_title?: true
    id_theme?: true
  }

  export type SerieCountAggregateInputType = {
    id?: true
    title?: true
    obtained_title?: true
    id_theme?: true
    _all?: true
  }

  export type SerieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Serie to aggregate.
     */
    where?: SerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SerieOrderByWithRelationInput | SerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Series
    **/
    _count?: true | SerieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SerieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SerieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SerieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SerieMaxAggregateInputType
  }

  export type GetSerieAggregateType<T extends SerieAggregateArgs> = {
        [P in keyof T & keyof AggregateSerie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSerie[P]>
      : GetScalarType<T[P], AggregateSerie[P]>
  }




  export type SerieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SerieWhereInput
    orderBy?: SerieOrderByWithAggregationInput | SerieOrderByWithAggregationInput[]
    by: SerieScalarFieldEnum[] | SerieScalarFieldEnum
    having?: SerieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SerieCountAggregateInputType | true
    _avg?: SerieAvgAggregateInputType
    _sum?: SerieSumAggregateInputType
    _min?: SerieMinAggregateInputType
    _max?: SerieMaxAggregateInputType
  }

  export type SerieGroupByOutputType = {
    id: number
    title: string
    obtained_title: string
    id_theme: number
    _count: SerieCountAggregateOutputType | null
    _avg: SerieAvgAggregateOutputType | null
    _sum: SerieSumAggregateOutputType | null
    _min: SerieMinAggregateOutputType | null
    _max: SerieMaxAggregateOutputType | null
  }

  type GetSerieGroupByPayload<T extends SerieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SerieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SerieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SerieGroupByOutputType[P]>
            : GetScalarType<T[P], SerieGroupByOutputType[P]>
        }
      >
    >


  export type SerieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    obtained_title?: boolean
    id_theme?: boolean
    ThemeRel?: boolean | ThemeDefaultArgs<ExtArgs>
    Challenge?: boolean | Serie$ChallengeArgs<ExtArgs>
    _count?: boolean | SerieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serie"]>



  export type SerieSelectScalar = {
    id?: boolean
    title?: boolean
    obtained_title?: boolean
    id_theme?: boolean
  }

  export type SerieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "obtained_title" | "id_theme", ExtArgs["result"]["serie"]>
  export type SerieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ThemeRel?: boolean | ThemeDefaultArgs<ExtArgs>
    Challenge?: boolean | Serie$ChallengeArgs<ExtArgs>
    _count?: boolean | SerieCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SeriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Serie"
    objects: {
      ThemeRel: Prisma.$ThemePayload<ExtArgs>
      Challenge: Prisma.$ChallengePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      obtained_title: string
      id_theme: number
    }, ExtArgs["result"]["serie"]>
    composites: {}
  }

  type SerieGetPayload<S extends boolean | null | undefined | SerieDefaultArgs> = $Result.GetResult<Prisma.$SeriePayload, S>

  type SerieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SerieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SerieCountAggregateInputType | true
    }

  export interface SerieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Serie'], meta: { name: 'Serie' } }
    /**
     * Find zero or one Serie that matches the filter.
     * @param {SerieFindUniqueArgs} args - Arguments to find a Serie
     * @example
     * // Get one Serie
     * const serie = await prisma.serie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SerieFindUniqueArgs>(args: SelectSubset<T, SerieFindUniqueArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Serie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SerieFindUniqueOrThrowArgs} args - Arguments to find a Serie
     * @example
     * // Get one Serie
     * const serie = await prisma.serie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SerieFindUniqueOrThrowArgs>(args: SelectSubset<T, SerieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Serie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieFindFirstArgs} args - Arguments to find a Serie
     * @example
     * // Get one Serie
     * const serie = await prisma.serie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SerieFindFirstArgs>(args?: SelectSubset<T, SerieFindFirstArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Serie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieFindFirstOrThrowArgs} args - Arguments to find a Serie
     * @example
     * // Get one Serie
     * const serie = await prisma.serie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SerieFindFirstOrThrowArgs>(args?: SelectSubset<T, SerieFindFirstOrThrowArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Series
     * const series = await prisma.serie.findMany()
     * 
     * // Get first 10 Series
     * const series = await prisma.serie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serieWithIdOnly = await prisma.serie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SerieFindManyArgs>(args?: SelectSubset<T, SerieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Serie.
     * @param {SerieCreateArgs} args - Arguments to create a Serie.
     * @example
     * // Create one Serie
     * const Serie = await prisma.serie.create({
     *   data: {
     *     // ... data to create a Serie
     *   }
     * })
     * 
     */
    create<T extends SerieCreateArgs>(args: SelectSubset<T, SerieCreateArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Series.
     * @param {SerieCreateManyArgs} args - Arguments to create many Series.
     * @example
     * // Create many Series
     * const serie = await prisma.serie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SerieCreateManyArgs>(args?: SelectSubset<T, SerieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Serie.
     * @param {SerieDeleteArgs} args - Arguments to delete one Serie.
     * @example
     * // Delete one Serie
     * const Serie = await prisma.serie.delete({
     *   where: {
     *     // ... filter to delete one Serie
     *   }
     * })
     * 
     */
    delete<T extends SerieDeleteArgs>(args: SelectSubset<T, SerieDeleteArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Serie.
     * @param {SerieUpdateArgs} args - Arguments to update one Serie.
     * @example
     * // Update one Serie
     * const serie = await prisma.serie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SerieUpdateArgs>(args: SelectSubset<T, SerieUpdateArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Series.
     * @param {SerieDeleteManyArgs} args - Arguments to filter Series to delete.
     * @example
     * // Delete a few Series
     * const { count } = await prisma.serie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SerieDeleteManyArgs>(args?: SelectSubset<T, SerieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Series
     * const serie = await prisma.serie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SerieUpdateManyArgs>(args: SelectSubset<T, SerieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Serie.
     * @param {SerieUpsertArgs} args - Arguments to update or create a Serie.
     * @example
     * // Update or create a Serie
     * const serie = await prisma.serie.upsert({
     *   create: {
     *     // ... data to create a Serie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Serie we want to update
     *   }
     * })
     */
    upsert<T extends SerieUpsertArgs>(args: SelectSubset<T, SerieUpsertArgs<ExtArgs>>): Prisma__SerieClient<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieCountArgs} args - Arguments to filter Series to count.
     * @example
     * // Count the number of Series
     * const count = await prisma.serie.count({
     *   where: {
     *     // ... the filter for the Series we want to count
     *   }
     * })
    **/
    count<T extends SerieCountArgs>(
      args?: Subset<T, SerieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SerieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Serie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SerieAggregateArgs>(args: Subset<T, SerieAggregateArgs>): Prisma.PrismaPromise<GetSerieAggregateType<T>>

    /**
     * Group by Serie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SerieGroupByArgs} args - Group by arguments.
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
      T extends SerieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SerieGroupByArgs['orderBy'] }
        : { orderBy?: SerieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SerieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSerieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Serie model
   */
  readonly fields: SerieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Serie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SerieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ThemeRel<T extends ThemeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ThemeDefaultArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Challenge<T extends Serie$ChallengeArgs<ExtArgs> = {}>(args?: Subset<T, Serie$ChallengeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Serie model
   */
  interface SerieFieldRefs {
    readonly id: FieldRef<"Serie", 'Int'>
    readonly title: FieldRef<"Serie", 'String'>
    readonly obtained_title: FieldRef<"Serie", 'String'>
    readonly id_theme: FieldRef<"Serie", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Serie findUnique
   */
  export type SerieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * Filter, which Serie to fetch.
     */
    where: SerieWhereUniqueInput
  }

  /**
   * Serie findUniqueOrThrow
   */
  export type SerieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * Filter, which Serie to fetch.
     */
    where: SerieWhereUniqueInput
  }

  /**
   * Serie findFirst
   */
  export type SerieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * Filter, which Serie to fetch.
     */
    where?: SerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SerieOrderByWithRelationInput | SerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SerieScalarFieldEnum | SerieScalarFieldEnum[]
  }

  /**
   * Serie findFirstOrThrow
   */
  export type SerieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * Filter, which Serie to fetch.
     */
    where?: SerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SerieOrderByWithRelationInput | SerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SerieScalarFieldEnum | SerieScalarFieldEnum[]
  }

  /**
   * Serie findMany
   */
  export type SerieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SerieOrderByWithRelationInput | SerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Series.
     */
    cursor?: SerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    distinct?: SerieScalarFieldEnum | SerieScalarFieldEnum[]
  }

  /**
   * Serie create
   */
  export type SerieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * The data needed to create a Serie.
     */
    data: XOR<SerieCreateInput, SerieUncheckedCreateInput>
  }

  /**
   * Serie createMany
   */
  export type SerieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Series.
     */
    data: SerieCreateManyInput | SerieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Serie update
   */
  export type SerieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * The data needed to update a Serie.
     */
    data: XOR<SerieUpdateInput, SerieUncheckedUpdateInput>
    /**
     * Choose, which Serie to update.
     */
    where: SerieWhereUniqueInput
  }

  /**
   * Serie updateMany
   */
  export type SerieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Series.
     */
    data: XOR<SerieUpdateManyMutationInput, SerieUncheckedUpdateManyInput>
    /**
     * Filter which Series to update
     */
    where?: SerieWhereInput
    /**
     * Limit how many Series to update.
     */
    limit?: number
  }

  /**
   * Serie upsert
   */
  export type SerieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * The filter to search for the Serie to update in case it exists.
     */
    where: SerieWhereUniqueInput
    /**
     * In case the Serie found by the `where` argument doesn't exist, create a new Serie with this data.
     */
    create: XOR<SerieCreateInput, SerieUncheckedCreateInput>
    /**
     * In case the Serie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SerieUpdateInput, SerieUncheckedUpdateInput>
  }

  /**
   * Serie delete
   */
  export type SerieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    /**
     * Filter which Serie to delete.
     */
    where: SerieWhereUniqueInput
  }

  /**
   * Serie deleteMany
   */
  export type SerieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Series to delete
     */
    where?: SerieWhereInput
    /**
     * Limit how many Series to delete.
     */
    limit?: number
  }

  /**
   * Serie.Challenge
   */
  export type Serie$ChallengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    cursor?: ChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Serie without action
   */
  export type SerieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
  }


  /**
   * Model Theme
   */

  export type AggregateTheme = {
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  export type ThemeAvgAggregateOutputType = {
    id: number | null
  }

  export type ThemeSumAggregateOutputType = {
    id: number | null
  }

  export type ThemeMinAggregateOutputType = {
    id: number | null
    label: string | null
  }

  export type ThemeMaxAggregateOutputType = {
    id: number | null
    label: string | null
  }

  export type ThemeCountAggregateOutputType = {
    id: number
    label: number
    _all: number
  }


  export type ThemeAvgAggregateInputType = {
    id?: true
  }

  export type ThemeSumAggregateInputType = {
    id?: true
  }

  export type ThemeMinAggregateInputType = {
    id?: true
    label?: true
  }

  export type ThemeMaxAggregateInputType = {
    id?: true
    label?: true
  }

  export type ThemeCountAggregateInputType = {
    id?: true
    label?: true
    _all?: true
  }

  export type ThemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Theme to aggregate.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Themes
    **/
    _count?: true | ThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThemeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThemeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThemeMaxAggregateInputType
  }

  export type GetThemeAggregateType<T extends ThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheme[P]>
      : GetScalarType<T[P], AggregateTheme[P]>
  }




  export type ThemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThemeWhereInput
    orderBy?: ThemeOrderByWithAggregationInput | ThemeOrderByWithAggregationInput[]
    by: ThemeScalarFieldEnum[] | ThemeScalarFieldEnum
    having?: ThemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThemeCountAggregateInputType | true
    _avg?: ThemeAvgAggregateInputType
    _sum?: ThemeSumAggregateInputType
    _min?: ThemeMinAggregateInputType
    _max?: ThemeMaxAggregateInputType
  }

  export type ThemeGroupByOutputType = {
    id: number
    label: string
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  type GetThemeGroupByPayload<T extends ThemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThemeGroupByOutputType[P]>
            : GetScalarType<T[P], ThemeGroupByOutputType[P]>
        }
      >
    >


  export type ThemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    Serie?: boolean | Theme$SerieArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theme"]>



  export type ThemeSelectScalar = {
    id?: boolean
    label?: boolean
  }

  export type ThemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label", ExtArgs["result"]["theme"]>
  export type ThemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Serie?: boolean | Theme$SerieArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ThemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Theme"
    objects: {
      Serie: Prisma.$SeriePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
    }, ExtArgs["result"]["theme"]>
    composites: {}
  }

  type ThemeGetPayload<S extends boolean | null | undefined | ThemeDefaultArgs> = $Result.GetResult<Prisma.$ThemePayload, S>

  type ThemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThemeCountAggregateInputType | true
    }

  export interface ThemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Theme'], meta: { name: 'Theme' } }
    /**
     * Find zero or one Theme that matches the filter.
     * @param {ThemeFindUniqueArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThemeFindUniqueArgs>(args: SelectSubset<T, ThemeFindUniqueArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Theme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThemeFindUniqueOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThemeFindUniqueOrThrowArgs>(args: SelectSubset<T, ThemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThemeFindFirstArgs>(args?: SelectSubset<T, ThemeFindFirstArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThemeFindFirstOrThrowArgs>(args?: SelectSubset<T, ThemeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Themes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Themes
     * const themes = await prisma.theme.findMany()
     * 
     * // Get first 10 Themes
     * const themes = await prisma.theme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const themeWithIdOnly = await prisma.theme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThemeFindManyArgs>(args?: SelectSubset<T, ThemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Theme.
     * @param {ThemeCreateArgs} args - Arguments to create a Theme.
     * @example
     * // Create one Theme
     * const Theme = await prisma.theme.create({
     *   data: {
     *     // ... data to create a Theme
     *   }
     * })
     * 
     */
    create<T extends ThemeCreateArgs>(args: SelectSubset<T, ThemeCreateArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Themes.
     * @param {ThemeCreateManyArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThemeCreateManyArgs>(args?: SelectSubset<T, ThemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Theme.
     * @param {ThemeDeleteArgs} args - Arguments to delete one Theme.
     * @example
     * // Delete one Theme
     * const Theme = await prisma.theme.delete({
     *   where: {
     *     // ... filter to delete one Theme
     *   }
     * })
     * 
     */
    delete<T extends ThemeDeleteArgs>(args: SelectSubset<T, ThemeDeleteArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Theme.
     * @param {ThemeUpdateArgs} args - Arguments to update one Theme.
     * @example
     * // Update one Theme
     * const theme = await prisma.theme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThemeUpdateArgs>(args: SelectSubset<T, ThemeUpdateArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Themes.
     * @param {ThemeDeleteManyArgs} args - Arguments to filter Themes to delete.
     * @example
     * // Delete a few Themes
     * const { count } = await prisma.theme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThemeDeleteManyArgs>(args?: SelectSubset<T, ThemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThemeUpdateManyArgs>(args: SelectSubset<T, ThemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Theme.
     * @param {ThemeUpsertArgs} args - Arguments to update or create a Theme.
     * @example
     * // Update or create a Theme
     * const theme = await prisma.theme.upsert({
     *   create: {
     *     // ... data to create a Theme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theme we want to update
     *   }
     * })
     */
    upsert<T extends ThemeUpsertArgs>(args: SelectSubset<T, ThemeUpsertArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeCountArgs} args - Arguments to filter Themes to count.
     * @example
     * // Count the number of Themes
     * const count = await prisma.theme.count({
     *   where: {
     *     // ... the filter for the Themes we want to count
     *   }
     * })
    **/
    count<T extends ThemeCountArgs>(
      args?: Subset<T, ThemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThemeAggregateArgs>(args: Subset<T, ThemeAggregateArgs>): Prisma.PrismaPromise<GetThemeAggregateType<T>>

    /**
     * Group by Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeGroupByArgs} args - Group by arguments.
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
      T extends ThemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThemeGroupByArgs['orderBy'] }
        : { orderBy?: ThemeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ThemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Theme model
   */
  readonly fields: ThemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Theme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Serie<T extends Theme$SerieArgs<ExtArgs> = {}>(args?: Subset<T, Theme$SerieArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Theme model
   */
  interface ThemeFieldRefs {
    readonly id: FieldRef<"Theme", 'Int'>
    readonly label: FieldRef<"Theme", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Theme findUnique
   */
  export type ThemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findUniqueOrThrow
   */
  export type ThemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findFirst
   */
  export type ThemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findFirstOrThrow
   */
  export type ThemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findMany
   */
  export type ThemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Themes to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme create
   */
  export type ThemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to create a Theme.
     */
    data: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
  }

  /**
   * Theme createMany
   */
  export type ThemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Themes.
     */
    data: ThemeCreateManyInput | ThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Theme update
   */
  export type ThemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to update a Theme.
     */
    data: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
    /**
     * Choose, which Theme to update.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme updateMany
   */
  export type ThemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Themes.
     */
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyInput>
    /**
     * Filter which Themes to update
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to update.
     */
    limit?: number
  }

  /**
   * Theme upsert
   */
  export type ThemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The filter to search for the Theme to update in case it exists.
     */
    where: ThemeWhereUniqueInput
    /**
     * In case the Theme found by the `where` argument doesn't exist, create a new Theme with this data.
     */
    create: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
    /**
     * In case the Theme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
  }

  /**
   * Theme delete
   */
  export type ThemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter which Theme to delete.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme deleteMany
   */
  export type ThemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Themes to delete
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to delete.
     */
    limit?: number
  }

  /**
   * Theme.Serie
   */
  export type Theme$SerieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Serie
     */
    select?: SerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Serie
     */
    omit?: SerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SerieInclude<ExtArgs> | null
    where?: SerieWhereInput
    orderBy?: SerieOrderByWithRelationInput | SerieOrderByWithRelationInput[]
    cursor?: SerieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SerieScalarFieldEnum | SerieScalarFieldEnum[]
  }

  /**
   * Theme without action
   */
  export type ThemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
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
    id: 'id',
    email: 'email',
    password: 'password',
    firstname: 'firstname',
    lastname: 'lastname',
    role: 'role',
    isEmailVerified: 'isEmailVerified'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChallengeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    xp: 'xp',
    id_serie: 'id_serie',
    id_creator: 'id_creator'
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const SerieScalarFieldEnum: {
    id: 'id',
    title: 'title',
    obtained_title: 'obtained_title',
    id_theme: 'id_theme'
  };

  export type SerieScalarFieldEnum = (typeof SerieScalarFieldEnum)[keyof typeof SerieScalarFieldEnum]


  export const ThemeScalarFieldEnum: {
    id: 'id',
    label: 'label'
  };

  export type ThemeScalarFieldEnum = (typeof ThemeScalarFieldEnum)[keyof typeof ThemeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    firstname: 'firstname',
    lastname: 'lastname'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ChallengeOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type ChallengeOrderByRelevanceFieldEnum = (typeof ChallengeOrderByRelevanceFieldEnum)[keyof typeof ChallengeOrderByRelevanceFieldEnum]


  export const SerieOrderByRelevanceFieldEnum: {
    title: 'title',
    obtained_title: 'obtained_title'
  };

  export type SerieOrderByRelevanceFieldEnum = (typeof SerieOrderByRelevanceFieldEnum)[keyof typeof SerieOrderByRelevanceFieldEnum]


  export const ThemeOrderByRelevanceFieldEnum: {
    label: 'label'
  };

  export type ThemeOrderByRelevanceFieldEnum = (typeof ThemeOrderByRelevanceFieldEnum)[keyof typeof ThemeOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isEmailVerified?: BoolFilter<"User"> | boolean
    Challenge?: ChallengeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    Challenge?: ChallengeOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isEmailVerified?: BoolFilter<"User"> | boolean
    Challenge?: ChallengeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type ChallengeWhereInput = {
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    id?: IntFilter<"Challenge"> | number
    title?: StringFilter<"Challenge"> | string
    description?: StringFilter<"Challenge"> | string
    xp?: IntFilter<"Challenge"> | number
    id_serie?: IntFilter<"Challenge"> | number
    id_creator?: IntFilter<"Challenge"> | number
    Serie?: XOR<SerieScalarRelationFilter, SerieWhereInput>
    Creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChallengeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    xp?: SortOrder
    id_serie?: SortOrder
    id_creator?: SortOrder
    Serie?: SerieOrderByWithRelationInput
    Creator?: UserOrderByWithRelationInput
    _relevance?: ChallengeOrderByRelevanceInput
  }

  export type ChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    description?: StringFilter<"Challenge"> | string
    xp?: IntFilter<"Challenge"> | number
    id_serie?: IntFilter<"Challenge"> | number
    id_creator?: IntFilter<"Challenge"> | number
    Serie?: XOR<SerieScalarRelationFilter, SerieWhereInput>
    Creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "title">

  export type ChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    xp?: SortOrder
    id_serie?: SortOrder
    id_creator?: SortOrder
    _count?: ChallengeCountOrderByAggregateInput
    _avg?: ChallengeAvgOrderByAggregateInput
    _max?: ChallengeMaxOrderByAggregateInput
    _min?: ChallengeMinOrderByAggregateInput
    _sum?: ChallengeSumOrderByAggregateInput
  }

  export type ChallengeScalarWhereWithAggregatesInput = {
    AND?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    OR?: ChallengeScalarWhereWithAggregatesInput[]
    NOT?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Challenge"> | number
    title?: StringWithAggregatesFilter<"Challenge"> | string
    description?: StringWithAggregatesFilter<"Challenge"> | string
    xp?: IntWithAggregatesFilter<"Challenge"> | number
    id_serie?: IntWithAggregatesFilter<"Challenge"> | number
    id_creator?: IntWithAggregatesFilter<"Challenge"> | number
  }

  export type SerieWhereInput = {
    AND?: SerieWhereInput | SerieWhereInput[]
    OR?: SerieWhereInput[]
    NOT?: SerieWhereInput | SerieWhereInput[]
    id?: IntFilter<"Serie"> | number
    title?: StringFilter<"Serie"> | string
    obtained_title?: StringFilter<"Serie"> | string
    id_theme?: IntFilter<"Serie"> | number
    ThemeRel?: XOR<ThemeScalarRelationFilter, ThemeWhereInput>
    Challenge?: ChallengeListRelationFilter
  }

  export type SerieOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    obtained_title?: SortOrder
    id_theme?: SortOrder
    ThemeRel?: ThemeOrderByWithRelationInput
    Challenge?: ChallengeOrderByRelationAggregateInput
    _relevance?: SerieOrderByRelevanceInput
  }

  export type SerieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    obtained_title?: string
    AND?: SerieWhereInput | SerieWhereInput[]
    OR?: SerieWhereInput[]
    NOT?: SerieWhereInput | SerieWhereInput[]
    id_theme?: IntFilter<"Serie"> | number
    ThemeRel?: XOR<ThemeScalarRelationFilter, ThemeWhereInput>
    Challenge?: ChallengeListRelationFilter
  }, "id" | "title" | "obtained_title">

  export type SerieOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    obtained_title?: SortOrder
    id_theme?: SortOrder
    _count?: SerieCountOrderByAggregateInput
    _avg?: SerieAvgOrderByAggregateInput
    _max?: SerieMaxOrderByAggregateInput
    _min?: SerieMinOrderByAggregateInput
    _sum?: SerieSumOrderByAggregateInput
  }

  export type SerieScalarWhereWithAggregatesInput = {
    AND?: SerieScalarWhereWithAggregatesInput | SerieScalarWhereWithAggregatesInput[]
    OR?: SerieScalarWhereWithAggregatesInput[]
    NOT?: SerieScalarWhereWithAggregatesInput | SerieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Serie"> | number
    title?: StringWithAggregatesFilter<"Serie"> | string
    obtained_title?: StringWithAggregatesFilter<"Serie"> | string
    id_theme?: IntWithAggregatesFilter<"Serie"> | number
  }

  export type ThemeWhereInput = {
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    id?: IntFilter<"Theme"> | number
    label?: StringFilter<"Theme"> | string
    Serie?: SerieListRelationFilter
  }

  export type ThemeOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    Serie?: SerieOrderByRelationAggregateInput
    _relevance?: ThemeOrderByRelevanceInput
  }

  export type ThemeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    label?: string
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    Serie?: SerieListRelationFilter
  }, "id" | "label">

  export type ThemeOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    _count?: ThemeCountOrderByAggregateInput
    _avg?: ThemeAvgOrderByAggregateInput
    _max?: ThemeMaxOrderByAggregateInput
    _min?: ThemeMinOrderByAggregateInput
    _sum?: ThemeSumOrderByAggregateInput
  }

  export type ThemeScalarWhereWithAggregatesInput = {
    AND?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    OR?: ThemeScalarWhereWithAggregatesInput[]
    NOT?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Theme"> | number
    label?: StringWithAggregatesFilter<"Theme"> | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    firstname: string
    lastname: string
    role: $Enums.Role
    isEmailVerified?: boolean
    Challenge?: ChallengeCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    firstname: string
    lastname: string
    role: $Enums.Role
    isEmailVerified?: boolean
    Challenge?: ChallengeUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    Challenge?: ChallengeUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    Challenge?: ChallengeUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    firstname: string
    lastname: string
    role: $Enums.Role
    isEmailVerified?: boolean
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeCreateInput = {
    title: string
    description: string
    xp: number
    Serie: SerieCreateNestedOneWithoutChallengeInput
    Creator: UserCreateNestedOneWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    xp: number
    id_serie: number
    id_creator: number
  }

  export type ChallengeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    Serie?: SerieUpdateOneRequiredWithoutChallengeNestedInput
    Creator?: UserUpdateOneRequiredWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    id_serie?: IntFieldUpdateOperationsInput | number
    id_creator?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeCreateManyInput = {
    id?: number
    title: string
    description: string
    xp: number
    id_serie: number
    id_creator: number
  }

  export type ChallengeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    id_serie?: IntFieldUpdateOperationsInput | number
    id_creator?: IntFieldUpdateOperationsInput | number
  }

  export type SerieCreateInput = {
    title: string
    obtained_title: string
    ThemeRel: ThemeCreateNestedOneWithoutSerieInput
    Challenge?: ChallengeCreateNestedManyWithoutSerieInput
  }

  export type SerieUncheckedCreateInput = {
    id?: number
    title: string
    obtained_title: string
    id_theme: number
    Challenge?: ChallengeUncheckedCreateNestedManyWithoutSerieInput
  }

  export type SerieUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    obtained_title?: StringFieldUpdateOperationsInput | string
    ThemeRel?: ThemeUpdateOneRequiredWithoutSerieNestedInput
    Challenge?: ChallengeUpdateManyWithoutSerieNestedInput
  }

  export type SerieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    obtained_title?: StringFieldUpdateOperationsInput | string
    id_theme?: IntFieldUpdateOperationsInput | number
    Challenge?: ChallengeUncheckedUpdateManyWithoutSerieNestedInput
  }

  export type SerieCreateManyInput = {
    id?: number
    title: string
    obtained_title: string
    id_theme: number
  }

  export type SerieUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    obtained_title?: StringFieldUpdateOperationsInput | string
  }

  export type SerieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    obtained_title?: StringFieldUpdateOperationsInput | string
    id_theme?: IntFieldUpdateOperationsInput | number
  }

  export type ThemeCreateInput = {
    label: string
    Serie?: SerieCreateNestedManyWithoutThemeRelInput
  }

  export type ThemeUncheckedCreateInput = {
    id?: number
    label: string
    Serie?: SerieUncheckedCreateNestedManyWithoutThemeRelInput
  }

  export type ThemeUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    Serie?: SerieUpdateManyWithoutThemeRelNestedInput
  }

  export type ThemeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    Serie?: SerieUncheckedUpdateManyWithoutThemeRelNestedInput
  }

  export type ThemeCreateManyInput = {
    id?: number
    label: string
  }

  export type ThemeUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type ThemeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChallengeListRelationFilter = {
    every?: ChallengeWhereInput
    some?: ChallengeWhereInput
    none?: ChallengeWhereInput
  }

  export type ChallengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SerieScalarRelationFilter = {
    is?: SerieWhereInput
    isNot?: SerieWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChallengeOrderByRelevanceInput = {
    fields: ChallengeOrderByRelevanceFieldEnum | ChallengeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    xp?: SortOrder
    id_serie?: SortOrder
    id_creator?: SortOrder
  }

  export type ChallengeAvgOrderByAggregateInput = {
    id?: SortOrder
    xp?: SortOrder
    id_serie?: SortOrder
    id_creator?: SortOrder
  }

  export type ChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    xp?: SortOrder
    id_serie?: SortOrder
    id_creator?: SortOrder
  }

  export type ChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    xp?: SortOrder
    id_serie?: SortOrder
    id_creator?: SortOrder
  }

  export type ChallengeSumOrderByAggregateInput = {
    id?: SortOrder
    xp?: SortOrder
    id_serie?: SortOrder
    id_creator?: SortOrder
  }

  export type ThemeScalarRelationFilter = {
    is?: ThemeWhereInput
    isNot?: ThemeWhereInput
  }

  export type SerieOrderByRelevanceInput = {
    fields: SerieOrderByRelevanceFieldEnum | SerieOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SerieCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    obtained_title?: SortOrder
    id_theme?: SortOrder
  }

  export type SerieAvgOrderByAggregateInput = {
    id?: SortOrder
    id_theme?: SortOrder
  }

  export type SerieMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    obtained_title?: SortOrder
    id_theme?: SortOrder
  }

  export type SerieMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    obtained_title?: SortOrder
    id_theme?: SortOrder
  }

  export type SerieSumOrderByAggregateInput = {
    id?: SortOrder
    id_theme?: SortOrder
  }

  export type SerieListRelationFilter = {
    every?: SerieWhereInput
    some?: SerieWhereInput
    none?: SerieWhereInput
  }

  export type SerieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThemeOrderByRelevanceInput = {
    fields: ThemeOrderByRelevanceFieldEnum | ThemeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ThemeCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type ThemeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ThemeMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type ThemeMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type ThemeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChallengeCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput> | ChallengeCreateWithoutCreatorInput[] | ChallengeUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutCreatorInput | ChallengeCreateOrConnectWithoutCreatorInput[]
    createMany?: ChallengeCreateManyCreatorInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type ChallengeUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput> | ChallengeCreateWithoutCreatorInput[] | ChallengeUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutCreatorInput | ChallengeCreateOrConnectWithoutCreatorInput[]
    createMany?: ChallengeCreateManyCreatorInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChallengeUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput> | ChallengeCreateWithoutCreatorInput[] | ChallengeUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutCreatorInput | ChallengeCreateOrConnectWithoutCreatorInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutCreatorInput | ChallengeUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChallengeCreateManyCreatorInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutCreatorInput | ChallengeUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutCreatorInput | ChallengeUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChallengeUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput> | ChallengeCreateWithoutCreatorInput[] | ChallengeUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutCreatorInput | ChallengeCreateOrConnectWithoutCreatorInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutCreatorInput | ChallengeUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChallengeCreateManyCreatorInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutCreatorInput | ChallengeUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutCreatorInput | ChallengeUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type SerieCreateNestedOneWithoutChallengeInput = {
    create?: XOR<SerieCreateWithoutChallengeInput, SerieUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: SerieCreateOrConnectWithoutChallengeInput
    connect?: SerieWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChallengeInput = {
    create?: XOR<UserCreateWithoutChallengeInput, UserUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengeInput
    connect?: UserWhereUniqueInput
  }

  export type SerieUpdateOneRequiredWithoutChallengeNestedInput = {
    create?: XOR<SerieCreateWithoutChallengeInput, SerieUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: SerieCreateOrConnectWithoutChallengeInput
    upsert?: SerieUpsertWithoutChallengeInput
    connect?: SerieWhereUniqueInput
    update?: XOR<XOR<SerieUpdateToOneWithWhereWithoutChallengeInput, SerieUpdateWithoutChallengeInput>, SerieUncheckedUpdateWithoutChallengeInput>
  }

  export type UserUpdateOneRequiredWithoutChallengeNestedInput = {
    create?: XOR<UserCreateWithoutChallengeInput, UserUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengeInput
    upsert?: UserUpsertWithoutChallengeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChallengeInput, UserUpdateWithoutChallengeInput>, UserUncheckedUpdateWithoutChallengeInput>
  }

  export type ThemeCreateNestedOneWithoutSerieInput = {
    create?: XOR<ThemeCreateWithoutSerieInput, ThemeUncheckedCreateWithoutSerieInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutSerieInput
    connect?: ThemeWhereUniqueInput
  }

  export type ChallengeCreateNestedManyWithoutSerieInput = {
    create?: XOR<ChallengeCreateWithoutSerieInput, ChallengeUncheckedCreateWithoutSerieInput> | ChallengeCreateWithoutSerieInput[] | ChallengeUncheckedCreateWithoutSerieInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutSerieInput | ChallengeCreateOrConnectWithoutSerieInput[]
    createMany?: ChallengeCreateManySerieInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type ChallengeUncheckedCreateNestedManyWithoutSerieInput = {
    create?: XOR<ChallengeCreateWithoutSerieInput, ChallengeUncheckedCreateWithoutSerieInput> | ChallengeCreateWithoutSerieInput[] | ChallengeUncheckedCreateWithoutSerieInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutSerieInput | ChallengeCreateOrConnectWithoutSerieInput[]
    createMany?: ChallengeCreateManySerieInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type ThemeUpdateOneRequiredWithoutSerieNestedInput = {
    create?: XOR<ThemeCreateWithoutSerieInput, ThemeUncheckedCreateWithoutSerieInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutSerieInput
    upsert?: ThemeUpsertWithoutSerieInput
    connect?: ThemeWhereUniqueInput
    update?: XOR<XOR<ThemeUpdateToOneWithWhereWithoutSerieInput, ThemeUpdateWithoutSerieInput>, ThemeUncheckedUpdateWithoutSerieInput>
  }

  export type ChallengeUpdateManyWithoutSerieNestedInput = {
    create?: XOR<ChallengeCreateWithoutSerieInput, ChallengeUncheckedCreateWithoutSerieInput> | ChallengeCreateWithoutSerieInput[] | ChallengeUncheckedCreateWithoutSerieInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutSerieInput | ChallengeCreateOrConnectWithoutSerieInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutSerieInput | ChallengeUpsertWithWhereUniqueWithoutSerieInput[]
    createMany?: ChallengeCreateManySerieInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutSerieInput | ChallengeUpdateWithWhereUniqueWithoutSerieInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutSerieInput | ChallengeUpdateManyWithWhereWithoutSerieInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type ChallengeUncheckedUpdateManyWithoutSerieNestedInput = {
    create?: XOR<ChallengeCreateWithoutSerieInput, ChallengeUncheckedCreateWithoutSerieInput> | ChallengeCreateWithoutSerieInput[] | ChallengeUncheckedCreateWithoutSerieInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutSerieInput | ChallengeCreateOrConnectWithoutSerieInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutSerieInput | ChallengeUpsertWithWhereUniqueWithoutSerieInput[]
    createMany?: ChallengeCreateManySerieInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutSerieInput | ChallengeUpdateWithWhereUniqueWithoutSerieInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutSerieInput | ChallengeUpdateManyWithWhereWithoutSerieInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type SerieCreateNestedManyWithoutThemeRelInput = {
    create?: XOR<SerieCreateWithoutThemeRelInput, SerieUncheckedCreateWithoutThemeRelInput> | SerieCreateWithoutThemeRelInput[] | SerieUncheckedCreateWithoutThemeRelInput[]
    connectOrCreate?: SerieCreateOrConnectWithoutThemeRelInput | SerieCreateOrConnectWithoutThemeRelInput[]
    createMany?: SerieCreateManyThemeRelInputEnvelope
    connect?: SerieWhereUniqueInput | SerieWhereUniqueInput[]
  }

  export type SerieUncheckedCreateNestedManyWithoutThemeRelInput = {
    create?: XOR<SerieCreateWithoutThemeRelInput, SerieUncheckedCreateWithoutThemeRelInput> | SerieCreateWithoutThemeRelInput[] | SerieUncheckedCreateWithoutThemeRelInput[]
    connectOrCreate?: SerieCreateOrConnectWithoutThemeRelInput | SerieCreateOrConnectWithoutThemeRelInput[]
    createMany?: SerieCreateManyThemeRelInputEnvelope
    connect?: SerieWhereUniqueInput | SerieWhereUniqueInput[]
  }

  export type SerieUpdateManyWithoutThemeRelNestedInput = {
    create?: XOR<SerieCreateWithoutThemeRelInput, SerieUncheckedCreateWithoutThemeRelInput> | SerieCreateWithoutThemeRelInput[] | SerieUncheckedCreateWithoutThemeRelInput[]
    connectOrCreate?: SerieCreateOrConnectWithoutThemeRelInput | SerieCreateOrConnectWithoutThemeRelInput[]
    upsert?: SerieUpsertWithWhereUniqueWithoutThemeRelInput | SerieUpsertWithWhereUniqueWithoutThemeRelInput[]
    createMany?: SerieCreateManyThemeRelInputEnvelope
    set?: SerieWhereUniqueInput | SerieWhereUniqueInput[]
    disconnect?: SerieWhereUniqueInput | SerieWhereUniqueInput[]
    delete?: SerieWhereUniqueInput | SerieWhereUniqueInput[]
    connect?: SerieWhereUniqueInput | SerieWhereUniqueInput[]
    update?: SerieUpdateWithWhereUniqueWithoutThemeRelInput | SerieUpdateWithWhereUniqueWithoutThemeRelInput[]
    updateMany?: SerieUpdateManyWithWhereWithoutThemeRelInput | SerieUpdateManyWithWhereWithoutThemeRelInput[]
    deleteMany?: SerieScalarWhereInput | SerieScalarWhereInput[]
  }

  export type SerieUncheckedUpdateManyWithoutThemeRelNestedInput = {
    create?: XOR<SerieCreateWithoutThemeRelInput, SerieUncheckedCreateWithoutThemeRelInput> | SerieCreateWithoutThemeRelInput[] | SerieUncheckedCreateWithoutThemeRelInput[]
    connectOrCreate?: SerieCreateOrConnectWithoutThemeRelInput | SerieCreateOrConnectWithoutThemeRelInput[]
    upsert?: SerieUpsertWithWhereUniqueWithoutThemeRelInput | SerieUpsertWithWhereUniqueWithoutThemeRelInput[]
    createMany?: SerieCreateManyThemeRelInputEnvelope
    set?: SerieWhereUniqueInput | SerieWhereUniqueInput[]
    disconnect?: SerieWhereUniqueInput | SerieWhereUniqueInput[]
    delete?: SerieWhereUniqueInput | SerieWhereUniqueInput[]
    connect?: SerieWhereUniqueInput | SerieWhereUniqueInput[]
    update?: SerieUpdateWithWhereUniqueWithoutThemeRelInput | SerieUpdateWithWhereUniqueWithoutThemeRelInput[]
    updateMany?: SerieUpdateManyWithWhereWithoutThemeRelInput | SerieUpdateManyWithWhereWithoutThemeRelInput[]
    deleteMany?: SerieScalarWhereInput | SerieScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChallengeCreateWithoutCreatorInput = {
    title: string
    description: string
    xp: number
    Serie: SerieCreateNestedOneWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutCreatorInput = {
    id?: number
    title: string
    description: string
    xp: number
    id_serie: number
  }

  export type ChallengeCreateOrConnectWithoutCreatorInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput>
  }

  export type ChallengeCreateManyCreatorInputEnvelope = {
    data: ChallengeCreateManyCreatorInput | ChallengeCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ChallengeWhereUniqueInput
    update: XOR<ChallengeUpdateWithoutCreatorInput, ChallengeUncheckedUpdateWithoutCreatorInput>
    create: XOR<ChallengeCreateWithoutCreatorInput, ChallengeUncheckedCreateWithoutCreatorInput>
  }

  export type ChallengeUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ChallengeWhereUniqueInput
    data: XOR<ChallengeUpdateWithoutCreatorInput, ChallengeUncheckedUpdateWithoutCreatorInput>
  }

  export type ChallengeUpdateManyWithWhereWithoutCreatorInput = {
    where: ChallengeScalarWhereInput
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ChallengeScalarWhereInput = {
    AND?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
    OR?: ChallengeScalarWhereInput[]
    NOT?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
    id?: IntFilter<"Challenge"> | number
    title?: StringFilter<"Challenge"> | string
    description?: StringFilter<"Challenge"> | string
    xp?: IntFilter<"Challenge"> | number
    id_serie?: IntFilter<"Challenge"> | number
    id_creator?: IntFilter<"Challenge"> | number
  }

  export type SerieCreateWithoutChallengeInput = {
    title: string
    obtained_title: string
    ThemeRel: ThemeCreateNestedOneWithoutSerieInput
  }

  export type SerieUncheckedCreateWithoutChallengeInput = {
    id?: number
    title: string
    obtained_title: string
    id_theme: number
  }

  export type SerieCreateOrConnectWithoutChallengeInput = {
    where: SerieWhereUniqueInput
    create: XOR<SerieCreateWithoutChallengeInput, SerieUncheckedCreateWithoutChallengeInput>
  }

  export type UserCreateWithoutChallengeInput = {
    email: string
    password: string
    firstname: string
    lastname: string
    role: $Enums.Role
    isEmailVerified?: boolean
  }

  export type UserUncheckedCreateWithoutChallengeInput = {
    id?: number
    email: string
    password: string
    firstname: string
    lastname: string
    role: $Enums.Role
    isEmailVerified?: boolean
  }

  export type UserCreateOrConnectWithoutChallengeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChallengeInput, UserUncheckedCreateWithoutChallengeInput>
  }

  export type SerieUpsertWithoutChallengeInput = {
    update: XOR<SerieUpdateWithoutChallengeInput, SerieUncheckedUpdateWithoutChallengeInput>
    create: XOR<SerieCreateWithoutChallengeInput, SerieUncheckedCreateWithoutChallengeInput>
    where?: SerieWhereInput
  }

  export type SerieUpdateToOneWithWhereWithoutChallengeInput = {
    where?: SerieWhereInput
    data: XOR<SerieUpdateWithoutChallengeInput, SerieUncheckedUpdateWithoutChallengeInput>
  }

  export type SerieUpdateWithoutChallengeInput = {
    title?: StringFieldUpdateOperationsInput | string
    obtained_title?: StringFieldUpdateOperationsInput | string
    ThemeRel?: ThemeUpdateOneRequiredWithoutSerieNestedInput
  }

  export type SerieUncheckedUpdateWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    obtained_title?: StringFieldUpdateOperationsInput | string
    id_theme?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutChallengeInput = {
    update: XOR<UserUpdateWithoutChallengeInput, UserUncheckedUpdateWithoutChallengeInput>
    create: XOR<UserCreateWithoutChallengeInput, UserUncheckedCreateWithoutChallengeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChallengeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChallengeInput, UserUncheckedUpdateWithoutChallengeInput>
  }

  export type UserUpdateWithoutChallengeInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThemeCreateWithoutSerieInput = {
    label: string
  }

  export type ThemeUncheckedCreateWithoutSerieInput = {
    id?: number
    label: string
  }

  export type ThemeCreateOrConnectWithoutSerieInput = {
    where: ThemeWhereUniqueInput
    create: XOR<ThemeCreateWithoutSerieInput, ThemeUncheckedCreateWithoutSerieInput>
  }

  export type ChallengeCreateWithoutSerieInput = {
    title: string
    description: string
    xp: number
    Creator: UserCreateNestedOneWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutSerieInput = {
    id?: number
    title: string
    description: string
    xp: number
    id_creator: number
  }

  export type ChallengeCreateOrConnectWithoutSerieInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutSerieInput, ChallengeUncheckedCreateWithoutSerieInput>
  }

  export type ChallengeCreateManySerieInputEnvelope = {
    data: ChallengeCreateManySerieInput | ChallengeCreateManySerieInput[]
    skipDuplicates?: boolean
  }

  export type ThemeUpsertWithoutSerieInput = {
    update: XOR<ThemeUpdateWithoutSerieInput, ThemeUncheckedUpdateWithoutSerieInput>
    create: XOR<ThemeCreateWithoutSerieInput, ThemeUncheckedCreateWithoutSerieInput>
    where?: ThemeWhereInput
  }

  export type ThemeUpdateToOneWithWhereWithoutSerieInput = {
    where?: ThemeWhereInput
    data: XOR<ThemeUpdateWithoutSerieInput, ThemeUncheckedUpdateWithoutSerieInput>
  }

  export type ThemeUpdateWithoutSerieInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type ThemeUncheckedUpdateWithoutSerieInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type ChallengeUpsertWithWhereUniqueWithoutSerieInput = {
    where: ChallengeWhereUniqueInput
    update: XOR<ChallengeUpdateWithoutSerieInput, ChallengeUncheckedUpdateWithoutSerieInput>
    create: XOR<ChallengeCreateWithoutSerieInput, ChallengeUncheckedCreateWithoutSerieInput>
  }

  export type ChallengeUpdateWithWhereUniqueWithoutSerieInput = {
    where: ChallengeWhereUniqueInput
    data: XOR<ChallengeUpdateWithoutSerieInput, ChallengeUncheckedUpdateWithoutSerieInput>
  }

  export type ChallengeUpdateManyWithWhereWithoutSerieInput = {
    where: ChallengeScalarWhereInput
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyWithoutSerieInput>
  }

  export type SerieCreateWithoutThemeRelInput = {
    title: string
    obtained_title: string
    Challenge?: ChallengeCreateNestedManyWithoutSerieInput
  }

  export type SerieUncheckedCreateWithoutThemeRelInput = {
    id?: number
    title: string
    obtained_title: string
    Challenge?: ChallengeUncheckedCreateNestedManyWithoutSerieInput
  }

  export type SerieCreateOrConnectWithoutThemeRelInput = {
    where: SerieWhereUniqueInput
    create: XOR<SerieCreateWithoutThemeRelInput, SerieUncheckedCreateWithoutThemeRelInput>
  }

  export type SerieCreateManyThemeRelInputEnvelope = {
    data: SerieCreateManyThemeRelInput | SerieCreateManyThemeRelInput[]
    skipDuplicates?: boolean
  }

  export type SerieUpsertWithWhereUniqueWithoutThemeRelInput = {
    where: SerieWhereUniqueInput
    update: XOR<SerieUpdateWithoutThemeRelInput, SerieUncheckedUpdateWithoutThemeRelInput>
    create: XOR<SerieCreateWithoutThemeRelInput, SerieUncheckedCreateWithoutThemeRelInput>
  }

  export type SerieUpdateWithWhereUniqueWithoutThemeRelInput = {
    where: SerieWhereUniqueInput
    data: XOR<SerieUpdateWithoutThemeRelInput, SerieUncheckedUpdateWithoutThemeRelInput>
  }

  export type SerieUpdateManyWithWhereWithoutThemeRelInput = {
    where: SerieScalarWhereInput
    data: XOR<SerieUpdateManyMutationInput, SerieUncheckedUpdateManyWithoutThemeRelInput>
  }

  export type SerieScalarWhereInput = {
    AND?: SerieScalarWhereInput | SerieScalarWhereInput[]
    OR?: SerieScalarWhereInput[]
    NOT?: SerieScalarWhereInput | SerieScalarWhereInput[]
    id?: IntFilter<"Serie"> | number
    title?: StringFilter<"Serie"> | string
    obtained_title?: StringFilter<"Serie"> | string
    id_theme?: IntFilter<"Serie"> | number
  }

  export type ChallengeCreateManyCreatorInput = {
    id?: number
    title: string
    description: string
    xp: number
    id_serie: number
  }

  export type ChallengeUpdateWithoutCreatorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    Serie?: SerieUpdateOneRequiredWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    id_serie?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    id_serie?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeCreateManySerieInput = {
    id?: number
    title: string
    description: string
    xp: number
    id_creator: number
  }

  export type ChallengeUpdateWithoutSerieInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    Creator?: UserUpdateOneRequiredWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutSerieInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    id_creator?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeUncheckedUpdateManyWithoutSerieInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xp?: IntFieldUpdateOperationsInput | number
    id_creator?: IntFieldUpdateOperationsInput | number
  }

  export type SerieCreateManyThemeRelInput = {
    id?: number
    title: string
    obtained_title: string
  }

  export type SerieUpdateWithoutThemeRelInput = {
    title?: StringFieldUpdateOperationsInput | string
    obtained_title?: StringFieldUpdateOperationsInput | string
    Challenge?: ChallengeUpdateManyWithoutSerieNestedInput
  }

  export type SerieUncheckedUpdateWithoutThemeRelInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    obtained_title?: StringFieldUpdateOperationsInput | string
    Challenge?: ChallengeUncheckedUpdateManyWithoutSerieNestedInput
  }

  export type SerieUncheckedUpdateManyWithoutThemeRelInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    obtained_title?: StringFieldUpdateOperationsInput | string
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