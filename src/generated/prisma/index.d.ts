
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ApiRequestLog
 * 
 */
export type ApiRequestLog = $Result.DefaultSelection<Prisma.$ApiRequestLogPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model EmailVerificationToken
 * 
 */
export type EmailVerificationToken = $Result.DefaultSelection<Prisma.$EmailVerificationTokenPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Provider
 * 
 */
export type Provider = $Result.DefaultSelection<Prisma.$ProviderPayload>
/**
 * Model ProviderModel
 * 
 */
export type ProviderModel = $Result.DefaultSelection<Prisma.$ProviderModelPayload>
/**
 * Model SearchHistory
 * 
 */
export type SearchHistory = $Result.DefaultSelection<Prisma.$SearchHistoryPayload>
/**
 * Model SearchCache
 * 
 */
export type SearchCache = $Result.DefaultSelection<Prisma.$SearchCachePayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model SubscriptionUsage
 * 
 */
export type SubscriptionUsage = $Result.DefaultSelection<Prisma.$SubscriptionUsagePayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MessageRole: {
  USER: 'USER',
  ASSISTANT: 'ASSISTANT',
  SYSTEM: 'SYSTEM'
};

export type MessageRole = (typeof MessageRole)[keyof typeof MessageRole]


export const ProviderType: {
  OPENAI: 'OPENAI',
  ANTHROPIC: 'ANTHROPIC',
  GOOGLE: 'GOOGLE',
  DEEPSEEK: 'DEEPSEEK',
  OTHER: 'OTHER'
};

export type ProviderType = (typeof ProviderType)[keyof typeof ProviderType]


export const SubscriptionPlan: {
  FREE: 'FREE',
  PRO: 'PRO',
  PREMIUM: 'PREMIUM'
};

export type SubscriptionPlan = (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  CANCELED: 'CANCELED',
  EXPIRED: 'EXPIRED'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type MessageRole = $Enums.MessageRole

export const MessageRole: typeof $Enums.MessageRole

export type ProviderType = $Enums.ProviderType

export const ProviderType: typeof $Enums.ProviderType

export type SubscriptionPlan = $Enums.SubscriptionPlan

export const SubscriptionPlan: typeof $Enums.SubscriptionPlan

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more ApiRequestLogs
 * const apiRequestLogs = await prisma.apiRequestLog.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more ApiRequestLogs
   * const apiRequestLogs = await prisma.apiRequestLog.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.apiRequestLog`: Exposes CRUD operations for the **ApiRequestLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiRequestLogs
    * const apiRequestLogs = await prisma.apiRequestLog.findMany()
    * ```
    */
  get apiRequestLog(): Prisma.ApiRequestLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailVerificationToken`: Exposes CRUD operations for the **EmailVerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailVerificationTokens
    * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
    * ```
    */
  get emailVerificationToken(): Prisma.EmailVerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.provider`: Exposes CRUD operations for the **Provider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.provider.findMany()
    * ```
    */
  get provider(): Prisma.ProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerModel`: Exposes CRUD operations for the **ProviderModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderModels
    * const providerModels = await prisma.providerModel.findMany()
    * ```
    */
  get providerModel(): Prisma.ProviderModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.searchHistory`: Exposes CRUD operations for the **SearchHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchHistories
    * const searchHistories = await prisma.searchHistory.findMany()
    * ```
    */
  get searchHistory(): Prisma.SearchHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.searchCache`: Exposes CRUD operations for the **SearchCache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchCaches
    * const searchCaches = await prisma.searchCache.findMany()
    * ```
    */
  get searchCache(): Prisma.SearchCacheDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionUsage`: Exposes CRUD operations for the **SubscriptionUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionUsages
    * const subscriptionUsages = await prisma.subscriptionUsage.findMany()
    * ```
    */
  get subscriptionUsage(): Prisma.SubscriptionUsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    ApiRequestLog: 'ApiRequestLog',
    Session: 'Session',
    EmailVerificationToken: 'EmailVerificationToken',
    Conversation: 'Conversation',
    Message: 'Message',
    Provider: 'Provider',
    ProviderModel: 'ProviderModel',
    SearchHistory: 'SearchHistory',
    SearchCache: 'SearchCache',
    Subscription: 'Subscription',
    SubscriptionUsage: 'SubscriptionUsage',
    Role: 'Role',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "apiRequestLog" | "session" | "emailVerificationToken" | "conversation" | "message" | "provider" | "providerModel" | "searchHistory" | "searchCache" | "subscription" | "subscriptionUsage" | "role" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ApiRequestLog: {
        payload: Prisma.$ApiRequestLogPayload<ExtArgs>
        fields: Prisma.ApiRequestLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiRequestLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiRequestLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>
          }
          findFirst: {
            args: Prisma.ApiRequestLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiRequestLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>
          }
          findMany: {
            args: Prisma.ApiRequestLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>[]
          }
          create: {
            args: Prisma.ApiRequestLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>
          }
          createMany: {
            args: Prisma.ApiRequestLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiRequestLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>[]
          }
          delete: {
            args: Prisma.ApiRequestLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>
          }
          update: {
            args: Prisma.ApiRequestLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>
          }
          deleteMany: {
            args: Prisma.ApiRequestLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiRequestLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiRequestLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>[]
          }
          upsert: {
            args: Prisma.ApiRequestLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiRequestLogPayload>
          }
          aggregate: {
            args: Prisma.ApiRequestLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiRequestLog>
          }
          groupBy: {
            args: Prisma.ApiRequestLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiRequestLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiRequestLogCountArgs<ExtArgs>
            result: $Utils.Optional<ApiRequestLogCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      EmailVerificationToken: {
        payload: Prisma.$EmailVerificationTokenPayload<ExtArgs>
        fields: Prisma.EmailVerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findMany: {
            args: Prisma.EmailVerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          create: {
            args: Prisma.EmailVerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          createMany: {
            args: Prisma.EmailVerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.EmailVerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          update: {
            args: Prisma.EmailVerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.EmailVerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailVerificationToken>
          }
          groupBy: {
            args: Prisma.EmailVerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Provider: {
        payload: Prisma.$ProviderPayload<ExtArgs>
        fields: Prisma.ProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findFirst: {
            args: Prisma.ProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findMany: {
            args: Prisma.ProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          create: {
            args: Prisma.ProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          createMany: {
            args: Prisma.ProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          delete: {
            args: Prisma.ProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          update: {
            args: Prisma.ProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          deleteMany: {
            args: Prisma.ProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          upsert: {
            args: Prisma.ProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          aggregate: {
            args: Prisma.ProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvider>
          }
          groupBy: {
            args: Prisma.ProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderCountAggregateOutputType> | number
          }
        }
      }
      ProviderModel: {
        payload: Prisma.$ProviderModelPayload<ExtArgs>
        fields: Prisma.ProviderModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderModelPayload>
          }
          findFirst: {
            args: Prisma.ProviderModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderModelPayload>
          }
          findMany: {
            args: Prisma.ProviderModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderModelPayload>[]
          }
          create: {
            args: Prisma.ProviderModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderModelPayload>
          }
          createMany: {
            args: Prisma.ProviderModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderModelPayload>[]
          }
          delete: {
            args: Prisma.ProviderModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderModelPayload>
          }
          update: {
            args: Prisma.ProviderModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderModelPayload>
          }
          deleteMany: {
            args: Prisma.ProviderModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderModelPayload>[]
          }
          upsert: {
            args: Prisma.ProviderModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderModelPayload>
          }
          aggregate: {
            args: Prisma.ProviderModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderModel>
          }
          groupBy: {
            args: Prisma.ProviderModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderModelCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderModelCountAggregateOutputType> | number
          }
        }
      }
      SearchHistory: {
        payload: Prisma.$SearchHistoryPayload<ExtArgs>
        fields: Prisma.SearchHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          findFirst: {
            args: Prisma.SearchHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          findMany: {
            args: Prisma.SearchHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>[]
          }
          create: {
            args: Prisma.SearchHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          createMany: {
            args: Prisma.SearchHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>[]
          }
          delete: {
            args: Prisma.SearchHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          update: {
            args: Prisma.SearchHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          deleteMany: {
            args: Prisma.SearchHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SearchHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>[]
          }
          upsert: {
            args: Prisma.SearchHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          aggregate: {
            args: Prisma.SearchHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchHistory>
          }
          groupBy: {
            args: Prisma.SearchHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<SearchHistoryCountAggregateOutputType> | number
          }
        }
      }
      SearchCache: {
        payload: Prisma.$SearchCachePayload<ExtArgs>
        fields: Prisma.SearchCacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchCacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchCacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>
          }
          findFirst: {
            args: Prisma.SearchCacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchCacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>
          }
          findMany: {
            args: Prisma.SearchCacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>[]
          }
          create: {
            args: Prisma.SearchCacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>
          }
          createMany: {
            args: Prisma.SearchCacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchCacheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>[]
          }
          delete: {
            args: Prisma.SearchCacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>
          }
          update: {
            args: Prisma.SearchCacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>
          }
          deleteMany: {
            args: Prisma.SearchCacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchCacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SearchCacheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>[]
          }
          upsert: {
            args: Prisma.SearchCacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchCachePayload>
          }
          aggregate: {
            args: Prisma.SearchCacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchCache>
          }
          groupBy: {
            args: Prisma.SearchCacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchCacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchCacheCountArgs<ExtArgs>
            result: $Utils.Optional<SearchCacheCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionUsage: {
        payload: Prisma.$SubscriptionUsagePayload<ExtArgs>
        fields: Prisma.SubscriptionUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>
          }
          findFirst: {
            args: Prisma.SubscriptionUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>
          }
          findMany: {
            args: Prisma.SubscriptionUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>[]
          }
          create: {
            args: Prisma.SubscriptionUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>
          }
          createMany: {
            args: Prisma.SubscriptionUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>[]
          }
          delete: {
            args: Prisma.SubscriptionUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>
          }
          update: {
            args: Prisma.SubscriptionUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionUsagePayload>
          }
          aggregate: {
            args: Prisma.SubscriptionUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionUsage>
          }
          groupBy: {
            args: Prisma.SubscriptionUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionUsageCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionUsageCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    apiRequestLog?: ApiRequestLogOmit
    session?: SessionOmit
    emailVerificationToken?: EmailVerificationTokenOmit
    conversation?: ConversationOmit
    message?: MessageOmit
    provider?: ProviderOmit
    providerModel?: ProviderModelOmit
    searchHistory?: SearchHistoryOmit
    searchCache?: SearchCacheOmit
    subscription?: SubscriptionOmit
    subscriptionUsage?: SubscriptionUsageOmit
    role?: RoleOmit
    user?: UserOmit
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
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    messages: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type ProviderCountOutputType
   */

  export type ProviderCountOutputType = {
    models: number
  }

  export type ProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | ProviderCountOutputTypeCountModelsArgs
  }

  // Custom InputTypes
  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCountOutputType
     */
    select?: ProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderModelWhereInput
  }


  /**
   * Count Type ProviderModelCountOutputType
   */

  export type ProviderModelCountOutputType = {
    messages: number
  }

  export type ProviderModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ProviderModelCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ProviderModelCountOutputType without action
   */
  export type ProviderModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderModelCountOutputType
     */
    select?: ProviderModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProviderModelCountOutputType without action
   */
  export type ProviderModelCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    usages: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usages?: boolean | SubscriptionCountOutputTypeCountUsagesArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionUsageWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    verificationTokens: number
    subscriptions: number
    conversations: number
    searchHistory: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    verificationTokens?: boolean | UserCountOutputTypeCountVerificationTokensArgs
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
    conversations?: boolean | UserCountOutputTypeCountConversationsArgs
    searchHistory?: boolean | UserCountOutputTypeCountSearchHistoryArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerificationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSearchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ApiRequestLog
   */

  export type AggregateApiRequestLog = {
    _count: ApiRequestLogCountAggregateOutputType | null
    _avg: ApiRequestLogAvgAggregateOutputType | null
    _sum: ApiRequestLogSumAggregateOutputType | null
    _min: ApiRequestLogMinAggregateOutputType | null
    _max: ApiRequestLogMaxAggregateOutputType | null
  }

  export type ApiRequestLogAvgAggregateOutputType = {
    statusCode: number | null
    responseTime: number | null
  }

  export type ApiRequestLogSumAggregateOutputType = {
    statusCode: number | null
    responseTime: number | null
  }

  export type ApiRequestLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    method: string | null
    path: string | null
    statusCode: number | null
    responseTime: number | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type ApiRequestLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    method: string | null
    path: string | null
    statusCode: number | null
    responseTime: number | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type ApiRequestLogCountAggregateOutputType = {
    id: number
    userId: number
    method: number
    path: number
    statusCode: number
    responseTime: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type ApiRequestLogAvgAggregateInputType = {
    statusCode?: true
    responseTime?: true
  }

  export type ApiRequestLogSumAggregateInputType = {
    statusCode?: true
    responseTime?: true
  }

  export type ApiRequestLogMinAggregateInputType = {
    id?: true
    userId?: true
    method?: true
    path?: true
    statusCode?: true
    responseTime?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type ApiRequestLogMaxAggregateInputType = {
    id?: true
    userId?: true
    method?: true
    path?: true
    statusCode?: true
    responseTime?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type ApiRequestLogCountAggregateInputType = {
    id?: true
    userId?: true
    method?: true
    path?: true
    statusCode?: true
    responseTime?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type ApiRequestLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiRequestLog to aggregate.
     */
    where?: ApiRequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiRequestLogs to fetch.
     */
    orderBy?: ApiRequestLogOrderByWithRelationInput | ApiRequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiRequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiRequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiRequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiRequestLogs
    **/
    _count?: true | ApiRequestLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiRequestLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiRequestLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiRequestLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiRequestLogMaxAggregateInputType
  }

  export type GetApiRequestLogAggregateType<T extends ApiRequestLogAggregateArgs> = {
        [P in keyof T & keyof AggregateApiRequestLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiRequestLog[P]>
      : GetScalarType<T[P], AggregateApiRequestLog[P]>
  }




  export type ApiRequestLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiRequestLogWhereInput
    orderBy?: ApiRequestLogOrderByWithAggregationInput | ApiRequestLogOrderByWithAggregationInput[]
    by: ApiRequestLogScalarFieldEnum[] | ApiRequestLogScalarFieldEnum
    having?: ApiRequestLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiRequestLogCountAggregateInputType | true
    _avg?: ApiRequestLogAvgAggregateInputType
    _sum?: ApiRequestLogSumAggregateInputType
    _min?: ApiRequestLogMinAggregateInputType
    _max?: ApiRequestLogMaxAggregateInputType
  }

  export type ApiRequestLogGroupByOutputType = {
    id: string
    userId: string | null
    method: string
    path: string
    statusCode: number
    responseTime: number
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: ApiRequestLogCountAggregateOutputType | null
    _avg: ApiRequestLogAvgAggregateOutputType | null
    _sum: ApiRequestLogSumAggregateOutputType | null
    _min: ApiRequestLogMinAggregateOutputType | null
    _max: ApiRequestLogMaxAggregateOutputType | null
  }

  type GetApiRequestLogGroupByPayload<T extends ApiRequestLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiRequestLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiRequestLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiRequestLogGroupByOutputType[P]>
            : GetScalarType<T[P], ApiRequestLogGroupByOutputType[P]>
        }
      >
    >


  export type ApiRequestLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    method?: boolean
    path?: boolean
    statusCode?: boolean
    responseTime?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["apiRequestLog"]>

  export type ApiRequestLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    method?: boolean
    path?: boolean
    statusCode?: boolean
    responseTime?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["apiRequestLog"]>

  export type ApiRequestLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    method?: boolean
    path?: boolean
    statusCode?: boolean
    responseTime?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["apiRequestLog"]>

  export type ApiRequestLogSelectScalar = {
    id?: boolean
    userId?: boolean
    method?: boolean
    path?: boolean
    statusCode?: boolean
    responseTime?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type ApiRequestLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "method" | "path" | "statusCode" | "responseTime" | "ipAddress" | "userAgent" | "createdAt", ExtArgs["result"]["apiRequestLog"]>

  export type $ApiRequestLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiRequestLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      method: string
      path: string
      statusCode: number
      responseTime: number
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["apiRequestLog"]>
    composites: {}
  }

  type ApiRequestLogGetPayload<S extends boolean | null | undefined | ApiRequestLogDefaultArgs> = $Result.GetResult<Prisma.$ApiRequestLogPayload, S>

  type ApiRequestLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiRequestLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiRequestLogCountAggregateInputType | true
    }

  export interface ApiRequestLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiRequestLog'], meta: { name: 'ApiRequestLog' } }
    /**
     * Find zero or one ApiRequestLog that matches the filter.
     * @param {ApiRequestLogFindUniqueArgs} args - Arguments to find a ApiRequestLog
     * @example
     * // Get one ApiRequestLog
     * const apiRequestLog = await prisma.apiRequestLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiRequestLogFindUniqueArgs>(args: SelectSubset<T, ApiRequestLogFindUniqueArgs<ExtArgs>>): Prisma__ApiRequestLogClient<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiRequestLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiRequestLogFindUniqueOrThrowArgs} args - Arguments to find a ApiRequestLog
     * @example
     * // Get one ApiRequestLog
     * const apiRequestLog = await prisma.apiRequestLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiRequestLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiRequestLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiRequestLogClient<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiRequestLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiRequestLogFindFirstArgs} args - Arguments to find a ApiRequestLog
     * @example
     * // Get one ApiRequestLog
     * const apiRequestLog = await prisma.apiRequestLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiRequestLogFindFirstArgs>(args?: SelectSubset<T, ApiRequestLogFindFirstArgs<ExtArgs>>): Prisma__ApiRequestLogClient<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiRequestLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiRequestLogFindFirstOrThrowArgs} args - Arguments to find a ApiRequestLog
     * @example
     * // Get one ApiRequestLog
     * const apiRequestLog = await prisma.apiRequestLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiRequestLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiRequestLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiRequestLogClient<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiRequestLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiRequestLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiRequestLogs
     * const apiRequestLogs = await prisma.apiRequestLog.findMany()
     * 
     * // Get first 10 ApiRequestLogs
     * const apiRequestLogs = await prisma.apiRequestLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiRequestLogWithIdOnly = await prisma.apiRequestLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiRequestLogFindManyArgs>(args?: SelectSubset<T, ApiRequestLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiRequestLog.
     * @param {ApiRequestLogCreateArgs} args - Arguments to create a ApiRequestLog.
     * @example
     * // Create one ApiRequestLog
     * const ApiRequestLog = await prisma.apiRequestLog.create({
     *   data: {
     *     // ... data to create a ApiRequestLog
     *   }
     * })
     * 
     */
    create<T extends ApiRequestLogCreateArgs>(args: SelectSubset<T, ApiRequestLogCreateArgs<ExtArgs>>): Prisma__ApiRequestLogClient<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiRequestLogs.
     * @param {ApiRequestLogCreateManyArgs} args - Arguments to create many ApiRequestLogs.
     * @example
     * // Create many ApiRequestLogs
     * const apiRequestLog = await prisma.apiRequestLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiRequestLogCreateManyArgs>(args?: SelectSubset<T, ApiRequestLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiRequestLogs and returns the data saved in the database.
     * @param {ApiRequestLogCreateManyAndReturnArgs} args - Arguments to create many ApiRequestLogs.
     * @example
     * // Create many ApiRequestLogs
     * const apiRequestLog = await prisma.apiRequestLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiRequestLogs and only return the `id`
     * const apiRequestLogWithIdOnly = await prisma.apiRequestLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiRequestLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiRequestLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiRequestLog.
     * @param {ApiRequestLogDeleteArgs} args - Arguments to delete one ApiRequestLog.
     * @example
     * // Delete one ApiRequestLog
     * const ApiRequestLog = await prisma.apiRequestLog.delete({
     *   where: {
     *     // ... filter to delete one ApiRequestLog
     *   }
     * })
     * 
     */
    delete<T extends ApiRequestLogDeleteArgs>(args: SelectSubset<T, ApiRequestLogDeleteArgs<ExtArgs>>): Prisma__ApiRequestLogClient<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiRequestLog.
     * @param {ApiRequestLogUpdateArgs} args - Arguments to update one ApiRequestLog.
     * @example
     * // Update one ApiRequestLog
     * const apiRequestLog = await prisma.apiRequestLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiRequestLogUpdateArgs>(args: SelectSubset<T, ApiRequestLogUpdateArgs<ExtArgs>>): Prisma__ApiRequestLogClient<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiRequestLogs.
     * @param {ApiRequestLogDeleteManyArgs} args - Arguments to filter ApiRequestLogs to delete.
     * @example
     * // Delete a few ApiRequestLogs
     * const { count } = await prisma.apiRequestLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiRequestLogDeleteManyArgs>(args?: SelectSubset<T, ApiRequestLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiRequestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiRequestLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiRequestLogs
     * const apiRequestLog = await prisma.apiRequestLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiRequestLogUpdateManyArgs>(args: SelectSubset<T, ApiRequestLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiRequestLogs and returns the data updated in the database.
     * @param {ApiRequestLogUpdateManyAndReturnArgs} args - Arguments to update many ApiRequestLogs.
     * @example
     * // Update many ApiRequestLogs
     * const apiRequestLog = await prisma.apiRequestLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiRequestLogs and only return the `id`
     * const apiRequestLogWithIdOnly = await prisma.apiRequestLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApiRequestLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiRequestLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiRequestLog.
     * @param {ApiRequestLogUpsertArgs} args - Arguments to update or create a ApiRequestLog.
     * @example
     * // Update or create a ApiRequestLog
     * const apiRequestLog = await prisma.apiRequestLog.upsert({
     *   create: {
     *     // ... data to create a ApiRequestLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiRequestLog we want to update
     *   }
     * })
     */
    upsert<T extends ApiRequestLogUpsertArgs>(args: SelectSubset<T, ApiRequestLogUpsertArgs<ExtArgs>>): Prisma__ApiRequestLogClient<$Result.GetResult<Prisma.$ApiRequestLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiRequestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiRequestLogCountArgs} args - Arguments to filter ApiRequestLogs to count.
     * @example
     * // Count the number of ApiRequestLogs
     * const count = await prisma.apiRequestLog.count({
     *   where: {
     *     // ... the filter for the ApiRequestLogs we want to count
     *   }
     * })
    **/
    count<T extends ApiRequestLogCountArgs>(
      args?: Subset<T, ApiRequestLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiRequestLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiRequestLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiRequestLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiRequestLogAggregateArgs>(args: Subset<T, ApiRequestLogAggregateArgs>): Prisma.PrismaPromise<GetApiRequestLogAggregateType<T>>

    /**
     * Group by ApiRequestLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiRequestLogGroupByArgs} args - Group by arguments.
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
      T extends ApiRequestLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiRequestLogGroupByArgs['orderBy'] }
        : { orderBy?: ApiRequestLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiRequestLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiRequestLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiRequestLog model
   */
  readonly fields: ApiRequestLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiRequestLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiRequestLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ApiRequestLog model
   */
  interface ApiRequestLogFieldRefs {
    readonly id: FieldRef<"ApiRequestLog", 'String'>
    readonly userId: FieldRef<"ApiRequestLog", 'String'>
    readonly method: FieldRef<"ApiRequestLog", 'String'>
    readonly path: FieldRef<"ApiRequestLog", 'String'>
    readonly statusCode: FieldRef<"ApiRequestLog", 'Int'>
    readonly responseTime: FieldRef<"ApiRequestLog", 'Int'>
    readonly ipAddress: FieldRef<"ApiRequestLog", 'String'>
    readonly userAgent: FieldRef<"ApiRequestLog", 'String'>
    readonly createdAt: FieldRef<"ApiRequestLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiRequestLog findUnique
   */
  export type ApiRequestLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * Filter, which ApiRequestLog to fetch.
     */
    where: ApiRequestLogWhereUniqueInput
  }

  /**
   * ApiRequestLog findUniqueOrThrow
   */
  export type ApiRequestLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * Filter, which ApiRequestLog to fetch.
     */
    where: ApiRequestLogWhereUniqueInput
  }

  /**
   * ApiRequestLog findFirst
   */
  export type ApiRequestLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * Filter, which ApiRequestLog to fetch.
     */
    where?: ApiRequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiRequestLogs to fetch.
     */
    orderBy?: ApiRequestLogOrderByWithRelationInput | ApiRequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiRequestLogs.
     */
    cursor?: ApiRequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiRequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiRequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiRequestLogs.
     */
    distinct?: ApiRequestLogScalarFieldEnum | ApiRequestLogScalarFieldEnum[]
  }

  /**
   * ApiRequestLog findFirstOrThrow
   */
  export type ApiRequestLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * Filter, which ApiRequestLog to fetch.
     */
    where?: ApiRequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiRequestLogs to fetch.
     */
    orderBy?: ApiRequestLogOrderByWithRelationInput | ApiRequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiRequestLogs.
     */
    cursor?: ApiRequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiRequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiRequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiRequestLogs.
     */
    distinct?: ApiRequestLogScalarFieldEnum | ApiRequestLogScalarFieldEnum[]
  }

  /**
   * ApiRequestLog findMany
   */
  export type ApiRequestLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * Filter, which ApiRequestLogs to fetch.
     */
    where?: ApiRequestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiRequestLogs to fetch.
     */
    orderBy?: ApiRequestLogOrderByWithRelationInput | ApiRequestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiRequestLogs.
     */
    cursor?: ApiRequestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiRequestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiRequestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiRequestLogs.
     */
    distinct?: ApiRequestLogScalarFieldEnum | ApiRequestLogScalarFieldEnum[]
  }

  /**
   * ApiRequestLog create
   */
  export type ApiRequestLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * The data needed to create a ApiRequestLog.
     */
    data: XOR<ApiRequestLogCreateInput, ApiRequestLogUncheckedCreateInput>
  }

  /**
   * ApiRequestLog createMany
   */
  export type ApiRequestLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiRequestLogs.
     */
    data: ApiRequestLogCreateManyInput | ApiRequestLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiRequestLog createManyAndReturn
   */
  export type ApiRequestLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * The data used to create many ApiRequestLogs.
     */
    data: ApiRequestLogCreateManyInput | ApiRequestLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiRequestLog update
   */
  export type ApiRequestLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * The data needed to update a ApiRequestLog.
     */
    data: XOR<ApiRequestLogUpdateInput, ApiRequestLogUncheckedUpdateInput>
    /**
     * Choose, which ApiRequestLog to update.
     */
    where: ApiRequestLogWhereUniqueInput
  }

  /**
   * ApiRequestLog updateMany
   */
  export type ApiRequestLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiRequestLogs.
     */
    data: XOR<ApiRequestLogUpdateManyMutationInput, ApiRequestLogUncheckedUpdateManyInput>
    /**
     * Filter which ApiRequestLogs to update
     */
    where?: ApiRequestLogWhereInput
    /**
     * Limit how many ApiRequestLogs to update.
     */
    limit?: number
  }

  /**
   * ApiRequestLog updateManyAndReturn
   */
  export type ApiRequestLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * The data used to update ApiRequestLogs.
     */
    data: XOR<ApiRequestLogUpdateManyMutationInput, ApiRequestLogUncheckedUpdateManyInput>
    /**
     * Filter which ApiRequestLogs to update
     */
    where?: ApiRequestLogWhereInput
    /**
     * Limit how many ApiRequestLogs to update.
     */
    limit?: number
  }

  /**
   * ApiRequestLog upsert
   */
  export type ApiRequestLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * The filter to search for the ApiRequestLog to update in case it exists.
     */
    where: ApiRequestLogWhereUniqueInput
    /**
     * In case the ApiRequestLog found by the `where` argument doesn't exist, create a new ApiRequestLog with this data.
     */
    create: XOR<ApiRequestLogCreateInput, ApiRequestLogUncheckedCreateInput>
    /**
     * In case the ApiRequestLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiRequestLogUpdateInput, ApiRequestLogUncheckedUpdateInput>
  }

  /**
   * ApiRequestLog delete
   */
  export type ApiRequestLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
    /**
     * Filter which ApiRequestLog to delete.
     */
    where: ApiRequestLogWhereUniqueInput
  }

  /**
   * ApiRequestLog deleteMany
   */
  export type ApiRequestLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiRequestLogs to delete
     */
    where?: ApiRequestLogWhereInput
    /**
     * Limit how many ApiRequestLogs to delete.
     */
    limit?: number
  }

  /**
   * ApiRequestLog without action
   */
  export type ApiRequestLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiRequestLog
     */
    select?: ApiRequestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiRequestLog
     */
    omit?: ApiRequestLogOmit<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    refreshTokenHash: string | null
    expiresAt: Date | null
    revokedAt: Date | null
    lastUsedAt: Date | null
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    refreshTokenHash: string | null
    expiresAt: Date | null
    revokedAt: Date | null
    lastUsedAt: Date | null
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    refreshTokenHash: number
    expiresAt: number
    revokedAt: number
    lastUsedAt: number
    userAgent: number
    ipAddress: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    refreshTokenHash?: true
    expiresAt?: true
    revokedAt?: true
    lastUsedAt?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    refreshTokenHash?: true
    expiresAt?: true
    revokedAt?: true
    lastUsedAt?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    refreshTokenHash?: true
    expiresAt?: true
    revokedAt?: true
    lastUsedAt?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    refreshTokenHash: string
    expiresAt: Date
    revokedAt: Date | null
    lastUsedAt: Date | null
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshTokenHash?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    lastUsedAt?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshTokenHash?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    lastUsedAt?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshTokenHash?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    lastUsedAt?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    refreshTokenHash?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    lastUsedAt?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "refreshTokenHash" | "expiresAt" | "revokedAt" | "lastUsedAt" | "userAgent" | "ipAddress" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      refreshTokenHash: string
      expiresAt: Date
      revokedAt: Date | null
      lastUsedAt: Date | null
      userAgent: string | null
      ipAddress: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly refreshTokenHash: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly revokedAt: FieldRef<"Session", 'DateTime'>
    readonly lastUsedAt: FieldRef<"Session", 'DateTime'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model EmailVerificationToken
   */

  export type AggregateEmailVerificationToken = {
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  export type EmailVerificationTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type EmailVerificationTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type EmailVerificationTokenCountAggregateOutputType = {
    id: number
    userId: number
    tokenHash: number
    expiresAt: number
    usedAt: number
    createdAt: number
    _all: number
  }


  export type EmailVerificationTokenMinAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type EmailVerificationTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type EmailVerificationTokenCountAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
    _all?: true
  }

  export type EmailVerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationToken to aggregate.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailVerificationTokens
    **/
    _count?: true | EmailVerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailVerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type GetEmailVerificationTokenAggregateType<T extends EmailVerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
      : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
  }




  export type EmailVerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationTokenWhereInput
    orderBy?: EmailVerificationTokenOrderByWithAggregationInput | EmailVerificationTokenOrderByWithAggregationInput[]
    by: EmailVerificationTokenScalarFieldEnum[] | EmailVerificationTokenScalarFieldEnum
    having?: EmailVerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailVerificationTokenCountAggregateInputType | true
    _min?: EmailVerificationTokenMinAggregateInputType
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type EmailVerificationTokenGroupByOutputType = {
    id: string
    userId: string
    tokenHash: string
    expiresAt: Date
    usedAt: Date | null
    createdAt: Date
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  type GetEmailVerificationTokenGroupByPayload<T extends EmailVerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type EmailVerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
  }

  export type EmailVerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenHash" | "expiresAt" | "usedAt" | "createdAt", ExtArgs["result"]["emailVerificationToken"]>
  export type EmailVerificationTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailVerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerificationToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenHash: string
      expiresAt: Date
      usedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["emailVerificationToken"]>
    composites: {}
  }

  type EmailVerificationTokenGetPayload<S extends boolean | null | undefined | EmailVerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$EmailVerificationTokenPayload, S>

  type EmailVerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailVerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailVerificationTokenCountAggregateInputType | true
    }

  export interface EmailVerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailVerificationToken'], meta: { name: 'EmailVerificationToken' } }
    /**
     * Find zero or one EmailVerificationToken that matches the filter.
     * @param {EmailVerificationTokenFindUniqueArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailVerificationTokenFindUniqueArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailVerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailVerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailVerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailVerificationTokenFindFirstArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailVerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailVerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
     * 
     * // Get first 10 EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailVerificationTokenFindManyArgs>(args?: SelectSubset<T, EmailVerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailVerificationToken.
     * @param {EmailVerificationTokenCreateArgs} args - Arguments to create a EmailVerificationToken.
     * @example
     * // Create one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.create({
     *   data: {
     *     // ... data to create a EmailVerificationToken
     *   }
     * })
     * 
     */
    create<T extends EmailVerificationTokenCreateArgs>(args: SelectSubset<T, EmailVerificationTokenCreateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailVerificationTokens.
     * @param {EmailVerificationTokenCreateManyArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailVerificationTokenCreateManyArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailVerificationTokens and returns the data saved in the database.
     * @param {EmailVerificationTokenCreateManyAndReturnArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailVerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailVerificationToken.
     * @param {EmailVerificationTokenDeleteArgs} args - Arguments to delete one EmailVerificationToken.
     * @example
     * // Delete one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.delete({
     *   where: {
     *     // ... filter to delete one EmailVerificationToken
     *   }
     * })
     * 
     */
    delete<T extends EmailVerificationTokenDeleteArgs>(args: SelectSubset<T, EmailVerificationTokenDeleteArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpdateArgs} args - Arguments to update one EmailVerificationToken.
     * @example
     * // Update one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailVerificationTokenUpdateArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailVerificationTokens.
     * @param {EmailVerificationTokenDeleteManyArgs} args - Arguments to filter EmailVerificationTokens to delete.
     * @example
     * // Delete a few EmailVerificationTokens
     * const { count } = await prisma.emailVerificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailVerificationTokenDeleteManyArgs>(args?: SelectSubset<T, EmailVerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailVerificationTokenUpdateManyArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens and returns the data updated in the database.
     * @param {EmailVerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many EmailVerificationTokens.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailVerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpsertArgs} args - Arguments to update or create a EmailVerificationToken.
     * @example
     * // Update or create a EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.upsert({
     *   create: {
     *     // ... data to create a EmailVerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailVerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends EmailVerificationTokenUpsertArgs>(args: SelectSubset<T, EmailVerificationTokenUpsertArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenCountArgs} args - Arguments to filter EmailVerificationTokens to count.
     * @example
     * // Count the number of EmailVerificationTokens
     * const count = await prisma.emailVerificationToken.count({
     *   where: {
     *     // ... the filter for the EmailVerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends EmailVerificationTokenCountArgs>(
      args?: Subset<T, EmailVerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailVerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailVerificationTokenAggregateArgs>(args: Subset<T, EmailVerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationTokenAggregateType<T>>

    /**
     * Group by EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends EmailVerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: EmailVerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailVerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailVerificationToken model
   */
  readonly fields: EmailVerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailVerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EmailVerificationToken model
   */
  interface EmailVerificationTokenFieldRefs {
    readonly id: FieldRef<"EmailVerificationToken", 'String'>
    readonly userId: FieldRef<"EmailVerificationToken", 'String'>
    readonly tokenHash: FieldRef<"EmailVerificationToken", 'String'>
    readonly expiresAt: FieldRef<"EmailVerificationToken", 'DateTime'>
    readonly usedAt: FieldRef<"EmailVerificationToken", 'DateTime'>
    readonly createdAt: FieldRef<"EmailVerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailVerificationToken findUnique
   */
  export type EmailVerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findUniqueOrThrow
   */
  export type EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findFirst
   */
  export type EmailVerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findFirstOrThrow
   */
  export type EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findMany
   */
  export type EmailVerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationTokens to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken create
   */
  export type EmailVerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
  }

  /**
   * EmailVerificationToken createMany
   */
  export type EmailVerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerificationToken createManyAndReturn
   */
  export type EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerificationToken update
   */
  export type EmailVerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which EmailVerificationToken to update.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken updateMany
   */
  export type EmailVerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken updateManyAndReturn
   */
  export type EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerificationToken upsert
   */
  export type EmailVerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailVerificationToken to update in case it exists.
     */
    where: EmailVerificationTokenWhereUniqueInput
    /**
     * In case the EmailVerificationToken found by the `where` argument doesn't exist, create a new EmailVerificationToken with this data.
     */
    create: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
    /**
     * In case the EmailVerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
  }

  /**
   * EmailVerificationToken delete
   */
  export type EmailVerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter which EmailVerificationToken to delete.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken deleteMany
   */
  export type EmailVerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationTokens to delete
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken without action
   */
  export type EmailVerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConversationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: string
    userId: string
    title: string | null
    createdAt: Date
    updatedAt: Date
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "createdAt" | "updatedAt", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
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
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'String'>
    readonly userId: FieldRef<"Conversation", 'String'>
    readonly title: FieldRef<"Conversation", 'String'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
    readonly updatedAt: FieldRef<"Conversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation updateManyAndReturn
   */
  export type ConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    conversationId: string | null
    role: $Enums.MessageRole | null
    content: string | null
    providerModelId: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    conversationId: string | null
    role: $Enums.MessageRole | null
    content: string | null
    providerModelId: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    conversationId: number
    role: number
    content: number
    providerModelId: number
    createdAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    conversationId?: true
    role?: true
    content?: true
    providerModelId?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    conversationId?: true
    role?: true
    content?: true
    providerModelId?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    conversationId?: true
    role?: true
    content?: true
    providerModelId?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    conversationId: string
    role: $Enums.MessageRole
    content: string
    providerModelId: string | null
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    providerModelId?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    providerModel?: boolean | Message$providerModelArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    providerModelId?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    providerModel?: boolean | Message$providerModelArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    providerModelId?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    providerModel?: boolean | Message$providerModelArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    providerModelId?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversationId" | "role" | "content" | "providerModelId" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    providerModel?: boolean | Message$providerModelArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    providerModel?: boolean | Message$providerModelArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    providerModel?: boolean | Message$providerModelArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
      providerModel: Prisma.$ProviderModelPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conversationId: string
      role: $Enums.MessageRole
      content: string
      providerModelId: string | null
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    providerModel<T extends Message$providerModelArgs<ExtArgs> = {}>(args?: Subset<T, Message$providerModelArgs<ExtArgs>>): Prisma__ProviderModelClient<$Result.GetResult<Prisma.$ProviderModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly conversationId: FieldRef<"Message", 'String'>
    readonly role: FieldRef<"Message", 'MessageRole'>
    readonly content: FieldRef<"Message", 'String'>
    readonly providerModelId: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.providerModel
   */
  export type Message$providerModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderModel
     */
    select?: ProviderModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderModel
     */
    omit?: ProviderModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderModelInclude<ExtArgs> | null
    where?: ProviderModelWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Provider
   */

  export type AggregateProvider = {
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  export type ProviderMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ProviderType | null
    apiKey: string | null
    isActive: boolean | null
    isDefault: boolean | null
    apiBaseUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ProviderType | null
    apiKey: string | null
    isActive: boolean | null
    isDefault: boolean | null
    apiBaseUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderCountAggregateOutputType = {
    id: number
    name: number
    type: number
    apiKey: number
    isActive: number
    isDefault: number
    apiBaseUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProviderMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    apiKey?: true
    isActive?: true
    isDefault?: true
    apiBaseUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    apiKey?: true
    isActive?: true
    isDefault?: true
    apiBaseUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    apiKey?: true
    isActive?: true
    isDefault?: true
    apiBaseUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provider to aggregate.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Providers
    **/
    _count?: true | ProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderMaxAggregateInputType
  }

  export type GetProviderAggregateType<T extends ProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvider[P]>
      : GetScalarType<T[P], AggregateProvider[P]>
  }




  export type ProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderWhereInput
    orderBy?: ProviderOrderByWithAggregationInput | ProviderOrderByWithAggregationInput[]
    by: ProviderScalarFieldEnum[] | ProviderScalarFieldEnum
    having?: ProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderCountAggregateInputType | true
    _min?: ProviderMinAggregateInputType
    _max?: ProviderMaxAggregateInputType
  }

  export type ProviderGroupByOutputType = {
    id: string
    name: string
    type: $Enums.ProviderType
    apiKey: string | null
    isActive: boolean
    isDefault: boolean
    apiBaseUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  type GetProviderGroupByPayload<T extends ProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderGroupByOutputType[P]>
        }
      >
    >


  export type ProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    apiKey?: boolean
    isActive?: boolean
    isDefault?: boolean
    apiBaseUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    models?: boolean | Provider$modelsArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    apiKey?: boolean
    isActive?: boolean
    isDefault?: boolean
    apiBaseUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    apiKey?: boolean
    isActive?: boolean
    isDefault?: boolean
    apiBaseUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    apiKey?: boolean
    isActive?: boolean
    isDefault?: boolean
    apiBaseUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "apiKey" | "isActive" | "isDefault" | "apiBaseUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["provider"]>
  export type ProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | Provider$modelsArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provider"
    objects: {
      models: Prisma.$ProviderModelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.ProviderType
      apiKey: string | null
      isActive: boolean
      isDefault: boolean
      apiBaseUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["provider"]>
    composites: {}
  }

  type ProviderGetPayload<S extends boolean | null | undefined | ProviderDefaultArgs> = $Result.GetResult<Prisma.$ProviderPayload, S>

  type ProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderCountAggregateInputType | true
    }

  export interface ProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provider'], meta: { name: 'Provider' } }
    /**
     * Find zero or one Provider that matches the filter.
     * @param {ProviderFindUniqueArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderFindUniqueArgs>(args: SelectSubset<T, ProviderFindUniqueArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderFindUniqueOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderFindFirstArgs>(args?: SelectSubset<T, ProviderFindFirstArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.provider.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.provider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerWithIdOnly = await prisma.provider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderFindManyArgs>(args?: SelectSubset<T, ProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provider.
     * @param {ProviderCreateArgs} args - Arguments to create a Provider.
     * @example
     * // Create one Provider
     * const Provider = await prisma.provider.create({
     *   data: {
     *     // ... data to create a Provider
     *   }
     * })
     * 
     */
    create<T extends ProviderCreateArgs>(args: SelectSubset<T, ProviderCreateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Providers.
     * @param {ProviderCreateManyArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderCreateManyArgs>(args?: SelectSubset<T, ProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Providers and returns the data saved in the database.
     * @param {ProviderCreateManyAndReturnArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Provider.
     * @param {ProviderDeleteArgs} args - Arguments to delete one Provider.
     * @example
     * // Delete one Provider
     * const Provider = await prisma.provider.delete({
     *   where: {
     *     // ... filter to delete one Provider
     *   }
     * })
     * 
     */
    delete<T extends ProviderDeleteArgs>(args: SelectSubset<T, ProviderDeleteArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provider.
     * @param {ProviderUpdateArgs} args - Arguments to update one Provider.
     * @example
     * // Update one Provider
     * const provider = await prisma.provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderUpdateArgs>(args: SelectSubset<T, ProviderUpdateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Providers.
     * @param {ProviderDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderDeleteManyArgs>(args?: SelectSubset<T, ProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderUpdateManyArgs>(args: SelectSubset<T, ProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers and returns the data updated in the database.
     * @param {ProviderUpdateManyAndReturnArgs} args - Arguments to update many Providers.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Provider.
     * @param {ProviderUpsertArgs} args - Arguments to update or create a Provider.
     * @example
     * // Update or create a Provider
     * const provider = await prisma.provider.upsert({
     *   create: {
     *     // ... data to create a Provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider we want to update
     *   }
     * })
     */
    upsert<T extends ProviderUpsertArgs>(args: SelectSubset<T, ProviderUpsertArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.provider.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends ProviderCountArgs>(
      args?: Subset<T, ProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProviderAggregateArgs>(args: Subset<T, ProviderAggregateArgs>): Prisma.PrismaPromise<GetProviderAggregateType<T>>

    /**
     * Group by Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderGroupByArgs} args - Group by arguments.
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
      T extends ProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderGroupByArgs['orderBy'] }
        : { orderBy?: ProviderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provider model
   */
  readonly fields: ProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    models<T extends Provider$modelsArgs<ExtArgs> = {}>(args?: Subset<T, Provider$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Provider model
   */
  interface ProviderFieldRefs {
    readonly id: FieldRef<"Provider", 'String'>
    readonly name: FieldRef<"Provider", 'String'>
    readonly type: FieldRef<"Provider", 'ProviderType'>
    readonly apiKey: FieldRef<"Provider", 'String'>
    readonly isActive: FieldRef<"Provider", 'Boolean'>
    readonly isDefault: FieldRef<"Provider", 'Boolean'>
    readonly apiBaseUrl: FieldRef<"Provider", 'String'>
    readonly createdAt: FieldRef<"Provider", 'DateTime'>
    readonly updatedAt: FieldRef<"Provider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Provider findUnique
   */
  export type ProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findUniqueOrThrow
   */
  export type ProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findFirst
   */
  export type ProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findFirstOrThrow
   */
  export type ProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findMany
   */
  export type ProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Providers to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider create
   */
  export type ProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a Provider.
     */
    data: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
  }

  /**
   * Provider createMany
   */
  export type ProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider createManyAndReturn
   */
  export type ProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider update
   */
  export type ProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a Provider.
     */
    data: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
    /**
     * Choose, which Provider to update.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider updateMany
   */
  export type ProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider updateManyAndReturn
   */
  export type ProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider upsert
   */
  export type ProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the Provider to update in case it exists.
     */
    where: ProviderWhereUniqueInput
    /**
     * In case the Provider found by the `where` argument doesn't exist, create a new Provider with this data.
     */
    create: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
    /**
     * In case the Provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
  }

  /**
   * Provider delete
   */
  export type ProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter which Provider to delete.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider deleteMany
   */
  export type ProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Providers to delete
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to delete.
     */
    limit?: number
  }

  /**
   * Provider.models
   */
  export type Provider$modelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderModel
     */
    select?: ProviderModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderModel
     */
    omit?: ProviderModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderModelInclude<ExtArgs> | null
    where?: ProviderModelWhereInput
    orderBy?: ProviderModelOrderByWithRelationInput | ProviderModelOrderByWithRelationInput[]
    cursor?: ProviderModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderModelScalarFieldEnum | ProviderModelScalarFieldEnum[]
  }

  /**
   * Provider without action
   */
  export type ProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
  }


  /**
   * Model ProviderModel
   */

  export type AggregateProviderModel = {
    _count: ProviderModelCountAggregateOutputType | null
    _min: ProviderModelMinAggregateOutputType | null
    _max: ProviderModelMaxAggregateOutputType | null
  }

  export type ProviderModelMinAggregateOutputType = {
    id: string | null
    providerId: string | null
    name: string | null
    modelId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderModelMaxAggregateOutputType = {
    id: string | null
    providerId: string | null
    name: string | null
    modelId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderModelCountAggregateOutputType = {
    id: number
    providerId: number
    name: number
    modelId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProviderModelMinAggregateInputType = {
    id?: true
    providerId?: true
    name?: true
    modelId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderModelMaxAggregateInputType = {
    id?: true
    providerId?: true
    name?: true
    modelId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderModelCountAggregateInputType = {
    id?: true
    providerId?: true
    name?: true
    modelId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProviderModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderModel to aggregate.
     */
    where?: ProviderModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderModels to fetch.
     */
    orderBy?: ProviderModelOrderByWithRelationInput | ProviderModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderModels
    **/
    _count?: true | ProviderModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderModelMaxAggregateInputType
  }

  export type GetProviderModelAggregateType<T extends ProviderModelAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderModel[P]>
      : GetScalarType<T[P], AggregateProviderModel[P]>
  }




  export type ProviderModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderModelWhereInput
    orderBy?: ProviderModelOrderByWithAggregationInput | ProviderModelOrderByWithAggregationInput[]
    by: ProviderModelScalarFieldEnum[] | ProviderModelScalarFieldEnum
    having?: ProviderModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderModelCountAggregateInputType | true
    _min?: ProviderModelMinAggregateInputType
    _max?: ProviderModelMaxAggregateInputType
  }

  export type ProviderModelGroupByOutputType = {
    id: string
    providerId: string
    name: string
    modelId: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProviderModelCountAggregateOutputType | null
    _min: ProviderModelMinAggregateOutputType | null
    _max: ProviderModelMaxAggregateOutputType | null
  }

  type GetProviderModelGroupByPayload<T extends ProviderModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderModelGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderModelGroupByOutputType[P]>
        }
      >
    >


  export type ProviderModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    name?: boolean
    modelId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    messages?: boolean | ProviderModel$messagesArgs<ExtArgs>
    _count?: boolean | ProviderModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerModel"]>

  export type ProviderModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    name?: boolean
    modelId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerModel"]>

  export type ProviderModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    name?: boolean
    modelId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerModel"]>

  export type ProviderModelSelectScalar = {
    id?: boolean
    providerId?: boolean
    name?: boolean
    modelId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProviderModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerId" | "name" | "modelId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["providerModel"]>
  export type ProviderModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    messages?: boolean | ProviderModel$messagesArgs<ExtArgs>
    _count?: boolean | ProviderModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProviderModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type ProviderModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }

  export type $ProviderModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderModel"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerId: string
      name: string
      modelId: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["providerModel"]>
    composites: {}
  }

  type ProviderModelGetPayload<S extends boolean | null | undefined | ProviderModelDefaultArgs> = $Result.GetResult<Prisma.$ProviderModelPayload, S>

  type ProviderModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderModelCountAggregateInputType | true
    }

  export interface ProviderModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderModel'], meta: { name: 'ProviderModel' } }
    /**
     * Find zero or one ProviderModel that matches the filter.
     * @param {ProviderModelFindUniqueArgs} args - Arguments to find a ProviderModel
     * @example
     * // Get one ProviderModel
     * const providerModel = await prisma.providerModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderModelFindUniqueArgs>(args: SelectSubset<T, ProviderModelFindUniqueArgs<ExtArgs>>): Prisma__ProviderModelClient<$Result.GetResult<Prisma.$ProviderModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderModelFindUniqueOrThrowArgs} args - Arguments to find a ProviderModel
     * @example
     * // Get one ProviderModel
     * const providerModel = await prisma.providerModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderModelFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderModelClient<$Result.GetResult<Prisma.$ProviderModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderModelFindFirstArgs} args - Arguments to find a ProviderModel
     * @example
     * // Get one ProviderModel
     * const providerModel = await prisma.providerModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderModelFindFirstArgs>(args?: SelectSubset<T, ProviderModelFindFirstArgs<ExtArgs>>): Prisma__ProviderModelClient<$Result.GetResult<Prisma.$ProviderModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderModelFindFirstOrThrowArgs} args - Arguments to find a ProviderModel
     * @example
     * // Get one ProviderModel
     * const providerModel = await prisma.providerModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderModelFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderModelClient<$Result.GetResult<Prisma.$ProviderModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderModels
     * const providerModels = await prisma.providerModel.findMany()
     * 
     * // Get first 10 ProviderModels
     * const providerModels = await prisma.providerModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerModelWithIdOnly = await prisma.providerModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderModelFindManyArgs>(args?: SelectSubset<T, ProviderModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderModel.
     * @param {ProviderModelCreateArgs} args - Arguments to create a ProviderModel.
     * @example
     * // Create one ProviderModel
     * const ProviderModel = await prisma.providerModel.create({
     *   data: {
     *     // ... data to create a ProviderModel
     *   }
     * })
     * 
     */
    create<T extends ProviderModelCreateArgs>(args: SelectSubset<T, ProviderModelCreateArgs<ExtArgs>>): Prisma__ProviderModelClient<$Result.GetResult<Prisma.$ProviderModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderModels.
     * @param {ProviderModelCreateManyArgs} args - Arguments to create many ProviderModels.
     * @example
     * // Create many ProviderModels
     * const providerModel = await prisma.providerModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderModelCreateManyArgs>(args?: SelectSubset<T, ProviderModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderModels and returns the data saved in the database.
     * @param {ProviderModelCreateManyAndReturnArgs} args - Arguments to create many ProviderModels.
     * @example
     * // Create many ProviderModels
     * const providerModel = await prisma.providerModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderModels and only return the `id`
     * const providerModelWithIdOnly = await prisma.providerModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderModelCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProviderModel.
     * @param {ProviderModelDeleteArgs} args - Arguments to delete one ProviderModel.
     * @example
     * // Delete one ProviderModel
     * const ProviderModel = await prisma.providerModel.delete({
     *   where: {
     *     // ... filter to delete one ProviderModel
     *   }
     * })
     * 
     */
    delete<T extends ProviderModelDeleteArgs>(args: SelectSubset<T, ProviderModelDeleteArgs<ExtArgs>>): Prisma__ProviderModelClient<$Result.GetResult<Prisma.$ProviderModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderModel.
     * @param {ProviderModelUpdateArgs} args - Arguments to update one ProviderModel.
     * @example
     * // Update one ProviderModel
     * const providerModel = await prisma.providerModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderModelUpdateArgs>(args: SelectSubset<T, ProviderModelUpdateArgs<ExtArgs>>): Prisma__ProviderModelClient<$Result.GetResult<Prisma.$ProviderModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderModels.
     * @param {ProviderModelDeleteManyArgs} args - Arguments to filter ProviderModels to delete.
     * @example
     * // Delete a few ProviderModels
     * const { count } = await prisma.providerModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderModelDeleteManyArgs>(args?: SelectSubset<T, ProviderModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderModels
     * const providerModel = await prisma.providerModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderModelUpdateManyArgs>(args: SelectSubset<T, ProviderModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderModels and returns the data updated in the database.
     * @param {ProviderModelUpdateManyAndReturnArgs} args - Arguments to update many ProviderModels.
     * @example
     * // Update many ProviderModels
     * const providerModel = await prisma.providerModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProviderModels and only return the `id`
     * const providerModelWithIdOnly = await prisma.providerModel.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProviderModelUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProviderModel.
     * @param {ProviderModelUpsertArgs} args - Arguments to update or create a ProviderModel.
     * @example
     * // Update or create a ProviderModel
     * const providerModel = await prisma.providerModel.upsert({
     *   create: {
     *     // ... data to create a ProviderModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderModel we want to update
     *   }
     * })
     */
    upsert<T extends ProviderModelUpsertArgs>(args: SelectSubset<T, ProviderModelUpsertArgs<ExtArgs>>): Prisma__ProviderModelClient<$Result.GetResult<Prisma.$ProviderModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderModelCountArgs} args - Arguments to filter ProviderModels to count.
     * @example
     * // Count the number of ProviderModels
     * const count = await prisma.providerModel.count({
     *   where: {
     *     // ... the filter for the ProviderModels we want to count
     *   }
     * })
    **/
    count<T extends ProviderModelCountArgs>(
      args?: Subset<T, ProviderModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProviderModelAggregateArgs>(args: Subset<T, ProviderModelAggregateArgs>): Prisma.PrismaPromise<GetProviderModelAggregateType<T>>

    /**
     * Group by ProviderModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderModelGroupByArgs} args - Group by arguments.
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
      T extends ProviderModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderModelGroupByArgs['orderBy'] }
        : { orderBy?: ProviderModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProviderModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderModel model
   */
  readonly fields: ProviderModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends ProviderModel$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ProviderModel$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProviderModel model
   */
  interface ProviderModelFieldRefs {
    readonly id: FieldRef<"ProviderModel", 'String'>
    readonly providerId: FieldRef<"ProviderModel", 'String'>
    readonly name: FieldRef<"ProviderModel", 'String'>
    readonly modelId: FieldRef<"ProviderModel", 'String'>
    readonly isActive: FieldRef<"ProviderModel", 'Boolean'>
    readonly createdAt: FieldRef<"ProviderModel", 'DateTime'>
    readonly updatedAt: FieldRef<"ProviderModel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProviderModel findUnique
   */
  export type ProviderModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderModel
     */
    select?: ProviderModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderModel
     */
    omit?: ProviderModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderModelInclude<ExtArgs> | null
    /**
     * Filter, which ProviderModel to fetch.
     */
    where: ProviderModelWhereUniqueInput
  }

  /**
   * ProviderModel findUniqueOrThrow
   */
  export type ProviderModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderModel
     */
    select?: ProviderModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderModel
     */
    omit?: ProviderModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderModelInclude<ExtArgs> | null
    /**
     * Filter, which ProviderModel to fetch.
     */
    where: ProviderModelWhereUniqueInput
  }

  /**
   * ProviderModel findFirst
   */
  export type ProviderModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderModel
     */
    select?: ProviderModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderModel
     */
    omit?: ProviderModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderModelInclude<ExtArgs> | null
    /**
     * Filter, which ProviderModel to fetch.
     */
    where?: ProviderModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderModels to fetch.
     */
    orderBy?: ProviderModelOrderByWithRelationInput | ProviderModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderModels.
     */
    cursor?: ProviderModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderModels.
     */
    distinct?: ProviderModelScalarFieldEnum | ProviderModelScalarFieldEnum[]
  }

  /**
   * ProviderModel findFirstOrThrow
   */
  export type ProviderModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderModel
     */
    select?: ProviderModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderModel
     */
    omit?: ProviderModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderModelInclude<ExtArgs> | null
    /**
     * Filter, which ProviderModel to fetch.
     */
    where?: ProviderModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderModels to fetch.
     */
    orderBy?: ProviderModelOrderByWithRelationInput | ProviderModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderModels.
     */
    cursor?: ProviderModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderModels.
     */
    distinct?: ProviderModelScalarFieldEnum | ProviderModelScalarFieldEnum[]
  }

  /**
   * ProviderModel findMany
   */
  export type ProviderModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderModel
     */
    select?: ProviderModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderModel
     */
    omit?: ProviderModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderModelInclude<ExtArgs> | null
    /**
     * Filter, which ProviderModels to fetch.
     */
    where?: ProviderModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderModels to fetch.
     */
    orderBy?: ProviderModelOrderByWithRelationInput | ProviderModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderModels.
     */
    cursor?: ProviderModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderModels.
     */
    distinct?: ProviderModelScalarFieldEnum | ProviderModelScalarFieldEnum[]
  }

  /**
   * ProviderModel create
   */
  export type ProviderModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderModel
     */
    select?: ProviderModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderModel
     */
    omit?: ProviderModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderModelInclude<ExtArgs> | null
    /**
     * The data needed to create a ProviderModel.
     */
    data: XOR<ProviderModelCreateInput, ProviderModelUncheckedCreateInput>
  }

  /**
   * ProviderModel createMany
   */
  export type ProviderModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderModels.
     */
    data: ProviderModelCreateManyInput | ProviderModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderModel createManyAndReturn
   */
  export type ProviderModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderModel
     */
    select?: ProviderModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderModel
     */
    omit?: ProviderModelOmit<ExtArgs> | null
    /**
     * The data used to create many ProviderModels.
     */
    data: ProviderModelCreateManyInput | ProviderModelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderModelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderModel update
   */
  export type ProviderModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderModel
     */
    select?: ProviderModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderModel
     */
    omit?: ProviderModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderModelInclude<ExtArgs> | null
    /**
     * The data needed to update a ProviderModel.
     */
    data: XOR<ProviderModelUpdateInput, ProviderModelUncheckedUpdateInput>
    /**
     * Choose, which ProviderModel to update.
     */
    where: ProviderModelWhereUniqueInput
  }

  /**
   * ProviderModel updateMany
   */
  export type ProviderModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderModels.
     */
    data: XOR<ProviderModelUpdateManyMutationInput, ProviderModelUncheckedUpdateManyInput>
    /**
     * Filter which ProviderModels to update
     */
    where?: ProviderModelWhereInput
    /**
     * Limit how many ProviderModels to update.
     */
    limit?: number
  }

  /**
   * ProviderModel updateManyAndReturn
   */
  export type ProviderModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderModel
     */
    select?: ProviderModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderModel
     */
    omit?: ProviderModelOmit<ExtArgs> | null
    /**
     * The data used to update ProviderModels.
     */
    data: XOR<ProviderModelUpdateManyMutationInput, ProviderModelUncheckedUpdateManyInput>
    /**
     * Filter which ProviderModels to update
     */
    where?: ProviderModelWhereInput
    /**
     * Limit how many ProviderModels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderModelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderModel upsert
   */
  export type ProviderModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderModel
     */
    select?: ProviderModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderModel
     */
    omit?: ProviderModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderModelInclude<ExtArgs> | null
    /**
     * The filter to search for the ProviderModel to update in case it exists.
     */
    where: ProviderModelWhereUniqueInput
    /**
     * In case the ProviderModel found by the `where` argument doesn't exist, create a new ProviderModel with this data.
     */
    create: XOR<ProviderModelCreateInput, ProviderModelUncheckedCreateInput>
    /**
     * In case the ProviderModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderModelUpdateInput, ProviderModelUncheckedUpdateInput>
  }

  /**
   * ProviderModel delete
   */
  export type ProviderModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderModel
     */
    select?: ProviderModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderModel
     */
    omit?: ProviderModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderModelInclude<ExtArgs> | null
    /**
     * Filter which ProviderModel to delete.
     */
    where: ProviderModelWhereUniqueInput
  }

  /**
   * ProviderModel deleteMany
   */
  export type ProviderModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderModels to delete
     */
    where?: ProviderModelWhereInput
    /**
     * Limit how many ProviderModels to delete.
     */
    limit?: number
  }

  /**
   * ProviderModel.messages
   */
  export type ProviderModel$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * ProviderModel without action
   */
  export type ProviderModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderModel
     */
    select?: ProviderModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderModel
     */
    omit?: ProviderModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderModelInclude<ExtArgs> | null
  }


  /**
   * Model SearchHistory
   */

  export type AggregateSearchHistory = {
    _count: SearchHistoryCountAggregateOutputType | null
    _min: SearchHistoryMinAggregateOutputType | null
    _max: SearchHistoryMaxAggregateOutputType | null
  }

  export type SearchHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    query: string | null
    createdAt: Date | null
  }

  export type SearchHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    query: string | null
    createdAt: Date | null
  }

  export type SearchHistoryCountAggregateOutputType = {
    id: number
    userId: number
    query: number
    createdAt: number
    _all: number
  }


  export type SearchHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    query?: true
    createdAt?: true
  }

  export type SearchHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    query?: true
    createdAt?: true
  }

  export type SearchHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    query?: true
    createdAt?: true
    _all?: true
  }

  export type SearchHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchHistory to aggregate.
     */
    where?: SearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchHistories to fetch.
     */
    orderBy?: SearchHistoryOrderByWithRelationInput | SearchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchHistories
    **/
    _count?: true | SearchHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchHistoryMaxAggregateInputType
  }

  export type GetSearchHistoryAggregateType<T extends SearchHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchHistory[P]>
      : GetScalarType<T[P], AggregateSearchHistory[P]>
  }




  export type SearchHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchHistoryWhereInput
    orderBy?: SearchHistoryOrderByWithAggregationInput | SearchHistoryOrderByWithAggregationInput[]
    by: SearchHistoryScalarFieldEnum[] | SearchHistoryScalarFieldEnum
    having?: SearchHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchHistoryCountAggregateInputType | true
    _min?: SearchHistoryMinAggregateInputType
    _max?: SearchHistoryMaxAggregateInputType
  }

  export type SearchHistoryGroupByOutputType = {
    id: string
    userId: string
    query: string
    createdAt: Date
    _count: SearchHistoryCountAggregateOutputType | null
    _min: SearchHistoryMinAggregateOutputType | null
    _max: SearchHistoryMaxAggregateOutputType | null
  }

  type GetSearchHistoryGroupByPayload<T extends SearchHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], SearchHistoryGroupByOutputType[P]>
        }
      >
    >


  export type SearchHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    query?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchHistory"]>

  export type SearchHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    query?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchHistory"]>

  export type SearchHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    query?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchHistory"]>

  export type SearchHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    query?: boolean
    createdAt?: boolean
  }

  export type SearchHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "query" | "createdAt", ExtArgs["result"]["searchHistory"]>
  export type SearchHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SearchHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SearchHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SearchHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      query: string
      createdAt: Date
    }, ExtArgs["result"]["searchHistory"]>
    composites: {}
  }

  type SearchHistoryGetPayload<S extends boolean | null | undefined | SearchHistoryDefaultArgs> = $Result.GetResult<Prisma.$SearchHistoryPayload, S>

  type SearchHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SearchHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchHistoryCountAggregateInputType | true
    }

  export interface SearchHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchHistory'], meta: { name: 'SearchHistory' } }
    /**
     * Find zero or one SearchHistory that matches the filter.
     * @param {SearchHistoryFindUniqueArgs} args - Arguments to find a SearchHistory
     * @example
     * // Get one SearchHistory
     * const searchHistory = await prisma.searchHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchHistoryFindUniqueArgs>(args: SelectSubset<T, SearchHistoryFindUniqueArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SearchHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SearchHistoryFindUniqueOrThrowArgs} args - Arguments to find a SearchHistory
     * @example
     * // Get one SearchHistory
     * const searchHistory = await prisma.searchHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryFindFirstArgs} args - Arguments to find a SearchHistory
     * @example
     * // Get one SearchHistory
     * const searchHistory = await prisma.searchHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchHistoryFindFirstArgs>(args?: SelectSubset<T, SearchHistoryFindFirstArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryFindFirstOrThrowArgs} args - Arguments to find a SearchHistory
     * @example
     * // Get one SearchHistory
     * const searchHistory = await prisma.searchHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SearchHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchHistories
     * const searchHistories = await prisma.searchHistory.findMany()
     * 
     * // Get first 10 SearchHistories
     * const searchHistories = await prisma.searchHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchHistoryWithIdOnly = await prisma.searchHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchHistoryFindManyArgs>(args?: SelectSubset<T, SearchHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SearchHistory.
     * @param {SearchHistoryCreateArgs} args - Arguments to create a SearchHistory.
     * @example
     * // Create one SearchHistory
     * const SearchHistory = await prisma.searchHistory.create({
     *   data: {
     *     // ... data to create a SearchHistory
     *   }
     * })
     * 
     */
    create<T extends SearchHistoryCreateArgs>(args: SelectSubset<T, SearchHistoryCreateArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SearchHistories.
     * @param {SearchHistoryCreateManyArgs} args - Arguments to create many SearchHistories.
     * @example
     * // Create many SearchHistories
     * const searchHistory = await prisma.searchHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchHistoryCreateManyArgs>(args?: SelectSubset<T, SearchHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchHistories and returns the data saved in the database.
     * @param {SearchHistoryCreateManyAndReturnArgs} args - Arguments to create many SearchHistories.
     * @example
     * // Create many SearchHistories
     * const searchHistory = await prisma.searchHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchHistories and only return the `id`
     * const searchHistoryWithIdOnly = await prisma.searchHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SearchHistory.
     * @param {SearchHistoryDeleteArgs} args - Arguments to delete one SearchHistory.
     * @example
     * // Delete one SearchHistory
     * const SearchHistory = await prisma.searchHistory.delete({
     *   where: {
     *     // ... filter to delete one SearchHistory
     *   }
     * })
     * 
     */
    delete<T extends SearchHistoryDeleteArgs>(args: SelectSubset<T, SearchHistoryDeleteArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SearchHistory.
     * @param {SearchHistoryUpdateArgs} args - Arguments to update one SearchHistory.
     * @example
     * // Update one SearchHistory
     * const searchHistory = await prisma.searchHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchHistoryUpdateArgs>(args: SelectSubset<T, SearchHistoryUpdateArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SearchHistories.
     * @param {SearchHistoryDeleteManyArgs} args - Arguments to filter SearchHistories to delete.
     * @example
     * // Delete a few SearchHistories
     * const { count } = await prisma.searchHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchHistoryDeleteManyArgs>(args?: SelectSubset<T, SearchHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchHistories
     * const searchHistory = await prisma.searchHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchHistoryUpdateManyArgs>(args: SelectSubset<T, SearchHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchHistories and returns the data updated in the database.
     * @param {SearchHistoryUpdateManyAndReturnArgs} args - Arguments to update many SearchHistories.
     * @example
     * // Update many SearchHistories
     * const searchHistory = await prisma.searchHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SearchHistories and only return the `id`
     * const searchHistoryWithIdOnly = await prisma.searchHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends SearchHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SearchHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SearchHistory.
     * @param {SearchHistoryUpsertArgs} args - Arguments to update or create a SearchHistory.
     * @example
     * // Update or create a SearchHistory
     * const searchHistory = await prisma.searchHistory.upsert({
     *   create: {
     *     // ... data to create a SearchHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchHistory we want to update
     *   }
     * })
     */
    upsert<T extends SearchHistoryUpsertArgs>(args: SelectSubset<T, SearchHistoryUpsertArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SearchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryCountArgs} args - Arguments to filter SearchHistories to count.
     * @example
     * // Count the number of SearchHistories
     * const count = await prisma.searchHistory.count({
     *   where: {
     *     // ... the filter for the SearchHistories we want to count
     *   }
     * })
    **/
    count<T extends SearchHistoryCountArgs>(
      args?: Subset<T, SearchHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SearchHistoryAggregateArgs>(args: Subset<T, SearchHistoryAggregateArgs>): Prisma.PrismaPromise<GetSearchHistoryAggregateType<T>>

    /**
     * Group by SearchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryGroupByArgs} args - Group by arguments.
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
      T extends SearchHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchHistoryGroupByArgs['orderBy'] }
        : { orderBy?: SearchHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SearchHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchHistory model
   */
  readonly fields: SearchHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SearchHistory model
   */
  interface SearchHistoryFieldRefs {
    readonly id: FieldRef<"SearchHistory", 'String'>
    readonly userId: FieldRef<"SearchHistory", 'String'>
    readonly query: FieldRef<"SearchHistory", 'String'>
    readonly createdAt: FieldRef<"SearchHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SearchHistory findUnique
   */
  export type SearchHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistory to fetch.
     */
    where: SearchHistoryWhereUniqueInput
  }

  /**
   * SearchHistory findUniqueOrThrow
   */
  export type SearchHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistory to fetch.
     */
    where: SearchHistoryWhereUniqueInput
  }

  /**
   * SearchHistory findFirst
   */
  export type SearchHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistory to fetch.
     */
    where?: SearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchHistories to fetch.
     */
    orderBy?: SearchHistoryOrderByWithRelationInput | SearchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchHistories.
     */
    cursor?: SearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchHistories.
     */
    distinct?: SearchHistoryScalarFieldEnum | SearchHistoryScalarFieldEnum[]
  }

  /**
   * SearchHistory findFirstOrThrow
   */
  export type SearchHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistory to fetch.
     */
    where?: SearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchHistories to fetch.
     */
    orderBy?: SearchHistoryOrderByWithRelationInput | SearchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchHistories.
     */
    cursor?: SearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchHistories.
     */
    distinct?: SearchHistoryScalarFieldEnum | SearchHistoryScalarFieldEnum[]
  }

  /**
   * SearchHistory findMany
   */
  export type SearchHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistories to fetch.
     */
    where?: SearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchHistories to fetch.
     */
    orderBy?: SearchHistoryOrderByWithRelationInput | SearchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchHistories.
     */
    cursor?: SearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchHistories.
     */
    distinct?: SearchHistoryScalarFieldEnum | SearchHistoryScalarFieldEnum[]
  }

  /**
   * SearchHistory create
   */
  export type SearchHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SearchHistory.
     */
    data: XOR<SearchHistoryCreateInput, SearchHistoryUncheckedCreateInput>
  }

  /**
   * SearchHistory createMany
   */
  export type SearchHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchHistories.
     */
    data: SearchHistoryCreateManyInput | SearchHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchHistory createManyAndReturn
   */
  export type SearchHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many SearchHistories.
     */
    data: SearchHistoryCreateManyInput | SearchHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchHistory update
   */
  export type SearchHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SearchHistory.
     */
    data: XOR<SearchHistoryUpdateInput, SearchHistoryUncheckedUpdateInput>
    /**
     * Choose, which SearchHistory to update.
     */
    where: SearchHistoryWhereUniqueInput
  }

  /**
   * SearchHistory updateMany
   */
  export type SearchHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchHistories.
     */
    data: XOR<SearchHistoryUpdateManyMutationInput, SearchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SearchHistories to update
     */
    where?: SearchHistoryWhereInput
    /**
     * Limit how many SearchHistories to update.
     */
    limit?: number
  }

  /**
   * SearchHistory updateManyAndReturn
   */
  export type SearchHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * The data used to update SearchHistories.
     */
    data: XOR<SearchHistoryUpdateManyMutationInput, SearchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SearchHistories to update
     */
    where?: SearchHistoryWhereInput
    /**
     * Limit how many SearchHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchHistory upsert
   */
  export type SearchHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SearchHistory to update in case it exists.
     */
    where: SearchHistoryWhereUniqueInput
    /**
     * In case the SearchHistory found by the `where` argument doesn't exist, create a new SearchHistory with this data.
     */
    create: XOR<SearchHistoryCreateInput, SearchHistoryUncheckedCreateInput>
    /**
     * In case the SearchHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchHistoryUpdateInput, SearchHistoryUncheckedUpdateInput>
  }

  /**
   * SearchHistory delete
   */
  export type SearchHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter which SearchHistory to delete.
     */
    where: SearchHistoryWhereUniqueInput
  }

  /**
   * SearchHistory deleteMany
   */
  export type SearchHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchHistories to delete
     */
    where?: SearchHistoryWhereInput
    /**
     * Limit how many SearchHistories to delete.
     */
    limit?: number
  }

  /**
   * SearchHistory without action
   */
  export type SearchHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
  }


  /**
   * Model SearchCache
   */

  export type AggregateSearchCache = {
    _count: SearchCacheCountAggregateOutputType | null
    _min: SearchCacheMinAggregateOutputType | null
    _max: SearchCacheMaxAggregateOutputType | null
  }

  export type SearchCacheMinAggregateOutputType = {
    id: string | null
    cacheKey: string | null
    query: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchCacheMaxAggregateOutputType = {
    id: string | null
    cacheKey: string | null
    query: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchCacheCountAggregateOutputType = {
    id: number
    cacheKey: number
    query: number
    results: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SearchCacheMinAggregateInputType = {
    id?: true
    cacheKey?: true
    query?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchCacheMaxAggregateInputType = {
    id?: true
    cacheKey?: true
    query?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchCacheCountAggregateInputType = {
    id?: true
    cacheKey?: true
    query?: true
    results?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SearchCacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchCache to aggregate.
     */
    where?: SearchCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchCaches to fetch.
     */
    orderBy?: SearchCacheOrderByWithRelationInput | SearchCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchCaches
    **/
    _count?: true | SearchCacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchCacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchCacheMaxAggregateInputType
  }

  export type GetSearchCacheAggregateType<T extends SearchCacheAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchCache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchCache[P]>
      : GetScalarType<T[P], AggregateSearchCache[P]>
  }




  export type SearchCacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchCacheWhereInput
    orderBy?: SearchCacheOrderByWithAggregationInput | SearchCacheOrderByWithAggregationInput[]
    by: SearchCacheScalarFieldEnum[] | SearchCacheScalarFieldEnum
    having?: SearchCacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchCacheCountAggregateInputType | true
    _min?: SearchCacheMinAggregateInputType
    _max?: SearchCacheMaxAggregateInputType
  }

  export type SearchCacheGroupByOutputType = {
    id: string
    cacheKey: string
    query: string
    results: JsonValue
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: SearchCacheCountAggregateOutputType | null
    _min: SearchCacheMinAggregateOutputType | null
    _max: SearchCacheMaxAggregateOutputType | null
  }

  type GetSearchCacheGroupByPayload<T extends SearchCacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchCacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchCacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchCacheGroupByOutputType[P]>
            : GetScalarType<T[P], SearchCacheGroupByOutputType[P]>
        }
      >
    >


  export type SearchCacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cacheKey?: boolean
    query?: boolean
    results?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["searchCache"]>

  export type SearchCacheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cacheKey?: boolean
    query?: boolean
    results?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["searchCache"]>

  export type SearchCacheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cacheKey?: boolean
    query?: boolean
    results?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["searchCache"]>

  export type SearchCacheSelectScalar = {
    id?: boolean
    cacheKey?: boolean
    query?: boolean
    results?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SearchCacheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cacheKey" | "query" | "results" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["searchCache"]>

  export type $SearchCachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchCache"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cacheKey: string
      query: string
      results: Prisma.JsonValue
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["searchCache"]>
    composites: {}
  }

  type SearchCacheGetPayload<S extends boolean | null | undefined | SearchCacheDefaultArgs> = $Result.GetResult<Prisma.$SearchCachePayload, S>

  type SearchCacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SearchCacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchCacheCountAggregateInputType | true
    }

  export interface SearchCacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchCache'], meta: { name: 'SearchCache' } }
    /**
     * Find zero or one SearchCache that matches the filter.
     * @param {SearchCacheFindUniqueArgs} args - Arguments to find a SearchCache
     * @example
     * // Get one SearchCache
     * const searchCache = await prisma.searchCache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchCacheFindUniqueArgs>(args: SelectSubset<T, SearchCacheFindUniqueArgs<ExtArgs>>): Prisma__SearchCacheClient<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SearchCache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SearchCacheFindUniqueOrThrowArgs} args - Arguments to find a SearchCache
     * @example
     * // Get one SearchCache
     * const searchCache = await prisma.searchCache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchCacheFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchCacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchCacheClient<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchCache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchCacheFindFirstArgs} args - Arguments to find a SearchCache
     * @example
     * // Get one SearchCache
     * const searchCache = await prisma.searchCache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchCacheFindFirstArgs>(args?: SelectSubset<T, SearchCacheFindFirstArgs<ExtArgs>>): Prisma__SearchCacheClient<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchCache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchCacheFindFirstOrThrowArgs} args - Arguments to find a SearchCache
     * @example
     * // Get one SearchCache
     * const searchCache = await prisma.searchCache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchCacheFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchCacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchCacheClient<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SearchCaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchCacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchCaches
     * const searchCaches = await prisma.searchCache.findMany()
     * 
     * // Get first 10 SearchCaches
     * const searchCaches = await prisma.searchCache.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchCacheWithIdOnly = await prisma.searchCache.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchCacheFindManyArgs>(args?: SelectSubset<T, SearchCacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SearchCache.
     * @param {SearchCacheCreateArgs} args - Arguments to create a SearchCache.
     * @example
     * // Create one SearchCache
     * const SearchCache = await prisma.searchCache.create({
     *   data: {
     *     // ... data to create a SearchCache
     *   }
     * })
     * 
     */
    create<T extends SearchCacheCreateArgs>(args: SelectSubset<T, SearchCacheCreateArgs<ExtArgs>>): Prisma__SearchCacheClient<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SearchCaches.
     * @param {SearchCacheCreateManyArgs} args - Arguments to create many SearchCaches.
     * @example
     * // Create many SearchCaches
     * const searchCache = await prisma.searchCache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchCacheCreateManyArgs>(args?: SelectSubset<T, SearchCacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchCaches and returns the data saved in the database.
     * @param {SearchCacheCreateManyAndReturnArgs} args - Arguments to create many SearchCaches.
     * @example
     * // Create many SearchCaches
     * const searchCache = await prisma.searchCache.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchCaches and only return the `id`
     * const searchCacheWithIdOnly = await prisma.searchCache.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchCacheCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchCacheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SearchCache.
     * @param {SearchCacheDeleteArgs} args - Arguments to delete one SearchCache.
     * @example
     * // Delete one SearchCache
     * const SearchCache = await prisma.searchCache.delete({
     *   where: {
     *     // ... filter to delete one SearchCache
     *   }
     * })
     * 
     */
    delete<T extends SearchCacheDeleteArgs>(args: SelectSubset<T, SearchCacheDeleteArgs<ExtArgs>>): Prisma__SearchCacheClient<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SearchCache.
     * @param {SearchCacheUpdateArgs} args - Arguments to update one SearchCache.
     * @example
     * // Update one SearchCache
     * const searchCache = await prisma.searchCache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchCacheUpdateArgs>(args: SelectSubset<T, SearchCacheUpdateArgs<ExtArgs>>): Prisma__SearchCacheClient<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SearchCaches.
     * @param {SearchCacheDeleteManyArgs} args - Arguments to filter SearchCaches to delete.
     * @example
     * // Delete a few SearchCaches
     * const { count } = await prisma.searchCache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchCacheDeleteManyArgs>(args?: SelectSubset<T, SearchCacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchCacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchCaches
     * const searchCache = await prisma.searchCache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchCacheUpdateManyArgs>(args: SelectSubset<T, SearchCacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchCaches and returns the data updated in the database.
     * @param {SearchCacheUpdateManyAndReturnArgs} args - Arguments to update many SearchCaches.
     * @example
     * // Update many SearchCaches
     * const searchCache = await prisma.searchCache.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SearchCaches and only return the `id`
     * const searchCacheWithIdOnly = await prisma.searchCache.updateManyAndReturn({
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
    updateManyAndReturn<T extends SearchCacheUpdateManyAndReturnArgs>(args: SelectSubset<T, SearchCacheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SearchCache.
     * @param {SearchCacheUpsertArgs} args - Arguments to update or create a SearchCache.
     * @example
     * // Update or create a SearchCache
     * const searchCache = await prisma.searchCache.upsert({
     *   create: {
     *     // ... data to create a SearchCache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchCache we want to update
     *   }
     * })
     */
    upsert<T extends SearchCacheUpsertArgs>(args: SelectSubset<T, SearchCacheUpsertArgs<ExtArgs>>): Prisma__SearchCacheClient<$Result.GetResult<Prisma.$SearchCachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SearchCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchCacheCountArgs} args - Arguments to filter SearchCaches to count.
     * @example
     * // Count the number of SearchCaches
     * const count = await prisma.searchCache.count({
     *   where: {
     *     // ... the filter for the SearchCaches we want to count
     *   }
     * })
    **/
    count<T extends SearchCacheCountArgs>(
      args?: Subset<T, SearchCacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchCacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchCacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SearchCacheAggregateArgs>(args: Subset<T, SearchCacheAggregateArgs>): Prisma.PrismaPromise<GetSearchCacheAggregateType<T>>

    /**
     * Group by SearchCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchCacheGroupByArgs} args - Group by arguments.
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
      T extends SearchCacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchCacheGroupByArgs['orderBy'] }
        : { orderBy?: SearchCacheGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SearchCacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchCache model
   */
  readonly fields: SearchCacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchCache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchCacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SearchCache model
   */
  interface SearchCacheFieldRefs {
    readonly id: FieldRef<"SearchCache", 'String'>
    readonly cacheKey: FieldRef<"SearchCache", 'String'>
    readonly query: FieldRef<"SearchCache", 'String'>
    readonly results: FieldRef<"SearchCache", 'Json'>
    readonly expiresAt: FieldRef<"SearchCache", 'DateTime'>
    readonly createdAt: FieldRef<"SearchCache", 'DateTime'>
    readonly updatedAt: FieldRef<"SearchCache", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SearchCache findUnique
   */
  export type SearchCacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * Filter, which SearchCache to fetch.
     */
    where: SearchCacheWhereUniqueInput
  }

  /**
   * SearchCache findUniqueOrThrow
   */
  export type SearchCacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * Filter, which SearchCache to fetch.
     */
    where: SearchCacheWhereUniqueInput
  }

  /**
   * SearchCache findFirst
   */
  export type SearchCacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * Filter, which SearchCache to fetch.
     */
    where?: SearchCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchCaches to fetch.
     */
    orderBy?: SearchCacheOrderByWithRelationInput | SearchCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchCaches.
     */
    cursor?: SearchCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchCaches.
     */
    distinct?: SearchCacheScalarFieldEnum | SearchCacheScalarFieldEnum[]
  }

  /**
   * SearchCache findFirstOrThrow
   */
  export type SearchCacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * Filter, which SearchCache to fetch.
     */
    where?: SearchCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchCaches to fetch.
     */
    orderBy?: SearchCacheOrderByWithRelationInput | SearchCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchCaches.
     */
    cursor?: SearchCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchCaches.
     */
    distinct?: SearchCacheScalarFieldEnum | SearchCacheScalarFieldEnum[]
  }

  /**
   * SearchCache findMany
   */
  export type SearchCacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * Filter, which SearchCaches to fetch.
     */
    where?: SearchCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchCaches to fetch.
     */
    orderBy?: SearchCacheOrderByWithRelationInput | SearchCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchCaches.
     */
    cursor?: SearchCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchCaches.
     */
    distinct?: SearchCacheScalarFieldEnum | SearchCacheScalarFieldEnum[]
  }

  /**
   * SearchCache create
   */
  export type SearchCacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * The data needed to create a SearchCache.
     */
    data: XOR<SearchCacheCreateInput, SearchCacheUncheckedCreateInput>
  }

  /**
   * SearchCache createMany
   */
  export type SearchCacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchCaches.
     */
    data: SearchCacheCreateManyInput | SearchCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchCache createManyAndReturn
   */
  export type SearchCacheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * The data used to create many SearchCaches.
     */
    data: SearchCacheCreateManyInput | SearchCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchCache update
   */
  export type SearchCacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * The data needed to update a SearchCache.
     */
    data: XOR<SearchCacheUpdateInput, SearchCacheUncheckedUpdateInput>
    /**
     * Choose, which SearchCache to update.
     */
    where: SearchCacheWhereUniqueInput
  }

  /**
   * SearchCache updateMany
   */
  export type SearchCacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchCaches.
     */
    data: XOR<SearchCacheUpdateManyMutationInput, SearchCacheUncheckedUpdateManyInput>
    /**
     * Filter which SearchCaches to update
     */
    where?: SearchCacheWhereInput
    /**
     * Limit how many SearchCaches to update.
     */
    limit?: number
  }

  /**
   * SearchCache updateManyAndReturn
   */
  export type SearchCacheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * The data used to update SearchCaches.
     */
    data: XOR<SearchCacheUpdateManyMutationInput, SearchCacheUncheckedUpdateManyInput>
    /**
     * Filter which SearchCaches to update
     */
    where?: SearchCacheWhereInput
    /**
     * Limit how many SearchCaches to update.
     */
    limit?: number
  }

  /**
   * SearchCache upsert
   */
  export type SearchCacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * The filter to search for the SearchCache to update in case it exists.
     */
    where: SearchCacheWhereUniqueInput
    /**
     * In case the SearchCache found by the `where` argument doesn't exist, create a new SearchCache with this data.
     */
    create: XOR<SearchCacheCreateInput, SearchCacheUncheckedCreateInput>
    /**
     * In case the SearchCache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchCacheUpdateInput, SearchCacheUncheckedUpdateInput>
  }

  /**
   * SearchCache delete
   */
  export type SearchCacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
    /**
     * Filter which SearchCache to delete.
     */
    where: SearchCacheWhereUniqueInput
  }

  /**
   * SearchCache deleteMany
   */
  export type SearchCacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchCaches to delete
     */
    where?: SearchCacheWhereInput
    /**
     * Limit how many SearchCaches to delete.
     */
    limit?: number
  }

  /**
   * SearchCache without action
   */
  export type SearchCacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchCache
     */
    select?: SearchCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchCache
     */
    omit?: SearchCacheOmit<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    plan: $Enums.SubscriptionPlan | null
    status: $Enums.SubscriptionStatus | null
    startedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    plan: $Enums.SubscriptionPlan | null
    status: $Enums.SubscriptionStatus | null
    startedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    plan: number
    status: number
    startedAt: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    startedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    startedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    startedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    startedAt: Date
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    startedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    usages?: boolean | Subscription$usagesArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    startedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    startedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    startedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "plan" | "status" | "startedAt" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    usages?: boolean | Subscription$usagesArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      usages: Prisma.$SubscriptionUsagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      plan: $Enums.SubscriptionPlan
      status: $Enums.SubscriptionStatus
      startedAt: Date
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usages<T extends Subscription$usagesArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$usagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly plan: FieldRef<"Subscription", 'SubscriptionPlan'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly startedAt: FieldRef<"Subscription", 'DateTime'>
    readonly expiresAt: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.usages
   */
  export type Subscription$usagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionUsageInclude<ExtArgs> | null
    where?: SubscriptionUsageWhereInput
    orderBy?: SubscriptionUsageOrderByWithRelationInput | SubscriptionUsageOrderByWithRelationInput[]
    cursor?: SubscriptionUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionUsageScalarFieldEnum | SubscriptionUsageScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionUsage
   */

  export type AggregateSubscriptionUsage = {
    _count: SubscriptionUsageCountAggregateOutputType | null
    _avg: SubscriptionUsageAvgAggregateOutputType | null
    _sum: SubscriptionUsageSumAggregateOutputType | null
    _min: SubscriptionUsageMinAggregateOutputType | null
    _max: SubscriptionUsageMaxAggregateOutputType | null
  }

  export type SubscriptionUsageAvgAggregateOutputType = {
    requestCount: number | null
  }

  export type SubscriptionUsageSumAggregateOutputType = {
    requestCount: number | null
  }

  export type SubscriptionUsageMinAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    periodStart: Date | null
    periodEnd: Date | null
    requestCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionUsageMaxAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    periodStart: Date | null
    periodEnd: Date | null
    requestCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionUsageCountAggregateOutputType = {
    id: number
    subscriptionId: number
    periodStart: number
    periodEnd: number
    requestCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionUsageAvgAggregateInputType = {
    requestCount?: true
  }

  export type SubscriptionUsageSumAggregateInputType = {
    requestCount?: true
  }

  export type SubscriptionUsageMinAggregateInputType = {
    id?: true
    subscriptionId?: true
    periodStart?: true
    periodEnd?: true
    requestCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionUsageMaxAggregateInputType = {
    id?: true
    subscriptionId?: true
    periodStart?: true
    periodEnd?: true
    requestCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionUsageCountAggregateInputType = {
    id?: true
    subscriptionId?: true
    periodStart?: true
    periodEnd?: true
    requestCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionUsage to aggregate.
     */
    where?: SubscriptionUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionUsages to fetch.
     */
    orderBy?: SubscriptionUsageOrderByWithRelationInput | SubscriptionUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionUsages
    **/
    _count?: true | SubscriptionUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionUsageMaxAggregateInputType
  }

  export type GetSubscriptionUsageAggregateType<T extends SubscriptionUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionUsage[P]>
      : GetScalarType<T[P], AggregateSubscriptionUsage[P]>
  }




  export type SubscriptionUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionUsageWhereInput
    orderBy?: SubscriptionUsageOrderByWithAggregationInput | SubscriptionUsageOrderByWithAggregationInput[]
    by: SubscriptionUsageScalarFieldEnum[] | SubscriptionUsageScalarFieldEnum
    having?: SubscriptionUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionUsageCountAggregateInputType | true
    _avg?: SubscriptionUsageAvgAggregateInputType
    _sum?: SubscriptionUsageSumAggregateInputType
    _min?: SubscriptionUsageMinAggregateInputType
    _max?: SubscriptionUsageMaxAggregateInputType
  }

  export type SubscriptionUsageGroupByOutputType = {
    id: string
    subscriptionId: string
    periodStart: Date
    periodEnd: Date
    requestCount: number
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionUsageCountAggregateOutputType | null
    _avg: SubscriptionUsageAvgAggregateOutputType | null
    _sum: SubscriptionUsageSumAggregateOutputType | null
    _min: SubscriptionUsageMinAggregateOutputType | null
    _max: SubscriptionUsageMaxAggregateOutputType | null
  }

  type GetSubscriptionUsageGroupByPayload<T extends SubscriptionUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionUsageGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionUsageGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    requestCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionUsage"]>

  export type SubscriptionUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    requestCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionUsage"]>

  export type SubscriptionUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    requestCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionUsage"]>

  export type SubscriptionUsageSelectScalar = {
    id?: boolean
    subscriptionId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    requestCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subscriptionId" | "periodStart" | "periodEnd" | "requestCount" | "createdAt" | "updatedAt", ExtArgs["result"]["subscriptionUsage"]>
  export type SubscriptionUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type SubscriptionUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type SubscriptionUsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }

  export type $SubscriptionUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionUsage"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subscriptionId: string
      periodStart: Date
      periodEnd: Date
      requestCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscriptionUsage"]>
    composites: {}
  }

  type SubscriptionUsageGetPayload<S extends boolean | null | undefined | SubscriptionUsageDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionUsagePayload, S>

  type SubscriptionUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionUsageCountAggregateInputType | true
    }

  export interface SubscriptionUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionUsage'], meta: { name: 'SubscriptionUsage' } }
    /**
     * Find zero or one SubscriptionUsage that matches the filter.
     * @param {SubscriptionUsageFindUniqueArgs} args - Arguments to find a SubscriptionUsage
     * @example
     * // Get one SubscriptionUsage
     * const subscriptionUsage = await prisma.subscriptionUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionUsageFindUniqueArgs>(args: SelectSubset<T, SubscriptionUsageFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionUsageClient<$Result.GetResult<Prisma.$SubscriptionUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionUsageFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionUsage
     * @example
     * // Get one SubscriptionUsage
     * const subscriptionUsage = await prisma.subscriptionUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionUsageClient<$Result.GetResult<Prisma.$SubscriptionUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUsageFindFirstArgs} args - Arguments to find a SubscriptionUsage
     * @example
     * // Get one SubscriptionUsage
     * const subscriptionUsage = await prisma.subscriptionUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionUsageFindFirstArgs>(args?: SelectSubset<T, SubscriptionUsageFindFirstArgs<ExtArgs>>): Prisma__SubscriptionUsageClient<$Result.GetResult<Prisma.$SubscriptionUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUsageFindFirstOrThrowArgs} args - Arguments to find a SubscriptionUsage
     * @example
     * // Get one SubscriptionUsage
     * const subscriptionUsage = await prisma.subscriptionUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionUsageClient<$Result.GetResult<Prisma.$SubscriptionUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionUsages
     * const subscriptionUsages = await prisma.subscriptionUsage.findMany()
     * 
     * // Get first 10 SubscriptionUsages
     * const subscriptionUsages = await prisma.subscriptionUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionUsageWithIdOnly = await prisma.subscriptionUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionUsageFindManyArgs>(args?: SelectSubset<T, SubscriptionUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionUsage.
     * @param {SubscriptionUsageCreateArgs} args - Arguments to create a SubscriptionUsage.
     * @example
     * // Create one SubscriptionUsage
     * const SubscriptionUsage = await prisma.subscriptionUsage.create({
     *   data: {
     *     // ... data to create a SubscriptionUsage
     *   }
     * })
     * 
     */
    create<T extends SubscriptionUsageCreateArgs>(args: SelectSubset<T, SubscriptionUsageCreateArgs<ExtArgs>>): Prisma__SubscriptionUsageClient<$Result.GetResult<Prisma.$SubscriptionUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionUsages.
     * @param {SubscriptionUsageCreateManyArgs} args - Arguments to create many SubscriptionUsages.
     * @example
     * // Create many SubscriptionUsages
     * const subscriptionUsage = await prisma.subscriptionUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionUsageCreateManyArgs>(args?: SelectSubset<T, SubscriptionUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionUsages and returns the data saved in the database.
     * @param {SubscriptionUsageCreateManyAndReturnArgs} args - Arguments to create many SubscriptionUsages.
     * @example
     * // Create many SubscriptionUsages
     * const subscriptionUsage = await prisma.subscriptionUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionUsages and only return the `id`
     * const subscriptionUsageWithIdOnly = await prisma.subscriptionUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubscriptionUsage.
     * @param {SubscriptionUsageDeleteArgs} args - Arguments to delete one SubscriptionUsage.
     * @example
     * // Delete one SubscriptionUsage
     * const SubscriptionUsage = await prisma.subscriptionUsage.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionUsage
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionUsageDeleteArgs>(args: SelectSubset<T, SubscriptionUsageDeleteArgs<ExtArgs>>): Prisma__SubscriptionUsageClient<$Result.GetResult<Prisma.$SubscriptionUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionUsage.
     * @param {SubscriptionUsageUpdateArgs} args - Arguments to update one SubscriptionUsage.
     * @example
     * // Update one SubscriptionUsage
     * const subscriptionUsage = await prisma.subscriptionUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUsageUpdateArgs>(args: SelectSubset<T, SubscriptionUsageUpdateArgs<ExtArgs>>): Prisma__SubscriptionUsageClient<$Result.GetResult<Prisma.$SubscriptionUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionUsages.
     * @param {SubscriptionUsageDeleteManyArgs} args - Arguments to filter SubscriptionUsages to delete.
     * @example
     * // Delete a few SubscriptionUsages
     * const { count } = await prisma.subscriptionUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionUsageDeleteManyArgs>(args?: SelectSubset<T, SubscriptionUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionUsages
     * const subscriptionUsage = await prisma.subscriptionUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUsageUpdateManyArgs>(args: SelectSubset<T, SubscriptionUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionUsages and returns the data updated in the database.
     * @param {SubscriptionUsageUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionUsages.
     * @example
     * // Update many SubscriptionUsages
     * const subscriptionUsage = await prisma.subscriptionUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubscriptionUsages and only return the `id`
     * const subscriptionUsageWithIdOnly = await prisma.subscriptionUsage.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubscriptionUsage.
     * @param {SubscriptionUsageUpsertArgs} args - Arguments to update or create a SubscriptionUsage.
     * @example
     * // Update or create a SubscriptionUsage
     * const subscriptionUsage = await prisma.subscriptionUsage.upsert({
     *   create: {
     *     // ... data to create a SubscriptionUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionUsage we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUsageUpsertArgs>(args: SelectSubset<T, SubscriptionUsageUpsertArgs<ExtArgs>>): Prisma__SubscriptionUsageClient<$Result.GetResult<Prisma.$SubscriptionUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUsageCountArgs} args - Arguments to filter SubscriptionUsages to count.
     * @example
     * // Count the number of SubscriptionUsages
     * const count = await prisma.subscriptionUsage.count({
     *   where: {
     *     // ... the filter for the SubscriptionUsages we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionUsageCountArgs>(
      args?: Subset<T, SubscriptionUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionUsageAggregateArgs>(args: Subset<T, SubscriptionUsageAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionUsageAggregateType<T>>

    /**
     * Group by SubscriptionUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUsageGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionUsageGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionUsageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionUsage model
   */
  readonly fields: SubscriptionUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SubscriptionUsage model
   */
  interface SubscriptionUsageFieldRefs {
    readonly id: FieldRef<"SubscriptionUsage", 'String'>
    readonly subscriptionId: FieldRef<"SubscriptionUsage", 'String'>
    readonly periodStart: FieldRef<"SubscriptionUsage", 'DateTime'>
    readonly periodEnd: FieldRef<"SubscriptionUsage", 'DateTime'>
    readonly requestCount: FieldRef<"SubscriptionUsage", 'Int'>
    readonly createdAt: FieldRef<"SubscriptionUsage", 'DateTime'>
    readonly updatedAt: FieldRef<"SubscriptionUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionUsage findUnique
   */
  export type SubscriptionUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionUsageInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionUsage to fetch.
     */
    where: SubscriptionUsageWhereUniqueInput
  }

  /**
   * SubscriptionUsage findUniqueOrThrow
   */
  export type SubscriptionUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionUsageInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionUsage to fetch.
     */
    where: SubscriptionUsageWhereUniqueInput
  }

  /**
   * SubscriptionUsage findFirst
   */
  export type SubscriptionUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionUsageInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionUsage to fetch.
     */
    where?: SubscriptionUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionUsages to fetch.
     */
    orderBy?: SubscriptionUsageOrderByWithRelationInput | SubscriptionUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionUsages.
     */
    cursor?: SubscriptionUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionUsages.
     */
    distinct?: SubscriptionUsageScalarFieldEnum | SubscriptionUsageScalarFieldEnum[]
  }

  /**
   * SubscriptionUsage findFirstOrThrow
   */
  export type SubscriptionUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionUsageInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionUsage to fetch.
     */
    where?: SubscriptionUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionUsages to fetch.
     */
    orderBy?: SubscriptionUsageOrderByWithRelationInput | SubscriptionUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionUsages.
     */
    cursor?: SubscriptionUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionUsages.
     */
    distinct?: SubscriptionUsageScalarFieldEnum | SubscriptionUsageScalarFieldEnum[]
  }

  /**
   * SubscriptionUsage findMany
   */
  export type SubscriptionUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionUsageInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionUsages to fetch.
     */
    where?: SubscriptionUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionUsages to fetch.
     */
    orderBy?: SubscriptionUsageOrderByWithRelationInput | SubscriptionUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionUsages.
     */
    cursor?: SubscriptionUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionUsages.
     */
    distinct?: SubscriptionUsageScalarFieldEnum | SubscriptionUsageScalarFieldEnum[]
  }

  /**
   * SubscriptionUsage create
   */
  export type SubscriptionUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionUsage.
     */
    data: XOR<SubscriptionUsageCreateInput, SubscriptionUsageUncheckedCreateInput>
  }

  /**
   * SubscriptionUsage createMany
   */
  export type SubscriptionUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionUsages.
     */
    data: SubscriptionUsageCreateManyInput | SubscriptionUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionUsage createManyAndReturn
   */
  export type SubscriptionUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionUsages.
     */
    data: SubscriptionUsageCreateManyInput | SubscriptionUsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionUsage update
   */
  export type SubscriptionUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionUsage.
     */
    data: XOR<SubscriptionUsageUpdateInput, SubscriptionUsageUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionUsage to update.
     */
    where: SubscriptionUsageWhereUniqueInput
  }

  /**
   * SubscriptionUsage updateMany
   */
  export type SubscriptionUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionUsages.
     */
    data: XOR<SubscriptionUsageUpdateManyMutationInput, SubscriptionUsageUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionUsages to update
     */
    where?: SubscriptionUsageWhereInput
    /**
     * Limit how many SubscriptionUsages to update.
     */
    limit?: number
  }

  /**
   * SubscriptionUsage updateManyAndReturn
   */
  export type SubscriptionUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionUsages.
     */
    data: XOR<SubscriptionUsageUpdateManyMutationInput, SubscriptionUsageUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionUsages to update
     */
    where?: SubscriptionUsageWhereInput
    /**
     * Limit how many SubscriptionUsages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionUsageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionUsage upsert
   */
  export type SubscriptionUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionUsage to update in case it exists.
     */
    where: SubscriptionUsageWhereUniqueInput
    /**
     * In case the SubscriptionUsage found by the `where` argument doesn't exist, create a new SubscriptionUsage with this data.
     */
    create: XOR<SubscriptionUsageCreateInput, SubscriptionUsageUncheckedCreateInput>
    /**
     * In case the SubscriptionUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUsageUpdateInput, SubscriptionUsageUncheckedUpdateInput>
  }

  /**
   * SubscriptionUsage delete
   */
  export type SubscriptionUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionUsageInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionUsage to delete.
     */
    where: SubscriptionUsageWhereUniqueInput
  }

  /**
   * SubscriptionUsage deleteMany
   */
  export type SubscriptionUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionUsages to delete
     */
    where?: SubscriptionUsageWhereInput
    /**
     * Limit how many SubscriptionUsages to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionUsage without action
   */
  export type SubscriptionUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionUsage
     */
    select?: SubscriptionUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionUsage
     */
    omit?: SubscriptionUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionUsageInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'UserRole'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    emailVerified: boolean | null
    emailVerifiedAt: Date | null
    isActive: boolean | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    emailVerified: boolean | null
    emailVerifiedAt: Date | null
    isActive: boolean | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    emailVerified: number
    emailVerifiedAt: number
    isActive: number
    roleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    emailVerified?: true
    emailVerifiedAt?: true
    isActive?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    emailVerified?: true
    emailVerifiedAt?: true
    isActive?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    emailVerified?: true
    emailVerifiedAt?: true
    isActive?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    emailVerified: boolean
    emailVerifiedAt: Date | null
    isActive: boolean
    roleId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: boolean
    isActive?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    verificationTokens?: boolean | User$verificationTokensArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    conversations?: boolean | User$conversationsArgs<ExtArgs>
    searchHistory?: boolean | User$searchHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: boolean
    isActive?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: boolean
    isActive?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: boolean
    isActive?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "emailVerified" | "emailVerifiedAt" | "isActive" | "roleId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    verificationTokens?: boolean | User$verificationTokensArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    conversations?: boolean | User$conversationsArgs<ExtArgs>
    searchHistory?: boolean | User$searchHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      verificationTokens: Prisma.$EmailVerificationTokenPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
      searchHistory: Prisma.$SearchHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      emailVerified: boolean
      emailVerifiedAt: Date | null
      isActive: boolean
      roleId: string
      createdAt: Date
      updatedAt: Date
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
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verificationTokens<T extends User$verificationTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$verificationTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations<T extends User$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, User$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    searchHistory<T extends User$searchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$searchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerifiedAt: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly roleId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.verificationTokens
   */
  export type User$verificationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    where?: EmailVerificationTokenWhereInput
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    cursor?: EmailVerificationTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User.conversations
   */
  export type User$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * User.searchHistory
   */
  export type User$searchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    where?: SearchHistoryWhereInput
    orderBy?: SearchHistoryOrderByWithRelationInput | SearchHistoryOrderByWithRelationInput[]
    cursor?: SearchHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SearchHistoryScalarFieldEnum | SearchHistoryScalarFieldEnum[]
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ApiRequestLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    method: 'method',
    path: 'path',
    statusCode: 'statusCode',
    responseTime: 'responseTime',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type ApiRequestLogScalarFieldEnum = (typeof ApiRequestLogScalarFieldEnum)[keyof typeof ApiRequestLogScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    refreshTokenHash: 'refreshTokenHash',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    lastUsedAt: 'lastUsedAt',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const EmailVerificationTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
  };

  export type EmailVerificationTokenScalarFieldEnum = (typeof EmailVerificationTokenScalarFieldEnum)[keyof typeof EmailVerificationTokenScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    role: 'role',
    content: 'content',
    providerModelId: 'providerModelId',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const ProviderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    apiKey: 'apiKey',
    isActive: 'isActive',
    isDefault: 'isDefault',
    apiBaseUrl: 'apiBaseUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProviderScalarFieldEnum = (typeof ProviderScalarFieldEnum)[keyof typeof ProviderScalarFieldEnum]


  export const ProviderModelScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    name: 'name',
    modelId: 'modelId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProviderModelScalarFieldEnum = (typeof ProviderModelScalarFieldEnum)[keyof typeof ProviderModelScalarFieldEnum]


  export const SearchHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    query: 'query',
    createdAt: 'createdAt'
  };

  export type SearchHistoryScalarFieldEnum = (typeof SearchHistoryScalarFieldEnum)[keyof typeof SearchHistoryScalarFieldEnum]


  export const SearchCacheScalarFieldEnum: {
    id: 'id',
    cacheKey: 'cacheKey',
    query: 'query',
    results: 'results',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SearchCacheScalarFieldEnum = (typeof SearchCacheScalarFieldEnum)[keyof typeof SearchCacheScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    plan: 'plan',
    status: 'status',
    startedAt: 'startedAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const SubscriptionUsageScalarFieldEnum: {
    id: 'id',
    subscriptionId: 'subscriptionId',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    requestCount: 'requestCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionUsageScalarFieldEnum = (typeof SubscriptionUsageScalarFieldEnum)[keyof typeof SubscriptionUsageScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    emailVerified: 'emailVerified',
    emailVerifiedAt: 'emailVerifiedAt',
    isActive: 'isActive',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MessageRole'
   */
  export type EnumMessageRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageRole'>
    


  /**
   * Reference to a field of type 'MessageRole[]'
   */
  export type ListEnumMessageRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageRole[]'>
    


  /**
   * Reference to a field of type 'ProviderType'
   */
  export type EnumProviderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProviderType'>
    


  /**
   * Reference to a field of type 'ProviderType[]'
   */
  export type ListEnumProviderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProviderType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'SubscriptionPlan'
   */
  export type EnumSubscriptionPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlan'>
    


  /**
   * Reference to a field of type 'SubscriptionPlan[]'
   */
  export type ListEnumSubscriptionPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlan[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ApiRequestLogWhereInput = {
    AND?: ApiRequestLogWhereInput | ApiRequestLogWhereInput[]
    OR?: ApiRequestLogWhereInput[]
    NOT?: ApiRequestLogWhereInput | ApiRequestLogWhereInput[]
    id?: UuidFilter<"ApiRequestLog"> | string
    userId?: UuidNullableFilter<"ApiRequestLog"> | string | null
    method?: StringFilter<"ApiRequestLog"> | string
    path?: StringFilter<"ApiRequestLog"> | string
    statusCode?: IntFilter<"ApiRequestLog"> | number
    responseTime?: IntFilter<"ApiRequestLog"> | number
    ipAddress?: StringNullableFilter<"ApiRequestLog"> | string | null
    userAgent?: StringNullableFilter<"ApiRequestLog"> | string | null
    createdAt?: DateTimeFilter<"ApiRequestLog"> | Date | string
  }

  export type ApiRequestLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    method?: SortOrder
    path?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ApiRequestLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiRequestLogWhereInput | ApiRequestLogWhereInput[]
    OR?: ApiRequestLogWhereInput[]
    NOT?: ApiRequestLogWhereInput | ApiRequestLogWhereInput[]
    userId?: UuidNullableFilter<"ApiRequestLog"> | string | null
    method?: StringFilter<"ApiRequestLog"> | string
    path?: StringFilter<"ApiRequestLog"> | string
    statusCode?: IntFilter<"ApiRequestLog"> | number
    responseTime?: IntFilter<"ApiRequestLog"> | number
    ipAddress?: StringNullableFilter<"ApiRequestLog"> | string | null
    userAgent?: StringNullableFilter<"ApiRequestLog"> | string | null
    createdAt?: DateTimeFilter<"ApiRequestLog"> | Date | string
  }, "id">

  export type ApiRequestLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    method?: SortOrder
    path?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ApiRequestLogCountOrderByAggregateInput
    _avg?: ApiRequestLogAvgOrderByAggregateInput
    _max?: ApiRequestLogMaxOrderByAggregateInput
    _min?: ApiRequestLogMinOrderByAggregateInput
    _sum?: ApiRequestLogSumOrderByAggregateInput
  }

  export type ApiRequestLogScalarWhereWithAggregatesInput = {
    AND?: ApiRequestLogScalarWhereWithAggregatesInput | ApiRequestLogScalarWhereWithAggregatesInput[]
    OR?: ApiRequestLogScalarWhereWithAggregatesInput[]
    NOT?: ApiRequestLogScalarWhereWithAggregatesInput | ApiRequestLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ApiRequestLog"> | string
    userId?: UuidNullableWithAggregatesFilter<"ApiRequestLog"> | string | null
    method?: StringWithAggregatesFilter<"ApiRequestLog"> | string
    path?: StringWithAggregatesFilter<"ApiRequestLog"> | string
    statusCode?: IntWithAggregatesFilter<"ApiRequestLog"> | number
    responseTime?: IntWithAggregatesFilter<"ApiRequestLog"> | number
    ipAddress?: StringNullableWithAggregatesFilter<"ApiRequestLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ApiRequestLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApiRequestLog"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: UuidFilter<"Session"> | string
    userId?: UuidFilter<"Session"> | string
    refreshTokenHash?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    revokedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    lastUsedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    refreshTokenHash?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: UuidFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    revokedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    lastUsedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "refreshTokenHash">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Session"> | string
    userId?: UuidWithAggregatesFilter<"Session"> | string
    refreshTokenHash?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type EmailVerificationTokenWhereInput = {
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    id?: UuidFilter<"EmailVerificationToken"> | string
    userId?: UuidFilter<"EmailVerificationToken"> | string
    tokenHash?: StringFilter<"EmailVerificationToken"> | string
    expiresAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"EmailVerificationToken"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailVerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmailVerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    userId?: UuidFilter<"EmailVerificationToken"> | string
    expiresAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"EmailVerificationToken"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tokenHash">

  export type EmailVerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EmailVerificationTokenCountOrderByAggregateInput
    _max?: EmailVerificationTokenMaxOrderByAggregateInput
    _min?: EmailVerificationTokenMinOrderByAggregateInput
  }

  export type EmailVerificationTokenScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EmailVerificationToken"> | string
    userId?: UuidWithAggregatesFilter<"EmailVerificationToken"> | string
    tokenHash?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"EmailVerificationToken"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"EmailVerificationToken"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmailVerificationToken"> | Date | string
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: UuidFilter<"Conversation"> | string
    userId?: UuidFilter<"Conversation"> | string
    title?: StringNullableFilter<"Conversation"> | string | null
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    userId?: UuidFilter<"Conversation"> | string
    title?: StringNullableFilter<"Conversation"> | string | null
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Conversation"> | string
    userId?: UuidWithAggregatesFilter<"Conversation"> | string
    title?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: UuidFilter<"Message"> | string
    conversationId?: UuidFilter<"Message"> | string
    role?: EnumMessageRoleFilter<"Message"> | $Enums.MessageRole
    content?: StringFilter<"Message"> | string
    providerModelId?: UuidNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    providerModel?: XOR<ProviderModelNullableScalarRelationFilter, ProviderModelWhereInput> | null
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    providerModelId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    conversation?: ConversationOrderByWithRelationInput
    providerModel?: ProviderModelOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    conversationId?: UuidFilter<"Message"> | string
    role?: EnumMessageRoleFilter<"Message"> | $Enums.MessageRole
    content?: StringFilter<"Message"> | string
    providerModelId?: UuidNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    providerModel?: XOR<ProviderModelNullableScalarRelationFilter, ProviderModelWhereInput> | null
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    providerModelId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Message"> | string
    conversationId?: UuidWithAggregatesFilter<"Message"> | string
    role?: EnumMessageRoleWithAggregatesFilter<"Message"> | $Enums.MessageRole
    content?: StringWithAggregatesFilter<"Message"> | string
    providerModelId?: UuidNullableWithAggregatesFilter<"Message"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type ProviderWhereInput = {
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    id?: UuidFilter<"Provider"> | string
    name?: StringFilter<"Provider"> | string
    type?: EnumProviderTypeFilter<"Provider"> | $Enums.ProviderType
    apiKey?: StringNullableFilter<"Provider"> | string | null
    isActive?: BoolFilter<"Provider"> | boolean
    isDefault?: BoolFilter<"Provider"> | boolean
    apiBaseUrl?: StringNullableFilter<"Provider"> | string | null
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    models?: ProviderModelListRelationFilter
  }

  export type ProviderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    apiBaseUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    models?: ProviderModelOrderByRelationAggregateInput
  }

  export type ProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    name?: StringFilter<"Provider"> | string
    type?: EnumProviderTypeFilter<"Provider"> | $Enums.ProviderType
    apiKey?: StringNullableFilter<"Provider"> | string | null
    isActive?: BoolFilter<"Provider"> | boolean
    isDefault?: BoolFilter<"Provider"> | boolean
    apiBaseUrl?: StringNullableFilter<"Provider"> | string | null
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    models?: ProviderModelListRelationFilter
  }, "id">

  export type ProviderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    apiBaseUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProviderCountOrderByAggregateInput
    _max?: ProviderMaxOrderByAggregateInput
    _min?: ProviderMinOrderByAggregateInput
  }

  export type ProviderScalarWhereWithAggregatesInput = {
    AND?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    OR?: ProviderScalarWhereWithAggregatesInput[]
    NOT?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Provider"> | string
    name?: StringWithAggregatesFilter<"Provider"> | string
    type?: EnumProviderTypeWithAggregatesFilter<"Provider"> | $Enums.ProviderType
    apiKey?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    isActive?: BoolWithAggregatesFilter<"Provider"> | boolean
    isDefault?: BoolWithAggregatesFilter<"Provider"> | boolean
    apiBaseUrl?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
  }

  export type ProviderModelWhereInput = {
    AND?: ProviderModelWhereInput | ProviderModelWhereInput[]
    OR?: ProviderModelWhereInput[]
    NOT?: ProviderModelWhereInput | ProviderModelWhereInput[]
    id?: UuidFilter<"ProviderModel"> | string
    providerId?: UuidFilter<"ProviderModel"> | string
    name?: StringFilter<"ProviderModel"> | string
    modelId?: StringFilter<"ProviderModel"> | string
    isActive?: BoolFilter<"ProviderModel"> | boolean
    createdAt?: DateTimeFilter<"ProviderModel"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderModel"> | Date | string
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    messages?: MessageListRelationFilter
  }

  export type ProviderModelOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    modelId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: ProviderOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ProviderModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerId_modelId?: ProviderModelProviderIdModelIdCompoundUniqueInput
    AND?: ProviderModelWhereInput | ProviderModelWhereInput[]
    OR?: ProviderModelWhereInput[]
    NOT?: ProviderModelWhereInput | ProviderModelWhereInput[]
    providerId?: UuidFilter<"ProviderModel"> | string
    name?: StringFilter<"ProviderModel"> | string
    modelId?: StringFilter<"ProviderModel"> | string
    isActive?: BoolFilter<"ProviderModel"> | boolean
    createdAt?: DateTimeFilter<"ProviderModel"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderModel"> | Date | string
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    messages?: MessageListRelationFilter
  }, "id" | "providerId_modelId">

  export type ProviderModelOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    modelId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProviderModelCountOrderByAggregateInput
    _max?: ProviderModelMaxOrderByAggregateInput
    _min?: ProviderModelMinOrderByAggregateInput
  }

  export type ProviderModelScalarWhereWithAggregatesInput = {
    AND?: ProviderModelScalarWhereWithAggregatesInput | ProviderModelScalarWhereWithAggregatesInput[]
    OR?: ProviderModelScalarWhereWithAggregatesInput[]
    NOT?: ProviderModelScalarWhereWithAggregatesInput | ProviderModelScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProviderModel"> | string
    providerId?: UuidWithAggregatesFilter<"ProviderModel"> | string
    name?: StringWithAggregatesFilter<"ProviderModel"> | string
    modelId?: StringWithAggregatesFilter<"ProviderModel"> | string
    isActive?: BoolWithAggregatesFilter<"ProviderModel"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProviderModel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProviderModel"> | Date | string
  }

  export type SearchHistoryWhereInput = {
    AND?: SearchHistoryWhereInput | SearchHistoryWhereInput[]
    OR?: SearchHistoryWhereInput[]
    NOT?: SearchHistoryWhereInput | SearchHistoryWhereInput[]
    id?: UuidFilter<"SearchHistory"> | string
    userId?: UuidFilter<"SearchHistory"> | string
    query?: StringFilter<"SearchHistory"> | string
    createdAt?: DateTimeFilter<"SearchHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SearchHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SearchHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SearchHistoryWhereInput | SearchHistoryWhereInput[]
    OR?: SearchHistoryWhereInput[]
    NOT?: SearchHistoryWhereInput | SearchHistoryWhereInput[]
    userId?: UuidFilter<"SearchHistory"> | string
    query?: StringFilter<"SearchHistory"> | string
    createdAt?: DateTimeFilter<"SearchHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SearchHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    createdAt?: SortOrder
    _count?: SearchHistoryCountOrderByAggregateInput
    _max?: SearchHistoryMaxOrderByAggregateInput
    _min?: SearchHistoryMinOrderByAggregateInput
  }

  export type SearchHistoryScalarWhereWithAggregatesInput = {
    AND?: SearchHistoryScalarWhereWithAggregatesInput | SearchHistoryScalarWhereWithAggregatesInput[]
    OR?: SearchHistoryScalarWhereWithAggregatesInput[]
    NOT?: SearchHistoryScalarWhereWithAggregatesInput | SearchHistoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SearchHistory"> | string
    userId?: UuidWithAggregatesFilter<"SearchHistory"> | string
    query?: StringWithAggregatesFilter<"SearchHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SearchHistory"> | Date | string
  }

  export type SearchCacheWhereInput = {
    AND?: SearchCacheWhereInput | SearchCacheWhereInput[]
    OR?: SearchCacheWhereInput[]
    NOT?: SearchCacheWhereInput | SearchCacheWhereInput[]
    id?: UuidFilter<"SearchCache"> | string
    cacheKey?: StringFilter<"SearchCache"> | string
    query?: StringFilter<"SearchCache"> | string
    results?: JsonFilter<"SearchCache">
    expiresAt?: DateTimeFilter<"SearchCache"> | Date | string
    createdAt?: DateTimeFilter<"SearchCache"> | Date | string
    updatedAt?: DateTimeFilter<"SearchCache"> | Date | string
  }

  export type SearchCacheOrderByWithRelationInput = {
    id?: SortOrder
    cacheKey?: SortOrder
    query?: SortOrder
    results?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchCacheWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cacheKey?: string
    query?: string
    AND?: SearchCacheWhereInput | SearchCacheWhereInput[]
    OR?: SearchCacheWhereInput[]
    NOT?: SearchCacheWhereInput | SearchCacheWhereInput[]
    results?: JsonFilter<"SearchCache">
    expiresAt?: DateTimeFilter<"SearchCache"> | Date | string
    createdAt?: DateTimeFilter<"SearchCache"> | Date | string
    updatedAt?: DateTimeFilter<"SearchCache"> | Date | string
  }, "id" | "cacheKey" | "query">

  export type SearchCacheOrderByWithAggregationInput = {
    id?: SortOrder
    cacheKey?: SortOrder
    query?: SortOrder
    results?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SearchCacheCountOrderByAggregateInput
    _max?: SearchCacheMaxOrderByAggregateInput
    _min?: SearchCacheMinOrderByAggregateInput
  }

  export type SearchCacheScalarWhereWithAggregatesInput = {
    AND?: SearchCacheScalarWhereWithAggregatesInput | SearchCacheScalarWhereWithAggregatesInput[]
    OR?: SearchCacheScalarWhereWithAggregatesInput[]
    NOT?: SearchCacheScalarWhereWithAggregatesInput | SearchCacheScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SearchCache"> | string
    cacheKey?: StringWithAggregatesFilter<"SearchCache"> | string
    query?: StringWithAggregatesFilter<"SearchCache"> | string
    results?: JsonWithAggregatesFilter<"SearchCache">
    expiresAt?: DateTimeWithAggregatesFilter<"SearchCache"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"SearchCache"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SearchCache"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: UuidFilter<"Subscription"> | string
    userId?: UuidFilter<"Subscription"> | string
    plan?: EnumSubscriptionPlanFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    startedAt?: DateTimeFilter<"Subscription"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    usages?: SubscriptionUsageListRelationFilter
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    usages?: SubscriptionUsageOrderByRelationAggregateInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    userId?: UuidFilter<"Subscription"> | string
    plan?: EnumSubscriptionPlanFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    startedAt?: DateTimeFilter<"Subscription"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    usages?: SubscriptionUsageListRelationFilter
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Subscription"> | string
    userId?: UuidWithAggregatesFilter<"Subscription"> | string
    plan?: EnumSubscriptionPlanWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    startedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type SubscriptionUsageWhereInput = {
    AND?: SubscriptionUsageWhereInput | SubscriptionUsageWhereInput[]
    OR?: SubscriptionUsageWhereInput[]
    NOT?: SubscriptionUsageWhereInput | SubscriptionUsageWhereInput[]
    id?: UuidFilter<"SubscriptionUsage"> | string
    subscriptionId?: UuidFilter<"SubscriptionUsage"> | string
    periodStart?: DateTimeFilter<"SubscriptionUsage"> | Date | string
    periodEnd?: DateTimeFilter<"SubscriptionUsage"> | Date | string
    requestCount?: IntFilter<"SubscriptionUsage"> | number
    createdAt?: DateTimeFilter<"SubscriptionUsage"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionUsage"> | Date | string
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }

  export type SubscriptionUsageOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    requestCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type SubscriptionUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subscriptionId_periodStart?: SubscriptionUsageSubscriptionIdPeriodStartCompoundUniqueInput
    AND?: SubscriptionUsageWhereInput | SubscriptionUsageWhereInput[]
    OR?: SubscriptionUsageWhereInput[]
    NOT?: SubscriptionUsageWhereInput | SubscriptionUsageWhereInput[]
    subscriptionId?: UuidFilter<"SubscriptionUsage"> | string
    periodStart?: DateTimeFilter<"SubscriptionUsage"> | Date | string
    periodEnd?: DateTimeFilter<"SubscriptionUsage"> | Date | string
    requestCount?: IntFilter<"SubscriptionUsage"> | number
    createdAt?: DateTimeFilter<"SubscriptionUsage"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionUsage"> | Date | string
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }, "id" | "subscriptionId_periodStart">

  export type SubscriptionUsageOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    requestCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionUsageCountOrderByAggregateInput
    _avg?: SubscriptionUsageAvgOrderByAggregateInput
    _max?: SubscriptionUsageMaxOrderByAggregateInput
    _min?: SubscriptionUsageMinOrderByAggregateInput
    _sum?: SubscriptionUsageSumOrderByAggregateInput
  }

  export type SubscriptionUsageScalarWhereWithAggregatesInput = {
    AND?: SubscriptionUsageScalarWhereWithAggregatesInput | SubscriptionUsageScalarWhereWithAggregatesInput[]
    OR?: SubscriptionUsageScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionUsageScalarWhereWithAggregatesInput | SubscriptionUsageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SubscriptionUsage"> | string
    subscriptionId?: UuidWithAggregatesFilter<"SubscriptionUsage"> | string
    periodStart?: DateTimeWithAggregatesFilter<"SubscriptionUsage"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"SubscriptionUsage"> | Date | string
    requestCount?: IntWithAggregatesFilter<"SubscriptionUsage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionUsage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubscriptionUsage"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: UuidFilter<"Role"> | string
    name?: EnumUserRoleFilter<"Role"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: $Enums.UserRole
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Role"> | string
    name?: EnumUserRoleWithAggregatesFilter<"Role"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    emailVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    roleId?: UuidFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    sessions?: SessionListRelationFilter
    verificationTokens?: EmailVerificationTokenListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    conversations?: ConversationListRelationFilter
    searchHistory?: SearchHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrder
    emailVerifiedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
    verificationTokens?: EmailVerificationTokenOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    conversations?: ConversationOrderByRelationAggregateInput
    searchHistory?: SearchHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    emailVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    roleId?: UuidFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    sessions?: SessionListRelationFilter
    verificationTokens?: EmailVerificationTokenListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    conversations?: ConversationListRelationFilter
    searchHistory?: SearchHistoryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrder
    emailVerifiedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    roleId?: UuidWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ApiRequestLogCreateInput = {
    id?: string
    userId?: string | null
    method: string
    path: string
    statusCode: number
    responseTime: number
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ApiRequestLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    method: string
    path: string
    statusCode: number
    responseTime: number
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ApiRequestLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiRequestLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiRequestLogCreateManyInput = {
    id?: string
    userId?: string | null
    method: string
    path: string
    statusCode: number
    responseTime: number
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ApiRequestLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiRequestLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    refreshTokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    refreshTokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    refreshTokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVerificationTokensInput
  }

  export type EmailVerificationTokenUncheckedCreateInput = {
    id?: string
    userId: string
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailVerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVerificationTokensNestedInput
  }

  export type EmailVerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenCreateManyInput = {
    id?: string
    userId: string
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailVerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateInput = {
    id?: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: string
    userId: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: string
    userId: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    role: $Enums.MessageRole
    content: string
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    providerModel?: ProviderModelCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    conversationId: string
    role: $Enums.MessageRole
    content: string
    providerModelId?: string | null
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    providerModel?: ProviderModelUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    providerModelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    conversationId: string
    role: $Enums.MessageRole
    content: string
    providerModelId?: string | null
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    providerModelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderCreateInput = {
    id?: string
    name: string
    type: $Enums.ProviderType
    apiKey?: string | null
    isActive?: boolean
    isDefault?: boolean
    apiBaseUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ProviderModelCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.ProviderType
    apiKey?: string | null
    isActive?: boolean
    isDefault?: boolean
    apiBaseUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ProviderModelUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    apiBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ProviderModelUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    apiBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ProviderModelUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ProviderCreateManyInput = {
    id?: string
    name: string
    type: $Enums.ProviderType
    apiKey?: string | null
    isActive?: boolean
    isDefault?: boolean
    apiBaseUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    apiBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    apiBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderModelCreateInput = {
    id?: string
    name: string
    modelId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutModelsInput
    messages?: MessageCreateNestedManyWithoutProviderModelInput
  }

  export type ProviderModelUncheckedCreateInput = {
    id?: string
    providerId: string
    name: string
    modelId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutProviderModelInput
  }

  export type ProviderModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutModelsNestedInput
    messages?: MessageUpdateManyWithoutProviderModelNestedInput
  }

  export type ProviderModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutProviderModelNestedInput
  }

  export type ProviderModelCreateManyInput = {
    id?: string
    providerId: string
    name: string
    modelId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryCreateInput = {
    id?: string
    query: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSearchHistoryInput
  }

  export type SearchHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    query: string
    createdAt?: Date | string
  }

  export type SearchHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSearchHistoryNestedInput
  }

  export type SearchHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryCreateManyInput = {
    id?: string
    userId: string
    query: string
    createdAt?: Date | string
  }

  export type SearchHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchCacheCreateInput = {
    id?: string
    cacheKey: string
    query: string
    results: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchCacheUncheckedCreateInput = {
    id?: string
    cacheKey: string
    query: string
    results: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchCacheUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cacheKey?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    results?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchCacheUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cacheKey?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    results?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchCacheCreateManyInput = {
    id?: string
    cacheKey: string
    query: string
    results: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchCacheUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cacheKey?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    results?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchCacheUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cacheKey?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    results?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    startedAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
    usages?: SubscriptionUsageCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    startedAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usages?: SubscriptionUsageUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
    usages?: SubscriptionUsageUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usages?: SubscriptionUsageUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    startedAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUsageCreateInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    requestCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription: SubscriptionCreateNestedOneWithoutUsagesInput
  }

  export type SubscriptionUsageUncheckedCreateInput = {
    id?: string
    subscriptionId: string
    periodStart: Date | string
    periodEnd: Date | string
    requestCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    requestCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneRequiredWithoutUsagesNestedInput
  }

  export type SubscriptionUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    requestCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUsageCreateManyInput = {
    id?: string
    subscriptionId: string
    periodStart: Date | string
    periodEnd: Date | string
    requestCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    requestCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    requestCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    verificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    verificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    verificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    verificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApiRequestLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiRequestLogAvgOrderByAggregateInput = {
    statusCode?: SortOrder
    responseTime?: SortOrder
  }

  export type ApiRequestLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiRequestLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    statusCode?: SortOrder
    responseTime?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiRequestLogSumOrderByAggregateInput = {
    statusCode?: SortOrder
    responseTime?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    lastUsedAt?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    lastUsedAt?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    lastUsedAt?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EmailVerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMessageRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleFilter<$PrismaModel> | $Enums.MessageRole
  }

  export type ConversationScalarRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type ProviderModelNullableScalarRelationFilter = {
    is?: ProviderModelWhereInput | null
    isNot?: ProviderModelWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    providerModelId?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    providerModelId?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    providerModelId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMessageRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleWithAggregatesFilter<$PrismaModel> | $Enums.MessageRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageRoleFilter<$PrismaModel>
    _max?: NestedEnumMessageRoleFilter<$PrismaModel>
  }

  export type EnumProviderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderType | EnumProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderType[] | ListEnumProviderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderType[] | ListEnumProviderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderTypeFilter<$PrismaModel> | $Enums.ProviderType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProviderModelListRelationFilter = {
    every?: ProviderModelWhereInput
    some?: ProviderModelWhereInput
    none?: ProviderModelWhereInput
  }

  export type ProviderModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    apiBaseUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    apiBaseUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    apiKey?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    apiBaseUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumProviderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderType | EnumProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderType[] | ListEnumProviderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderType[] | ListEnumProviderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProviderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderTypeFilter<$PrismaModel>
    _max?: NestedEnumProviderTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProviderScalarRelationFilter = {
    is?: ProviderWhereInput
    isNot?: ProviderWhereInput
  }

  export type ProviderModelProviderIdModelIdCompoundUniqueInput = {
    providerId: string
    modelId: string
  }

  export type ProviderModelCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    modelId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderModelMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    modelId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderModelMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    modelId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    createdAt?: SortOrder
  }

  export type SearchHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    createdAt?: SortOrder
  }

  export type SearchHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SearchCacheCountOrderByAggregateInput = {
    id?: SortOrder
    cacheKey?: SortOrder
    query?: SortOrder
    results?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchCacheMaxOrderByAggregateInput = {
    id?: SortOrder
    cacheKey?: SortOrder
    query?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchCacheMinOrderByAggregateInput = {
    id?: SortOrder
    cacheKey?: SortOrder
    query?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumSubscriptionPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanFilter<$PrismaModel> | $Enums.SubscriptionPlan
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type SubscriptionUsageListRelationFilter = {
    every?: SubscriptionUsageWhereInput
    some?: SubscriptionUsageWhereInput
    none?: SubscriptionUsageWhereInput
  }

  export type SubscriptionUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubscriptionPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type SubscriptionScalarRelationFilter = {
    is?: SubscriptionWhereInput
    isNot?: SubscriptionWhereInput
  }

  export type SubscriptionUsageSubscriptionIdPeriodStartCompoundUniqueInput = {
    subscriptionId: string
    periodStart: Date | string
  }

  export type SubscriptionUsageCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    requestCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionUsageAvgOrderByAggregateInput = {
    requestCount?: SortOrder
  }

  export type SubscriptionUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    requestCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionUsageMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    requestCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionUsageSumOrderByAggregateInput = {
    requestCount?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type EmailVerificationTokenListRelationFilter = {
    every?: EmailVerificationTokenWhereInput
    some?: EmailVerificationTokenWhereInput
    none?: EmailVerificationTokenWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type SearchHistoryListRelationFilter = {
    every?: SearchHistoryWhereInput
    some?: SearchHistoryWhereInput
    none?: SearchHistoryWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailVerificationTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SearchHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrder
    emailVerifiedAt?: SortOrder
    isActive?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrder
    emailVerifiedAt?: SortOrder
    isActive?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    emailVerified?: SortOrder
    emailVerifiedAt?: SortOrder
    isActive?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutVerificationTokensInput = {
    create?: XOR<UserCreateWithoutVerificationTokensInput, UserUncheckedCreateWithoutVerificationTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVerificationTokensNestedInput = {
    create?: XOR<UserCreateWithoutVerificationTokensInput, UserUncheckedCreateWithoutVerificationTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationTokensInput
    upsert?: UserUpsertWithoutVerificationTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerificationTokensInput, UserUpdateWithoutVerificationTokensInput>, UserUncheckedUpdateWithoutVerificationTokensInput>
  }

  export type UserCreateNestedOneWithoutConversationsInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput
    upsert?: UserUpsertWithoutConversationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConversationsInput, UserUpdateWithoutConversationsInput>, UserUncheckedUpdateWithoutConversationsInput>
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type ProviderModelCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ProviderModelCreateWithoutMessagesInput, ProviderModelUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ProviderModelCreateOrConnectWithoutMessagesInput
    connect?: ProviderModelWhereUniqueInput
  }

  export type EnumMessageRoleFieldUpdateOperationsInput = {
    set?: $Enums.MessageRole
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ProviderModelUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<ProviderModelCreateWithoutMessagesInput, ProviderModelUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ProviderModelCreateOrConnectWithoutMessagesInput
    upsert?: ProviderModelUpsertWithoutMessagesInput
    disconnect?: ProviderModelWhereInput | boolean
    delete?: ProviderModelWhereInput | boolean
    connect?: ProviderModelWhereUniqueInput
    update?: XOR<XOR<ProviderModelUpdateToOneWithWhereWithoutMessagesInput, ProviderModelUpdateWithoutMessagesInput>, ProviderModelUncheckedUpdateWithoutMessagesInput>
  }

  export type ProviderModelCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProviderModelCreateWithoutProviderInput, ProviderModelUncheckedCreateWithoutProviderInput> | ProviderModelCreateWithoutProviderInput[] | ProviderModelUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderModelCreateOrConnectWithoutProviderInput | ProviderModelCreateOrConnectWithoutProviderInput[]
    createMany?: ProviderModelCreateManyProviderInputEnvelope
    connect?: ProviderModelWhereUniqueInput | ProviderModelWhereUniqueInput[]
  }

  export type ProviderModelUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProviderModelCreateWithoutProviderInput, ProviderModelUncheckedCreateWithoutProviderInput> | ProviderModelCreateWithoutProviderInput[] | ProviderModelUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderModelCreateOrConnectWithoutProviderInput | ProviderModelCreateOrConnectWithoutProviderInput[]
    createMany?: ProviderModelCreateManyProviderInputEnvelope
    connect?: ProviderModelWhereUniqueInput | ProviderModelWhereUniqueInput[]
  }

  export type EnumProviderTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProviderType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProviderModelUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProviderModelCreateWithoutProviderInput, ProviderModelUncheckedCreateWithoutProviderInput> | ProviderModelCreateWithoutProviderInput[] | ProviderModelUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderModelCreateOrConnectWithoutProviderInput | ProviderModelCreateOrConnectWithoutProviderInput[]
    upsert?: ProviderModelUpsertWithWhereUniqueWithoutProviderInput | ProviderModelUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProviderModelCreateManyProviderInputEnvelope
    set?: ProviderModelWhereUniqueInput | ProviderModelWhereUniqueInput[]
    disconnect?: ProviderModelWhereUniqueInput | ProviderModelWhereUniqueInput[]
    delete?: ProviderModelWhereUniqueInput | ProviderModelWhereUniqueInput[]
    connect?: ProviderModelWhereUniqueInput | ProviderModelWhereUniqueInput[]
    update?: ProviderModelUpdateWithWhereUniqueWithoutProviderInput | ProviderModelUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProviderModelUpdateManyWithWhereWithoutProviderInput | ProviderModelUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProviderModelScalarWhereInput | ProviderModelScalarWhereInput[]
  }

  export type ProviderModelUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProviderModelCreateWithoutProviderInput, ProviderModelUncheckedCreateWithoutProviderInput> | ProviderModelCreateWithoutProviderInput[] | ProviderModelUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderModelCreateOrConnectWithoutProviderInput | ProviderModelCreateOrConnectWithoutProviderInput[]
    upsert?: ProviderModelUpsertWithWhereUniqueWithoutProviderInput | ProviderModelUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProviderModelCreateManyProviderInputEnvelope
    set?: ProviderModelWhereUniqueInput | ProviderModelWhereUniqueInput[]
    disconnect?: ProviderModelWhereUniqueInput | ProviderModelWhereUniqueInput[]
    delete?: ProviderModelWhereUniqueInput | ProviderModelWhereUniqueInput[]
    connect?: ProviderModelWhereUniqueInput | ProviderModelWhereUniqueInput[]
    update?: ProviderModelUpdateWithWhereUniqueWithoutProviderInput | ProviderModelUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProviderModelUpdateManyWithWhereWithoutProviderInput | ProviderModelUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProviderModelScalarWhereInput | ProviderModelScalarWhereInput[]
  }

  export type ProviderCreateNestedOneWithoutModelsInput = {
    create?: XOR<ProviderCreateWithoutModelsInput, ProviderUncheckedCreateWithoutModelsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutModelsInput
    connect?: ProviderWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutProviderModelInput = {
    create?: XOR<MessageCreateWithoutProviderModelInput, MessageUncheckedCreateWithoutProviderModelInput> | MessageCreateWithoutProviderModelInput[] | MessageUncheckedCreateWithoutProviderModelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutProviderModelInput | MessageCreateOrConnectWithoutProviderModelInput[]
    createMany?: MessageCreateManyProviderModelInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutProviderModelInput = {
    create?: XOR<MessageCreateWithoutProviderModelInput, MessageUncheckedCreateWithoutProviderModelInput> | MessageCreateWithoutProviderModelInput[] | MessageUncheckedCreateWithoutProviderModelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutProviderModelInput | MessageCreateOrConnectWithoutProviderModelInput[]
    createMany?: MessageCreateManyProviderModelInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ProviderUpdateOneRequiredWithoutModelsNestedInput = {
    create?: XOR<ProviderCreateWithoutModelsInput, ProviderUncheckedCreateWithoutModelsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutModelsInput
    upsert?: ProviderUpsertWithoutModelsInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutModelsInput, ProviderUpdateWithoutModelsInput>, ProviderUncheckedUpdateWithoutModelsInput>
  }

  export type MessageUpdateManyWithoutProviderModelNestedInput = {
    create?: XOR<MessageCreateWithoutProviderModelInput, MessageUncheckedCreateWithoutProviderModelInput> | MessageCreateWithoutProviderModelInput[] | MessageUncheckedCreateWithoutProviderModelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutProviderModelInput | MessageCreateOrConnectWithoutProviderModelInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutProviderModelInput | MessageUpsertWithWhereUniqueWithoutProviderModelInput[]
    createMany?: MessageCreateManyProviderModelInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutProviderModelInput | MessageUpdateWithWhereUniqueWithoutProviderModelInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutProviderModelInput | MessageUpdateManyWithWhereWithoutProviderModelInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutProviderModelNestedInput = {
    create?: XOR<MessageCreateWithoutProviderModelInput, MessageUncheckedCreateWithoutProviderModelInput> | MessageCreateWithoutProviderModelInput[] | MessageUncheckedCreateWithoutProviderModelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutProviderModelInput | MessageCreateOrConnectWithoutProviderModelInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutProviderModelInput | MessageUpsertWithWhereUniqueWithoutProviderModelInput[]
    createMany?: MessageCreateManyProviderModelInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutProviderModelInput | MessageUpdateWithWhereUniqueWithoutProviderModelInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutProviderModelInput | MessageUpdateManyWithWhereWithoutProviderModelInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSearchHistoryInput = {
    create?: XOR<UserCreateWithoutSearchHistoryInput, UserUncheckedCreateWithoutSearchHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutSearchHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSearchHistoryNestedInput = {
    create?: XOR<UserCreateWithoutSearchHistoryInput, UserUncheckedCreateWithoutSearchHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutSearchHistoryInput
    upsert?: UserUpsertWithoutSearchHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSearchHistoryInput, UserUpdateWithoutSearchHistoryInput>, UserUncheckedUpdateWithoutSearchHistoryInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type SubscriptionUsageCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<SubscriptionUsageCreateWithoutSubscriptionInput, SubscriptionUsageUncheckedCreateWithoutSubscriptionInput> | SubscriptionUsageCreateWithoutSubscriptionInput[] | SubscriptionUsageUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionUsageCreateOrConnectWithoutSubscriptionInput | SubscriptionUsageCreateOrConnectWithoutSubscriptionInput[]
    createMany?: SubscriptionUsageCreateManySubscriptionInputEnvelope
    connect?: SubscriptionUsageWhereUniqueInput | SubscriptionUsageWhereUniqueInput[]
  }

  export type SubscriptionUsageUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<SubscriptionUsageCreateWithoutSubscriptionInput, SubscriptionUsageUncheckedCreateWithoutSubscriptionInput> | SubscriptionUsageCreateWithoutSubscriptionInput[] | SubscriptionUsageUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionUsageCreateOrConnectWithoutSubscriptionInput | SubscriptionUsageCreateOrConnectWithoutSubscriptionInput[]
    createMany?: SubscriptionUsageCreateManySubscriptionInputEnvelope
    connect?: SubscriptionUsageWhereUniqueInput | SubscriptionUsageWhereUniqueInput[]
  }

  export type EnumSubscriptionPlanFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionPlan
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type SubscriptionUsageUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<SubscriptionUsageCreateWithoutSubscriptionInput, SubscriptionUsageUncheckedCreateWithoutSubscriptionInput> | SubscriptionUsageCreateWithoutSubscriptionInput[] | SubscriptionUsageUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionUsageCreateOrConnectWithoutSubscriptionInput | SubscriptionUsageCreateOrConnectWithoutSubscriptionInput[]
    upsert?: SubscriptionUsageUpsertWithWhereUniqueWithoutSubscriptionInput | SubscriptionUsageUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: SubscriptionUsageCreateManySubscriptionInputEnvelope
    set?: SubscriptionUsageWhereUniqueInput | SubscriptionUsageWhereUniqueInput[]
    disconnect?: SubscriptionUsageWhereUniqueInput | SubscriptionUsageWhereUniqueInput[]
    delete?: SubscriptionUsageWhereUniqueInput | SubscriptionUsageWhereUniqueInput[]
    connect?: SubscriptionUsageWhereUniqueInput | SubscriptionUsageWhereUniqueInput[]
    update?: SubscriptionUsageUpdateWithWhereUniqueWithoutSubscriptionInput | SubscriptionUsageUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: SubscriptionUsageUpdateManyWithWhereWithoutSubscriptionInput | SubscriptionUsageUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: SubscriptionUsageScalarWhereInput | SubscriptionUsageScalarWhereInput[]
  }

  export type SubscriptionUsageUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<SubscriptionUsageCreateWithoutSubscriptionInput, SubscriptionUsageUncheckedCreateWithoutSubscriptionInput> | SubscriptionUsageCreateWithoutSubscriptionInput[] | SubscriptionUsageUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: SubscriptionUsageCreateOrConnectWithoutSubscriptionInput | SubscriptionUsageCreateOrConnectWithoutSubscriptionInput[]
    upsert?: SubscriptionUsageUpsertWithWhereUniqueWithoutSubscriptionInput | SubscriptionUsageUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: SubscriptionUsageCreateManySubscriptionInputEnvelope
    set?: SubscriptionUsageWhereUniqueInput | SubscriptionUsageWhereUniqueInput[]
    disconnect?: SubscriptionUsageWhereUniqueInput | SubscriptionUsageWhereUniqueInput[]
    delete?: SubscriptionUsageWhereUniqueInput | SubscriptionUsageWhereUniqueInput[]
    connect?: SubscriptionUsageWhereUniqueInput | SubscriptionUsageWhereUniqueInput[]
    update?: SubscriptionUsageUpdateWithWhereUniqueWithoutSubscriptionInput | SubscriptionUsageUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: SubscriptionUsageUpdateManyWithWhereWithoutSubscriptionInput | SubscriptionUsageUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: SubscriptionUsageScalarWhereInput | SubscriptionUsageScalarWhereInput[]
  }

  export type SubscriptionCreateNestedOneWithoutUsagesInput = {
    create?: XOR<SubscriptionCreateWithoutUsagesInput, SubscriptionUncheckedCreateWithoutUsagesInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUsagesInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type SubscriptionUpdateOneRequiredWithoutUsagesNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUsagesInput, SubscriptionUncheckedCreateWithoutUsagesInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUsagesInput
    upsert?: SubscriptionUpsertWithoutUsagesInput
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUsagesInput, SubscriptionUpdateWithoutUsagesInput>, SubscriptionUncheckedUpdateWithoutUsagesInput>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EmailVerificationTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type SearchHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<SearchHistoryCreateWithoutUserInput, SearchHistoryUncheckedCreateWithoutUserInput> | SearchHistoryCreateWithoutUserInput[] | SearchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchHistoryCreateOrConnectWithoutUserInput | SearchHistoryCreateOrConnectWithoutUserInput[]
    createMany?: SearchHistoryCreateManyUserInputEnvelope
    connect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type SearchHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SearchHistoryCreateWithoutUserInput, SearchHistoryUncheckedCreateWithoutUserInput> | SearchHistoryCreateWithoutUserInput[] | SearchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchHistoryCreateOrConnectWithoutUserInput | SearchHistoryCreateOrConnectWithoutUserInput[]
    createMany?: SearchHistoryCreateManyUserInputEnvelope
    connect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type EmailVerificationTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    set?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    disconnect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    delete?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    update?: EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationTokenUpdateManyWithWhereWithoutUserInput | EmailVerificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type SearchHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<SearchHistoryCreateWithoutUserInput, SearchHistoryUncheckedCreateWithoutUserInput> | SearchHistoryCreateWithoutUserInput[] | SearchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchHistoryCreateOrConnectWithoutUserInput | SearchHistoryCreateOrConnectWithoutUserInput[]
    upsert?: SearchHistoryUpsertWithWhereUniqueWithoutUserInput | SearchHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SearchHistoryCreateManyUserInputEnvelope
    set?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    disconnect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    delete?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    connect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    update?: SearchHistoryUpdateWithWhereUniqueWithoutUserInput | SearchHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SearchHistoryUpdateManyWithWhereWithoutUserInput | SearchHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SearchHistoryScalarWhereInput | SearchHistoryScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    set?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    disconnect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    delete?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    update?: EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationTokenUpdateManyWithWhereWithoutUserInput | EmailVerificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type SearchHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SearchHistoryCreateWithoutUserInput, SearchHistoryUncheckedCreateWithoutUserInput> | SearchHistoryCreateWithoutUserInput[] | SearchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SearchHistoryCreateOrConnectWithoutUserInput | SearchHistoryCreateOrConnectWithoutUserInput[]
    upsert?: SearchHistoryUpsertWithWhereUniqueWithoutUserInput | SearchHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SearchHistoryCreateManyUserInputEnvelope
    set?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    disconnect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    delete?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    connect?: SearchHistoryWhereUniqueInput | SearchHistoryWhereUniqueInput[]
    update?: SearchHistoryUpdateWithWhereUniqueWithoutUserInput | SearchHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SearchHistoryUpdateManyWithWhereWithoutUserInput | SearchHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SearchHistoryScalarWhereInput | SearchHistoryScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumMessageRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleFilter<$PrismaModel> | $Enums.MessageRole
  }

  export type NestedEnumMessageRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleWithAggregatesFilter<$PrismaModel> | $Enums.MessageRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageRoleFilter<$PrismaModel>
    _max?: NestedEnumMessageRoleFilter<$PrismaModel>
  }

  export type NestedEnumProviderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderType | EnumProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderType[] | ListEnumProviderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderType[] | ListEnumProviderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderTypeFilter<$PrismaModel> | $Enums.ProviderType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumProviderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderType | EnumProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderType[] | ListEnumProviderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderType[] | ListEnumProviderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProviderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderTypeFilter<$PrismaModel>
    _max?: NestedEnumProviderTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumSubscriptionPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanFilter<$PrismaModel> | $Enums.SubscriptionPlan
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    verificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    verificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutVerificationTokensInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerificationTokensInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerificationTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerificationTokensInput, UserUncheckedCreateWithoutVerificationTokensInput>
  }

  export type UserUpsertWithoutVerificationTokensInput = {
    update: XOR<UserUpdateWithoutVerificationTokensInput, UserUncheckedUpdateWithoutVerificationTokensInput>
    create: XOR<UserCreateWithoutVerificationTokensInput, UserUncheckedCreateWithoutVerificationTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerificationTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerificationTokensInput, UserUncheckedUpdateWithoutVerificationTokensInput>
  }

  export type UserUpdateWithoutVerificationTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerificationTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutConversationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    verificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConversationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    verificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConversationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
  }

  export type MessageCreateWithoutConversationInput = {
    id?: string
    role: $Enums.MessageRole
    content: string
    createdAt?: Date | string
    providerModel?: ProviderModelCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: string
    role: $Enums.MessageRole
    content: string
    providerModelId?: string | null
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutConversationsInput = {
    update: XOR<UserUpdateWithoutConversationsInput, UserUncheckedUpdateWithoutConversationsInput>
    create: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConversationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConversationsInput, UserUncheckedUpdateWithoutConversationsInput>
  }

  export type UserUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    verificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    verificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: UuidFilter<"Message"> | string
    conversationId?: UuidFilter<"Message"> | string
    role?: EnumMessageRoleFilter<"Message"> | $Enums.MessageRole
    content?: StringFilter<"Message"> | string
    providerModelId?: UuidNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type ConversationCreateWithoutMessagesInput = {
    id?: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type ProviderModelCreateWithoutMessagesInput = {
    id?: string
    name: string
    modelId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutModelsInput
  }

  export type ProviderModelUncheckedCreateWithoutMessagesInput = {
    id?: string
    providerId: string
    name: string
    modelId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderModelCreateOrConnectWithoutMessagesInput = {
    where: ProviderModelWhereUniqueInput
    create: XOR<ProviderModelCreateWithoutMessagesInput, ProviderModelUncheckedCreateWithoutMessagesInput>
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderModelUpsertWithoutMessagesInput = {
    update: XOR<ProviderModelUpdateWithoutMessagesInput, ProviderModelUncheckedUpdateWithoutMessagesInput>
    create: XOR<ProviderModelCreateWithoutMessagesInput, ProviderModelUncheckedCreateWithoutMessagesInput>
    where?: ProviderModelWhereInput
  }

  export type ProviderModelUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ProviderModelWhereInput
    data: XOR<ProviderModelUpdateWithoutMessagesInput, ProviderModelUncheckedUpdateWithoutMessagesInput>
  }

  export type ProviderModelUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutModelsNestedInput
  }

  export type ProviderModelUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderModelCreateWithoutProviderInput = {
    id?: string
    name: string
    modelId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutProviderModelInput
  }

  export type ProviderModelUncheckedCreateWithoutProviderInput = {
    id?: string
    name: string
    modelId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutProviderModelInput
  }

  export type ProviderModelCreateOrConnectWithoutProviderInput = {
    where: ProviderModelWhereUniqueInput
    create: XOR<ProviderModelCreateWithoutProviderInput, ProviderModelUncheckedCreateWithoutProviderInput>
  }

  export type ProviderModelCreateManyProviderInputEnvelope = {
    data: ProviderModelCreateManyProviderInput | ProviderModelCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type ProviderModelUpsertWithWhereUniqueWithoutProviderInput = {
    where: ProviderModelWhereUniqueInput
    update: XOR<ProviderModelUpdateWithoutProviderInput, ProviderModelUncheckedUpdateWithoutProviderInput>
    create: XOR<ProviderModelCreateWithoutProviderInput, ProviderModelUncheckedCreateWithoutProviderInput>
  }

  export type ProviderModelUpdateWithWhereUniqueWithoutProviderInput = {
    where: ProviderModelWhereUniqueInput
    data: XOR<ProviderModelUpdateWithoutProviderInput, ProviderModelUncheckedUpdateWithoutProviderInput>
  }

  export type ProviderModelUpdateManyWithWhereWithoutProviderInput = {
    where: ProviderModelScalarWhereInput
    data: XOR<ProviderModelUpdateManyMutationInput, ProviderModelUncheckedUpdateManyWithoutProviderInput>
  }

  export type ProviderModelScalarWhereInput = {
    AND?: ProviderModelScalarWhereInput | ProviderModelScalarWhereInput[]
    OR?: ProviderModelScalarWhereInput[]
    NOT?: ProviderModelScalarWhereInput | ProviderModelScalarWhereInput[]
    id?: UuidFilter<"ProviderModel"> | string
    providerId?: UuidFilter<"ProviderModel"> | string
    name?: StringFilter<"ProviderModel"> | string
    modelId?: StringFilter<"ProviderModel"> | string
    isActive?: BoolFilter<"ProviderModel"> | boolean
    createdAt?: DateTimeFilter<"ProviderModel"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderModel"> | Date | string
  }

  export type ProviderCreateWithoutModelsInput = {
    id?: string
    name: string
    type: $Enums.ProviderType
    apiKey?: string | null
    isActive?: boolean
    isDefault?: boolean
    apiBaseUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderUncheckedCreateWithoutModelsInput = {
    id?: string
    name: string
    type: $Enums.ProviderType
    apiKey?: string | null
    isActive?: boolean
    isDefault?: boolean
    apiBaseUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderCreateOrConnectWithoutModelsInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutModelsInput, ProviderUncheckedCreateWithoutModelsInput>
  }

  export type MessageCreateWithoutProviderModelInput = {
    id?: string
    role: $Enums.MessageRole
    content: string
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutProviderModelInput = {
    id?: string
    conversationId: string
    role: $Enums.MessageRole
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutProviderModelInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutProviderModelInput, MessageUncheckedCreateWithoutProviderModelInput>
  }

  export type MessageCreateManyProviderModelInputEnvelope = {
    data: MessageCreateManyProviderModelInput | MessageCreateManyProviderModelInput[]
    skipDuplicates?: boolean
  }

  export type ProviderUpsertWithoutModelsInput = {
    update: XOR<ProviderUpdateWithoutModelsInput, ProviderUncheckedUpdateWithoutModelsInput>
    create: XOR<ProviderCreateWithoutModelsInput, ProviderUncheckedCreateWithoutModelsInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutModelsInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutModelsInput, ProviderUncheckedUpdateWithoutModelsInput>
  }

  export type ProviderUpdateWithoutModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    apiBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderUncheckedUpdateWithoutModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    apiBaseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutProviderModelInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutProviderModelInput, MessageUncheckedUpdateWithoutProviderModelInput>
    create: XOR<MessageCreateWithoutProviderModelInput, MessageUncheckedCreateWithoutProviderModelInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutProviderModelInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutProviderModelInput, MessageUncheckedUpdateWithoutProviderModelInput>
  }

  export type MessageUpdateManyWithWhereWithoutProviderModelInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutProviderModelInput>
  }

  export type UserCreateWithoutSearchHistoryInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    verificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSearchHistoryInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    verificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSearchHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSearchHistoryInput, UserUncheckedCreateWithoutSearchHistoryInput>
  }

  export type UserUpsertWithoutSearchHistoryInput = {
    update: XOR<UserUpdateWithoutSearchHistoryInput, UserUncheckedUpdateWithoutSearchHistoryInput>
    create: XOR<UserCreateWithoutSearchHistoryInput, UserUncheckedCreateWithoutSearchHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSearchHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSearchHistoryInput, UserUncheckedUpdateWithoutSearchHistoryInput>
  }

  export type UserUpdateWithoutSearchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    verificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSearchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    verificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    verificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    verificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type SubscriptionUsageCreateWithoutSubscriptionInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    requestCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUsageUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    requestCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUsageCreateOrConnectWithoutSubscriptionInput = {
    where: SubscriptionUsageWhereUniqueInput
    create: XOR<SubscriptionUsageCreateWithoutSubscriptionInput, SubscriptionUsageUncheckedCreateWithoutSubscriptionInput>
  }

  export type SubscriptionUsageCreateManySubscriptionInputEnvelope = {
    data: SubscriptionUsageCreateManySubscriptionInput | SubscriptionUsageCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    verificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    verificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubscriptionUsageUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: SubscriptionUsageWhereUniqueInput
    update: XOR<SubscriptionUsageUpdateWithoutSubscriptionInput, SubscriptionUsageUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<SubscriptionUsageCreateWithoutSubscriptionInput, SubscriptionUsageUncheckedCreateWithoutSubscriptionInput>
  }

  export type SubscriptionUsageUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: SubscriptionUsageWhereUniqueInput
    data: XOR<SubscriptionUsageUpdateWithoutSubscriptionInput, SubscriptionUsageUncheckedUpdateWithoutSubscriptionInput>
  }

  export type SubscriptionUsageUpdateManyWithWhereWithoutSubscriptionInput = {
    where: SubscriptionUsageScalarWhereInput
    data: XOR<SubscriptionUsageUpdateManyMutationInput, SubscriptionUsageUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type SubscriptionUsageScalarWhereInput = {
    AND?: SubscriptionUsageScalarWhereInput | SubscriptionUsageScalarWhereInput[]
    OR?: SubscriptionUsageScalarWhereInput[]
    NOT?: SubscriptionUsageScalarWhereInput | SubscriptionUsageScalarWhereInput[]
    id?: UuidFilter<"SubscriptionUsage"> | string
    subscriptionId?: UuidFilter<"SubscriptionUsage"> | string
    periodStart?: DateTimeFilter<"SubscriptionUsage"> | Date | string
    periodEnd?: DateTimeFilter<"SubscriptionUsage"> | Date | string
    requestCount?: IntFilter<"SubscriptionUsage"> | number
    createdAt?: DateTimeFilter<"SubscriptionUsage"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionUsage"> | Date | string
  }

  export type SubscriptionCreateWithoutUsagesInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    startedAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutUsagesInput = {
    id?: string
    userId: string
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    startedAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUsagesInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUsagesInput, SubscriptionUncheckedCreateWithoutUsagesInput>
  }

  export type SubscriptionUpsertWithoutUsagesInput = {
    update: XOR<SubscriptionUpdateWithoutUsagesInput, SubscriptionUncheckedUpdateWithoutUsagesInput>
    create: XOR<SubscriptionCreateWithoutUsagesInput, SubscriptionUncheckedCreateWithoutUsagesInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUsagesInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUsagesInput, SubscriptionUncheckedUpdateWithoutUsagesInput>
  }

  export type SubscriptionUpdateWithoutUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    verificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    verificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    searchHistory?: SearchHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    emailVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    roleId?: UuidFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    refreshTokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    refreshTokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmailVerificationTokenCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailVerificationTokenUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailVerificationTokenCreateOrConnectWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    create: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationTokenCreateManyUserInputEnvelope = {
    data: EmailVerificationTokenCreateManyUserInput | EmailVerificationTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    startedAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usages?: SubscriptionUsageCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    startedAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usages?: SubscriptionUsageUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutUserInput = {
    id?: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutUserInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type ConversationCreateManyUserInputEnvelope = {
    data: ConversationCreateManyUserInput | ConversationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SearchHistoryCreateWithoutUserInput = {
    id?: string
    query: string
    createdAt?: Date | string
  }

  export type SearchHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    query: string
    createdAt?: Date | string
  }

  export type SearchHistoryCreateOrConnectWithoutUserInput = {
    where: SearchHistoryWhereUniqueInput
    create: XOR<SearchHistoryCreateWithoutUserInput, SearchHistoryUncheckedCreateWithoutUserInput>
  }

  export type SearchHistoryCreateManyUserInputEnvelope = {
    data: SearchHistoryCreateManyUserInput | SearchHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: UuidFilter<"Session"> | string
    userId?: UuidFilter<"Session"> | string
    refreshTokenHash?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    revokedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    lastUsedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    update: XOR<EmailVerificationTokenUpdateWithoutUserInput, EmailVerificationTokenUncheckedUpdateWithoutUserInput>
    create: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    data: XOR<EmailVerificationTokenUpdateWithoutUserInput, EmailVerificationTokenUncheckedUpdateWithoutUserInput>
  }

  export type EmailVerificationTokenUpdateManyWithWhereWithoutUserInput = {
    where: EmailVerificationTokenScalarWhereInput
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailVerificationTokenScalarWhereInput = {
    AND?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
    OR?: EmailVerificationTokenScalarWhereInput[]
    NOT?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
    id?: UuidFilter<"EmailVerificationToken"> | string
    userId?: UuidFilter<"EmailVerificationToken"> | string
    tokenHash?: StringFilter<"EmailVerificationToken"> | string
    expiresAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"EmailVerificationToken"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: UuidFilter<"Subscription"> | string
    userId?: UuidFilter<"Subscription"> | string
    plan?: EnumSubscriptionPlanFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    startedAt?: DateTimeFilter<"Subscription"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type ConversationUpsertWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
  }

  export type ConversationUpdateManyWithWhereWithoutUserInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutUserInput>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: UuidFilter<"Conversation"> | string
    userId?: UuidFilter<"Conversation"> | string
    title?: StringNullableFilter<"Conversation"> | string | null
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
  }

  export type SearchHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: SearchHistoryWhereUniqueInput
    update: XOR<SearchHistoryUpdateWithoutUserInput, SearchHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<SearchHistoryCreateWithoutUserInput, SearchHistoryUncheckedCreateWithoutUserInput>
  }

  export type SearchHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: SearchHistoryWhereUniqueInput
    data: XOR<SearchHistoryUpdateWithoutUserInput, SearchHistoryUncheckedUpdateWithoutUserInput>
  }

  export type SearchHistoryUpdateManyWithWhereWithoutUserInput = {
    where: SearchHistoryScalarWhereInput
    data: XOR<SearchHistoryUpdateManyMutationInput, SearchHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type SearchHistoryScalarWhereInput = {
    AND?: SearchHistoryScalarWhereInput | SearchHistoryScalarWhereInput[]
    OR?: SearchHistoryScalarWhereInput[]
    NOT?: SearchHistoryScalarWhereInput | SearchHistoryScalarWhereInput[]
    id?: UuidFilter<"SearchHistory"> | string
    userId?: UuidFilter<"SearchHistory"> | string
    query?: StringFilter<"SearchHistory"> | string
    createdAt?: DateTimeFilter<"SearchHistory"> | Date | string
  }

  export type MessageCreateManyConversationInput = {
    id?: string
    role: $Enums.MessageRole
    content: string
    providerModelId?: string | null
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerModel?: ProviderModelUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    providerModelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    providerModelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderModelCreateManyProviderInput = {
    id?: string
    name: string
    modelId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderModelUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutProviderModelNestedInput
  }

  export type ProviderModelUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutProviderModelNestedInput
  }

  export type ProviderModelUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyProviderModelInput = {
    id?: string
    conversationId: string
    role: $Enums.MessageRole
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutProviderModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutProviderModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutProviderModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUsageCreateManySubscriptionInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    requestCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUsageUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    requestCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUsageUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    requestCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUsageUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    requestCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    verificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    verificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    searchHistory?: SearchHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    refreshTokenHash: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailVerificationTokenCreateManyUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type SubscriptionCreateManyUserInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    startedAt?: Date | string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationCreateManyUserInput = {
    id?: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchHistoryCreateManyUserInput = {
    id?: string
    query: string
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usages?: SubscriptionUsageUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usages?: SubscriptionUsageUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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