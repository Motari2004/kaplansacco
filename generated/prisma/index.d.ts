
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Loan
 * 
 */
export type Loan = $Result.DefaultSelection<Prisma.$LoanPayload>
/**
 * Model LoanPayment
 * 
 */
export type LoanPayment = $Result.DefaultSelection<Prisma.$LoanPaymentPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Contribution
 * 
 */
export type Contribution = $Result.DefaultSelection<Prisma.$ContributionPayload>
/**
 * Model Guarantor
 * 
 */
export type Guarantor = $Result.DefaultSelection<Prisma.$GuarantorPayload>
/**
 * Model Withdrawal
 * 
 */
export type Withdrawal = $Result.DefaultSelection<Prisma.$WithdrawalPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loan`: Exposes CRUD operations for the **Loan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loans
    * const loans = await prisma.loan.findMany()
    * ```
    */
  get loan(): Prisma.LoanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loanPayment`: Exposes CRUD operations for the **LoanPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoanPayments
    * const loanPayments = await prisma.loanPayment.findMany()
    * ```
    */
  get loanPayment(): Prisma.LoanPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contribution`: Exposes CRUD operations for the **Contribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contributions
    * const contributions = await prisma.contribution.findMany()
    * ```
    */
  get contribution(): Prisma.ContributionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guarantor`: Exposes CRUD operations for the **Guarantor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guarantors
    * const guarantors = await prisma.guarantor.findMany()
    * ```
    */
  get guarantor(): Prisma.GuarantorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.withdrawal`: Exposes CRUD operations for the **Withdrawal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Withdrawals
    * const withdrawals = await prisma.withdrawal.findMany()
    * ```
    */
  get withdrawal(): Prisma.WithdrawalDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
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
    Loan: 'Loan',
    LoanPayment: 'LoanPayment',
    Transaction: 'Transaction',
    Contribution: 'Contribution',
    Guarantor: 'Guarantor',
    Withdrawal: 'Withdrawal'
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
      modelProps: "user" | "loan" | "loanPayment" | "transaction" | "contribution" | "guarantor" | "withdrawal"
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
      Loan: {
        payload: Prisma.$LoanPayload<ExtArgs>
        fields: Prisma.LoanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          findFirst: {
            args: Prisma.LoanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          findMany: {
            args: Prisma.LoanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>[]
          }
          create: {
            args: Prisma.LoanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          createMany: {
            args: Prisma.LoanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>[]
          }
          delete: {
            args: Prisma.LoanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          update: {
            args: Prisma.LoanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          deleteMany: {
            args: Prisma.LoanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>[]
          }
          upsert: {
            args: Prisma.LoanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          aggregate: {
            args: Prisma.LoanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoan>
          }
          groupBy: {
            args: Prisma.LoanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoanCountArgs<ExtArgs>
            result: $Utils.Optional<LoanCountAggregateOutputType> | number
          }
        }
      }
      LoanPayment: {
        payload: Prisma.$LoanPaymentPayload<ExtArgs>
        fields: Prisma.LoanPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoanPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoanPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPaymentPayload>
          }
          findFirst: {
            args: Prisma.LoanPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoanPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPaymentPayload>
          }
          findMany: {
            args: Prisma.LoanPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPaymentPayload>[]
          }
          create: {
            args: Prisma.LoanPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPaymentPayload>
          }
          createMany: {
            args: Prisma.LoanPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoanPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPaymentPayload>[]
          }
          delete: {
            args: Prisma.LoanPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPaymentPayload>
          }
          update: {
            args: Prisma.LoanPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPaymentPayload>
          }
          deleteMany: {
            args: Prisma.LoanPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoanPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoanPaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPaymentPayload>[]
          }
          upsert: {
            args: Prisma.LoanPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPaymentPayload>
          }
          aggregate: {
            args: Prisma.LoanPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoanPayment>
          }
          groupBy: {
            args: Prisma.LoanPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoanPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<LoanPaymentCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Contribution: {
        payload: Prisma.$ContributionPayload<ExtArgs>
        fields: Prisma.ContributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          findFirst: {
            args: Prisma.ContributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          findMany: {
            args: Prisma.ContributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>[]
          }
          create: {
            args: Prisma.ContributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          createMany: {
            args: Prisma.ContributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContributionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>[]
          }
          delete: {
            args: Prisma.ContributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          update: {
            args: Prisma.ContributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          deleteMany: {
            args: Prisma.ContributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContributionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>[]
          }
          upsert: {
            args: Prisma.ContributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributionPayload>
          }
          aggregate: {
            args: Prisma.ContributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContribution>
          }
          groupBy: {
            args: Prisma.ContributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContributionCountArgs<ExtArgs>
            result: $Utils.Optional<ContributionCountAggregateOutputType> | number
          }
        }
      }
      Guarantor: {
        payload: Prisma.$GuarantorPayload<ExtArgs>
        fields: Prisma.GuarantorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuarantorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuarantorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuarantorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuarantorPayload>
          }
          findFirst: {
            args: Prisma.GuarantorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuarantorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuarantorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuarantorPayload>
          }
          findMany: {
            args: Prisma.GuarantorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuarantorPayload>[]
          }
          create: {
            args: Prisma.GuarantorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuarantorPayload>
          }
          createMany: {
            args: Prisma.GuarantorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuarantorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuarantorPayload>[]
          }
          delete: {
            args: Prisma.GuarantorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuarantorPayload>
          }
          update: {
            args: Prisma.GuarantorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuarantorPayload>
          }
          deleteMany: {
            args: Prisma.GuarantorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuarantorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuarantorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuarantorPayload>[]
          }
          upsert: {
            args: Prisma.GuarantorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuarantorPayload>
          }
          aggregate: {
            args: Prisma.GuarantorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuarantor>
          }
          groupBy: {
            args: Prisma.GuarantorGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuarantorGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuarantorCountArgs<ExtArgs>
            result: $Utils.Optional<GuarantorCountAggregateOutputType> | number
          }
        }
      }
      Withdrawal: {
        payload: Prisma.$WithdrawalPayload<ExtArgs>
        fields: Prisma.WithdrawalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WithdrawalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WithdrawalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          findFirst: {
            args: Prisma.WithdrawalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WithdrawalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          findMany: {
            args: Prisma.WithdrawalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>[]
          }
          create: {
            args: Prisma.WithdrawalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          createMany: {
            args: Prisma.WithdrawalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WithdrawalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>[]
          }
          delete: {
            args: Prisma.WithdrawalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          update: {
            args: Prisma.WithdrawalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          deleteMany: {
            args: Prisma.WithdrawalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WithdrawalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WithdrawalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>[]
          }
          upsert: {
            args: Prisma.WithdrawalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          aggregate: {
            args: Prisma.WithdrawalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawal>
          }
          groupBy: {
            args: Prisma.WithdrawalGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalGroupByOutputType>[]
          }
          count: {
            args: Prisma.WithdrawalCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
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
    user?: UserOmit
    loan?: LoanOmit
    loanPayment?: LoanPaymentOmit
    transaction?: TransactionOmit
    contribution?: ContributionOmit
    guarantor?: GuarantorOmit
    withdrawal?: WithdrawalOmit
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
    loans: number
    transactions: number
    contributions: number
    guarantors: number
    withdrawals: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loans?: boolean | UserCountOutputTypeCountLoansArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    contributions?: boolean | UserCountOutputTypeCountContributionsArgs
    guarantors?: boolean | UserCountOutputTypeCountGuarantorsArgs
    withdrawals?: boolean | UserCountOutputTypeCountWithdrawalsArgs
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
  export type UserCountOutputTypeCountLoansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGuarantorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuarantorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawalWhereInput
  }


  /**
   * Count Type LoanCountOutputType
   */

  export type LoanCountOutputType = {
    payments: number
    guarantors: number
  }

  export type LoanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | LoanCountOutputTypeCountPaymentsArgs
    guarantors?: boolean | LoanCountOutputTypeCountGuarantorsArgs
  }

  // Custom InputTypes
  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanCountOutputType
     */
    select?: LoanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanPaymentWhereInput
  }

  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeCountGuarantorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuarantorWhereInput
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
    monthlyContribution: number | null
    shares: number | null
    savingsBalance: number | null
  }

  export type UserSumAggregateOutputType = {
    monthlyContribution: number | null
    shares: number | null
    savingsBalance: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    idNumber: string | null
    password: string | null
    memberNumber: string | null
    monthlyContribution: number | null
    shares: number | null
    savingsBalance: number | null
    status: string | null
    role: string | null
    physicalAddress: string | null
    postalAddress: string | null
    idDocument: string | null
    lastContributionDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    idNumber: string | null
    password: string | null
    memberNumber: string | null
    monthlyContribution: number | null
    shares: number | null
    savingsBalance: number | null
    status: string | null
    role: string | null
    physicalAddress: string | null
    postalAddress: string | null
    idDocument: string | null
    lastContributionDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    idNumber: number
    password: number
    memberNumber: number
    monthlyContribution: number
    shares: number
    savingsBalance: number
    status: number
    role: number
    physicalAddress: number
    postalAddress: number
    idDocument: number
    lastContributionDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    monthlyContribution?: true
    shares?: true
    savingsBalance?: true
  }

  export type UserSumAggregateInputType = {
    monthlyContribution?: true
    shares?: true
    savingsBalance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    idNumber?: true
    password?: true
    memberNumber?: true
    monthlyContribution?: true
    shares?: true
    savingsBalance?: true
    status?: true
    role?: true
    physicalAddress?: true
    postalAddress?: true
    idDocument?: true
    lastContributionDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    idNumber?: true
    password?: true
    memberNumber?: true
    monthlyContribution?: true
    shares?: true
    savingsBalance?: true
    status?: true
    role?: true
    physicalAddress?: true
    postalAddress?: true
    idDocument?: true
    lastContributionDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    idNumber?: true
    password?: true
    memberNumber?: true
    monthlyContribution?: true
    shares?: true
    savingsBalance?: true
    status?: true
    role?: true
    physicalAddress?: true
    postalAddress?: true
    idDocument?: true
    lastContributionDate?: true
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
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string
    idNumber: string
    password: string
    memberNumber: string
    monthlyContribution: number
    shares: number
    savingsBalance: number
    status: string
    role: string
    physicalAddress: string | null
    postalAddress: string | null
    idDocument: string | null
    lastContributionDate: Date | null
    createdAt: Date
    updatedAt: Date
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
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    idNumber?: boolean
    password?: boolean
    memberNumber?: boolean
    monthlyContribution?: boolean
    shares?: boolean
    savingsBalance?: boolean
    status?: boolean
    role?: boolean
    physicalAddress?: boolean
    postalAddress?: boolean
    idDocument?: boolean
    lastContributionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loans?: boolean | User$loansArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    contributions?: boolean | User$contributionsArgs<ExtArgs>
    guarantors?: boolean | User$guarantorsArgs<ExtArgs>
    withdrawals?: boolean | User$withdrawalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    idNumber?: boolean
    password?: boolean
    memberNumber?: boolean
    monthlyContribution?: boolean
    shares?: boolean
    savingsBalance?: boolean
    status?: boolean
    role?: boolean
    physicalAddress?: boolean
    postalAddress?: boolean
    idDocument?: boolean
    lastContributionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    idNumber?: boolean
    password?: boolean
    memberNumber?: boolean
    monthlyContribution?: boolean
    shares?: boolean
    savingsBalance?: boolean
    status?: boolean
    role?: boolean
    physicalAddress?: boolean
    postalAddress?: boolean
    idDocument?: boolean
    lastContributionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    idNumber?: boolean
    password?: boolean
    memberNumber?: boolean
    monthlyContribution?: boolean
    shares?: boolean
    savingsBalance?: boolean
    status?: boolean
    role?: boolean
    physicalAddress?: boolean
    postalAddress?: boolean
    idDocument?: boolean
    lastContributionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "idNumber" | "password" | "memberNumber" | "monthlyContribution" | "shares" | "savingsBalance" | "status" | "role" | "physicalAddress" | "postalAddress" | "idDocument" | "lastContributionDate" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loans?: boolean | User$loansArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    contributions?: boolean | User$contributionsArgs<ExtArgs>
    guarantors?: boolean | User$guarantorsArgs<ExtArgs>
    withdrawals?: boolean | User$withdrawalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      loans: Prisma.$LoanPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      contributions: Prisma.$ContributionPayload<ExtArgs>[]
      guarantors: Prisma.$GuarantorPayload<ExtArgs>[]
      withdrawals: Prisma.$WithdrawalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      phone: string
      idNumber: string
      password: string
      memberNumber: string
      monthlyContribution: number
      shares: number
      savingsBalance: number
      status: string
      role: string
      physicalAddress: string | null
      postalAddress: string | null
      idDocument: string | null
      lastContributionDate: Date | null
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
    loans<T extends User$loansArgs<ExtArgs> = {}>(args?: Subset<T, User$loansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contributions<T extends User$contributionsArgs<ExtArgs> = {}>(args?: Subset<T, User$contributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guarantors<T extends User$guarantorsArgs<ExtArgs> = {}>(args?: Subset<T, User$guarantorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuarantorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    withdrawals<T extends User$withdrawalsArgs<ExtArgs> = {}>(args?: Subset<T, User$withdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly idNumber: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly memberNumber: FieldRef<"User", 'String'>
    readonly monthlyContribution: FieldRef<"User", 'Float'>
    readonly shares: FieldRef<"User", 'Int'>
    readonly savingsBalance: FieldRef<"User", 'Float'>
    readonly status: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly physicalAddress: FieldRef<"User", 'String'>
    readonly postalAddress: FieldRef<"User", 'String'>
    readonly idDocument: FieldRef<"User", 'String'>
    readonly lastContributionDate: FieldRef<"User", 'DateTime'>
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
   * User.loans
   */
  export type User$loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    where?: LoanWhereInput
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    cursor?: LoanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.contributions
   */
  export type User$contributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    where?: ContributionWhereInput
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    cursor?: ContributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * User.guarantors
   */
  export type User$guarantorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guarantor
     */
    select?: GuarantorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guarantor
     */
    omit?: GuarantorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuarantorInclude<ExtArgs> | null
    where?: GuarantorWhereInput
    orderBy?: GuarantorOrderByWithRelationInput | GuarantorOrderByWithRelationInput[]
    cursor?: GuarantorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuarantorScalarFieldEnum | GuarantorScalarFieldEnum[]
  }

  /**
   * User.withdrawals
   */
  export type User$withdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    where?: WithdrawalWhereInput
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    cursor?: WithdrawalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
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
   * Model Loan
   */

  export type AggregateLoan = {
    _count: LoanCountAggregateOutputType | null
    _avg: LoanAvgAggregateOutputType | null
    _sum: LoanSumAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  export type LoanAvgAggregateOutputType = {
    amount: number | null
    interestRate: number | null
    totalRepayable: number | null
    monthlyInstallment: number | null
    termMonths: number | null
  }

  export type LoanSumAggregateOutputType = {
    amount: number | null
    interestRate: number | null
    totalRepayable: number | null
    monthlyInstallment: number | null
    termMonths: number | null
  }

  export type LoanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    interestRate: number | null
    totalRepayable: number | null
    monthlyInstallment: number | null
    termMonths: number | null
    purpose: string | null
    status: string | null
    approvalDate: Date | null
    disbursementDate: Date | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    guarantor1: string | null
    guarantor1Phone: string | null
    guarantor2: string | null
    guarantor2Phone: string | null
  }

  export type LoanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    interestRate: number | null
    totalRepayable: number | null
    monthlyInstallment: number | null
    termMonths: number | null
    purpose: string | null
    status: string | null
    approvalDate: Date | null
    disbursementDate: Date | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    guarantor1: string | null
    guarantor1Phone: string | null
    guarantor2: string | null
    guarantor2Phone: string | null
  }

  export type LoanCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    interestRate: number
    totalRepayable: number
    monthlyInstallment: number
    termMonths: number
    purpose: number
    status: number
    approvalDate: number
    disbursementDate: number
    dueDate: number
    createdAt: number
    updatedAt: number
    guarantor1: number
    guarantor1Phone: number
    guarantor2: number
    guarantor2Phone: number
    _all: number
  }


  export type LoanAvgAggregateInputType = {
    amount?: true
    interestRate?: true
    totalRepayable?: true
    monthlyInstallment?: true
    termMonths?: true
  }

  export type LoanSumAggregateInputType = {
    amount?: true
    interestRate?: true
    totalRepayable?: true
    monthlyInstallment?: true
    termMonths?: true
  }

  export type LoanMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    interestRate?: true
    totalRepayable?: true
    monthlyInstallment?: true
    termMonths?: true
    purpose?: true
    status?: true
    approvalDate?: true
    disbursementDate?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    guarantor1?: true
    guarantor1Phone?: true
    guarantor2?: true
    guarantor2Phone?: true
  }

  export type LoanMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    interestRate?: true
    totalRepayable?: true
    monthlyInstallment?: true
    termMonths?: true
    purpose?: true
    status?: true
    approvalDate?: true
    disbursementDate?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    guarantor1?: true
    guarantor1Phone?: true
    guarantor2?: true
    guarantor2Phone?: true
  }

  export type LoanCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    interestRate?: true
    totalRepayable?: true
    monthlyInstallment?: true
    termMonths?: true
    purpose?: true
    status?: true
    approvalDate?: true
    disbursementDate?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    guarantor1?: true
    guarantor1Phone?: true
    guarantor2?: true
    guarantor2Phone?: true
    _all?: true
  }

  export type LoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loan to aggregate.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Loans
    **/
    _count?: true | LoanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanMaxAggregateInputType
  }

  export type GetLoanAggregateType<T extends LoanAggregateArgs> = {
        [P in keyof T & keyof AggregateLoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan[P]>
      : GetScalarType<T[P], AggregateLoan[P]>
  }




  export type LoanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanWhereInput
    orderBy?: LoanOrderByWithAggregationInput | LoanOrderByWithAggregationInput[]
    by: LoanScalarFieldEnum[] | LoanScalarFieldEnum
    having?: LoanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanCountAggregateInputType | true
    _avg?: LoanAvgAggregateInputType
    _sum?: LoanSumAggregateInputType
    _min?: LoanMinAggregateInputType
    _max?: LoanMaxAggregateInputType
  }

  export type LoanGroupByOutputType = {
    id: string
    userId: string
    amount: number
    interestRate: number
    totalRepayable: number
    monthlyInstallment: number
    termMonths: number
    purpose: string | null
    status: string
    approvalDate: Date | null
    disbursementDate: Date | null
    dueDate: Date
    createdAt: Date
    updatedAt: Date
    guarantor1: string | null
    guarantor1Phone: string | null
    guarantor2: string | null
    guarantor2Phone: string | null
    _count: LoanCountAggregateOutputType | null
    _avg: LoanAvgAggregateOutputType | null
    _sum: LoanSumAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  type GetLoanGroupByPayload<T extends LoanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanGroupByOutputType[P]>
            : GetScalarType<T[P], LoanGroupByOutputType[P]>
        }
      >
    >


  export type LoanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    interestRate?: boolean
    totalRepayable?: boolean
    monthlyInstallment?: boolean
    termMonths?: boolean
    purpose?: boolean
    status?: boolean
    approvalDate?: boolean
    disbursementDate?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guarantor1?: boolean
    guarantor1Phone?: boolean
    guarantor2?: boolean
    guarantor2Phone?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Loan$paymentsArgs<ExtArgs>
    guarantors?: boolean | Loan$guarantorsArgs<ExtArgs>
    _count?: boolean | LoanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>

  export type LoanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    interestRate?: boolean
    totalRepayable?: boolean
    monthlyInstallment?: boolean
    termMonths?: boolean
    purpose?: boolean
    status?: boolean
    approvalDate?: boolean
    disbursementDate?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guarantor1?: boolean
    guarantor1Phone?: boolean
    guarantor2?: boolean
    guarantor2Phone?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>

  export type LoanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    interestRate?: boolean
    totalRepayable?: boolean
    monthlyInstallment?: boolean
    termMonths?: boolean
    purpose?: boolean
    status?: boolean
    approvalDate?: boolean
    disbursementDate?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guarantor1?: boolean
    guarantor1Phone?: boolean
    guarantor2?: boolean
    guarantor2Phone?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>

  export type LoanSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    interestRate?: boolean
    totalRepayable?: boolean
    monthlyInstallment?: boolean
    termMonths?: boolean
    purpose?: boolean
    status?: boolean
    approvalDate?: boolean
    disbursementDate?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guarantor1?: boolean
    guarantor1Phone?: boolean
    guarantor2?: boolean
    guarantor2Phone?: boolean
  }

  export type LoanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "interestRate" | "totalRepayable" | "monthlyInstallment" | "termMonths" | "purpose" | "status" | "approvalDate" | "disbursementDate" | "dueDate" | "createdAt" | "updatedAt" | "guarantor1" | "guarantor1Phone" | "guarantor2" | "guarantor2Phone", ExtArgs["result"]["loan"]>
  export type LoanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Loan$paymentsArgs<ExtArgs>
    guarantors?: boolean | Loan$guarantorsArgs<ExtArgs>
    _count?: boolean | LoanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LoanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LoanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LoanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Loan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      payments: Prisma.$LoanPaymentPayload<ExtArgs>[]
      guarantors: Prisma.$GuarantorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      interestRate: number
      totalRepayable: number
      monthlyInstallment: number
      termMonths: number
      purpose: string | null
      status: string
      approvalDate: Date | null
      disbursementDate: Date | null
      dueDate: Date
      createdAt: Date
      updatedAt: Date
      guarantor1: string | null
      guarantor1Phone: string | null
      guarantor2: string | null
      guarantor2Phone: string | null
    }, ExtArgs["result"]["loan"]>
    composites: {}
  }

  type LoanGetPayload<S extends boolean | null | undefined | LoanDefaultArgs> = $Result.GetResult<Prisma.$LoanPayload, S>

  type LoanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoanCountAggregateInputType | true
    }

  export interface LoanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Loan'], meta: { name: 'Loan' } }
    /**
     * Find zero or one Loan that matches the filter.
     * @param {LoanFindUniqueArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoanFindUniqueArgs>(args: SelectSubset<T, LoanFindUniqueArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoanFindUniqueOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoanFindUniqueOrThrowArgs>(args: SelectSubset<T, LoanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindFirstArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoanFindFirstArgs>(args?: SelectSubset<T, LoanFindFirstArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindFirstOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoanFindFirstOrThrowArgs>(args?: SelectSubset<T, LoanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loans
     * const loans = await prisma.loan.findMany()
     * 
     * // Get first 10 Loans
     * const loans = await prisma.loan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loanWithIdOnly = await prisma.loan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoanFindManyArgs>(args?: SelectSubset<T, LoanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loan.
     * @param {LoanCreateArgs} args - Arguments to create a Loan.
     * @example
     * // Create one Loan
     * const Loan = await prisma.loan.create({
     *   data: {
     *     // ... data to create a Loan
     *   }
     * })
     * 
     */
    create<T extends LoanCreateArgs>(args: SelectSubset<T, LoanCreateArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loans.
     * @param {LoanCreateManyArgs} args - Arguments to create many Loans.
     * @example
     * // Create many Loans
     * const loan = await prisma.loan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoanCreateManyArgs>(args?: SelectSubset<T, LoanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Loans and returns the data saved in the database.
     * @param {LoanCreateManyAndReturnArgs} args - Arguments to create many Loans.
     * @example
     * // Create many Loans
     * const loan = await prisma.loan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Loans and only return the `id`
     * const loanWithIdOnly = await prisma.loan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoanCreateManyAndReturnArgs>(args?: SelectSubset<T, LoanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Loan.
     * @param {LoanDeleteArgs} args - Arguments to delete one Loan.
     * @example
     * // Delete one Loan
     * const Loan = await prisma.loan.delete({
     *   where: {
     *     // ... filter to delete one Loan
     *   }
     * })
     * 
     */
    delete<T extends LoanDeleteArgs>(args: SelectSubset<T, LoanDeleteArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loan.
     * @param {LoanUpdateArgs} args - Arguments to update one Loan.
     * @example
     * // Update one Loan
     * const loan = await prisma.loan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoanUpdateArgs>(args: SelectSubset<T, LoanUpdateArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loans.
     * @param {LoanDeleteManyArgs} args - Arguments to filter Loans to delete.
     * @example
     * // Delete a few Loans
     * const { count } = await prisma.loan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoanDeleteManyArgs>(args?: SelectSubset<T, LoanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loans
     * const loan = await prisma.loan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoanUpdateManyArgs>(args: SelectSubset<T, LoanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loans and returns the data updated in the database.
     * @param {LoanUpdateManyAndReturnArgs} args - Arguments to update many Loans.
     * @example
     * // Update many Loans
     * const loan = await prisma.loan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Loans and only return the `id`
     * const loanWithIdOnly = await prisma.loan.updateManyAndReturn({
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
    updateManyAndReturn<T extends LoanUpdateManyAndReturnArgs>(args: SelectSubset<T, LoanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Loan.
     * @param {LoanUpsertArgs} args - Arguments to update or create a Loan.
     * @example
     * // Update or create a Loan
     * const loan = await prisma.loan.upsert({
     *   create: {
     *     // ... data to create a Loan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan we want to update
     *   }
     * })
     */
    upsert<T extends LoanUpsertArgs>(args: SelectSubset<T, LoanUpsertArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanCountArgs} args - Arguments to filter Loans to count.
     * @example
     * // Count the number of Loans
     * const count = await prisma.loan.count({
     *   where: {
     *     // ... the filter for the Loans we want to count
     *   }
     * })
    **/
    count<T extends LoanCountArgs>(
      args?: Subset<T, LoanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoanAggregateArgs>(args: Subset<T, LoanAggregateArgs>): Prisma.PrismaPromise<GetLoanAggregateType<T>>

    /**
     * Group by Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanGroupByArgs} args - Group by arguments.
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
      T extends LoanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoanGroupByArgs['orderBy'] }
        : { orderBy?: LoanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Loan model
   */
  readonly fields: LoanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Loan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Loan$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Loan$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guarantors<T extends Loan$guarantorsArgs<ExtArgs> = {}>(args?: Subset<T, Loan$guarantorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuarantorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Loan model
   */
  interface LoanFieldRefs {
    readonly id: FieldRef<"Loan", 'String'>
    readonly userId: FieldRef<"Loan", 'String'>
    readonly amount: FieldRef<"Loan", 'Float'>
    readonly interestRate: FieldRef<"Loan", 'Float'>
    readonly totalRepayable: FieldRef<"Loan", 'Float'>
    readonly monthlyInstallment: FieldRef<"Loan", 'Float'>
    readonly termMonths: FieldRef<"Loan", 'Int'>
    readonly purpose: FieldRef<"Loan", 'String'>
    readonly status: FieldRef<"Loan", 'String'>
    readonly approvalDate: FieldRef<"Loan", 'DateTime'>
    readonly disbursementDate: FieldRef<"Loan", 'DateTime'>
    readonly dueDate: FieldRef<"Loan", 'DateTime'>
    readonly createdAt: FieldRef<"Loan", 'DateTime'>
    readonly updatedAt: FieldRef<"Loan", 'DateTime'>
    readonly guarantor1: FieldRef<"Loan", 'String'>
    readonly guarantor1Phone: FieldRef<"Loan", 'String'>
    readonly guarantor2: FieldRef<"Loan", 'String'>
    readonly guarantor2Phone: FieldRef<"Loan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Loan findUnique
   */
  export type LoanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan findUniqueOrThrow
   */
  export type LoanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan findFirst
   */
  export type LoanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan findFirstOrThrow
   */
  export type LoanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan findMany
   */
  export type LoanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loans to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan create
   */
  export type LoanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The data needed to create a Loan.
     */
    data: XOR<LoanCreateInput, LoanUncheckedCreateInput>
  }

  /**
   * Loan createMany
   */
  export type LoanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Loans.
     */
    data: LoanCreateManyInput | LoanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Loan createManyAndReturn
   */
  export type LoanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * The data used to create many Loans.
     */
    data: LoanCreateManyInput | LoanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Loan update
   */
  export type LoanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The data needed to update a Loan.
     */
    data: XOR<LoanUpdateInput, LoanUncheckedUpdateInput>
    /**
     * Choose, which Loan to update.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan updateMany
   */
  export type LoanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Loans.
     */
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyInput>
    /**
     * Filter which Loans to update
     */
    where?: LoanWhereInput
    /**
     * Limit how many Loans to update.
     */
    limit?: number
  }

  /**
   * Loan updateManyAndReturn
   */
  export type LoanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * The data used to update Loans.
     */
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyInput>
    /**
     * Filter which Loans to update
     */
    where?: LoanWhereInput
    /**
     * Limit how many Loans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Loan upsert
   */
  export type LoanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The filter to search for the Loan to update in case it exists.
     */
    where: LoanWhereUniqueInput
    /**
     * In case the Loan found by the `where` argument doesn't exist, create a new Loan with this data.
     */
    create: XOR<LoanCreateInput, LoanUncheckedCreateInput>
    /**
     * In case the Loan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoanUpdateInput, LoanUncheckedUpdateInput>
  }

  /**
   * Loan delete
   */
  export type LoanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter which Loan to delete.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan deleteMany
   */
  export type LoanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loans to delete
     */
    where?: LoanWhereInput
    /**
     * Limit how many Loans to delete.
     */
    limit?: number
  }

  /**
   * Loan.payments
   */
  export type Loan$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanPayment
     */
    select?: LoanPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanPayment
     */
    omit?: LoanPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanPaymentInclude<ExtArgs> | null
    where?: LoanPaymentWhereInput
    orderBy?: LoanPaymentOrderByWithRelationInput | LoanPaymentOrderByWithRelationInput[]
    cursor?: LoanPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanPaymentScalarFieldEnum | LoanPaymentScalarFieldEnum[]
  }

  /**
   * Loan.guarantors
   */
  export type Loan$guarantorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guarantor
     */
    select?: GuarantorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guarantor
     */
    omit?: GuarantorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuarantorInclude<ExtArgs> | null
    where?: GuarantorWhereInput
    orderBy?: GuarantorOrderByWithRelationInput | GuarantorOrderByWithRelationInput[]
    cursor?: GuarantorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuarantorScalarFieldEnum | GuarantorScalarFieldEnum[]
  }

  /**
   * Loan without action
   */
  export type LoanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
  }


  /**
   * Model LoanPayment
   */

  export type AggregateLoanPayment = {
    _count: LoanPaymentCountAggregateOutputType | null
    _avg: LoanPaymentAvgAggregateOutputType | null
    _sum: LoanPaymentSumAggregateOutputType | null
    _min: LoanPaymentMinAggregateOutputType | null
    _max: LoanPaymentMaxAggregateOutputType | null
  }

  export type LoanPaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type LoanPaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type LoanPaymentMinAggregateOutputType = {
    id: string | null
    loanId: string | null
    amount: number | null
    paymentDate: Date | null
    receiptNo: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoanPaymentMaxAggregateOutputType = {
    id: string | null
    loanId: string | null
    amount: number | null
    paymentDate: Date | null
    receiptNo: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoanPaymentCountAggregateOutputType = {
    id: number
    loanId: number
    amount: number
    paymentDate: number
    receiptNo: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LoanPaymentAvgAggregateInputType = {
    amount?: true
  }

  export type LoanPaymentSumAggregateInputType = {
    amount?: true
  }

  export type LoanPaymentMinAggregateInputType = {
    id?: true
    loanId?: true
    amount?: true
    paymentDate?: true
    receiptNo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoanPaymentMaxAggregateInputType = {
    id?: true
    loanId?: true
    amount?: true
    paymentDate?: true
    receiptNo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoanPaymentCountAggregateInputType = {
    id?: true
    loanId?: true
    amount?: true
    paymentDate?: true
    receiptNo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LoanPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanPayment to aggregate.
     */
    where?: LoanPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanPayments to fetch.
     */
    orderBy?: LoanPaymentOrderByWithRelationInput | LoanPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoanPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoanPayments
    **/
    _count?: true | LoanPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoanPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoanPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanPaymentMaxAggregateInputType
  }

  export type GetLoanPaymentAggregateType<T extends LoanPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateLoanPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoanPayment[P]>
      : GetScalarType<T[P], AggregateLoanPayment[P]>
  }




  export type LoanPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanPaymentWhereInput
    orderBy?: LoanPaymentOrderByWithAggregationInput | LoanPaymentOrderByWithAggregationInput[]
    by: LoanPaymentScalarFieldEnum[] | LoanPaymentScalarFieldEnum
    having?: LoanPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanPaymentCountAggregateInputType | true
    _avg?: LoanPaymentAvgAggregateInputType
    _sum?: LoanPaymentSumAggregateInputType
    _min?: LoanPaymentMinAggregateInputType
    _max?: LoanPaymentMaxAggregateInputType
  }

  export type LoanPaymentGroupByOutputType = {
    id: string
    loanId: string
    amount: number
    paymentDate: Date
    receiptNo: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: LoanPaymentCountAggregateOutputType | null
    _avg: LoanPaymentAvgAggregateOutputType | null
    _sum: LoanPaymentSumAggregateOutputType | null
    _min: LoanPaymentMinAggregateOutputType | null
    _max: LoanPaymentMaxAggregateOutputType | null
  }

  type GetLoanPaymentGroupByPayload<T extends LoanPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], LoanPaymentGroupByOutputType[P]>
        }
      >
    >


  export type LoanPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loanId?: boolean
    amount?: boolean
    paymentDate?: boolean
    receiptNo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loan?: boolean | LoanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanPayment"]>

  export type LoanPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loanId?: boolean
    amount?: boolean
    paymentDate?: boolean
    receiptNo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loan?: boolean | LoanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanPayment"]>

  export type LoanPaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loanId?: boolean
    amount?: boolean
    paymentDate?: boolean
    receiptNo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loan?: boolean | LoanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanPayment"]>

  export type LoanPaymentSelectScalar = {
    id?: boolean
    loanId?: boolean
    amount?: boolean
    paymentDate?: boolean
    receiptNo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LoanPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "loanId" | "amount" | "paymentDate" | "receiptNo" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["loanPayment"]>
  export type LoanPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | LoanDefaultArgs<ExtArgs>
  }
  export type LoanPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | LoanDefaultArgs<ExtArgs>
  }
  export type LoanPaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | LoanDefaultArgs<ExtArgs>
  }

  export type $LoanPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoanPayment"
    objects: {
      loan: Prisma.$LoanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      loanId: string
      amount: number
      paymentDate: Date
      receiptNo: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["loanPayment"]>
    composites: {}
  }

  type LoanPaymentGetPayload<S extends boolean | null | undefined | LoanPaymentDefaultArgs> = $Result.GetResult<Prisma.$LoanPaymentPayload, S>

  type LoanPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoanPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoanPaymentCountAggregateInputType | true
    }

  export interface LoanPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoanPayment'], meta: { name: 'LoanPayment' } }
    /**
     * Find zero or one LoanPayment that matches the filter.
     * @param {LoanPaymentFindUniqueArgs} args - Arguments to find a LoanPayment
     * @example
     * // Get one LoanPayment
     * const loanPayment = await prisma.loanPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoanPaymentFindUniqueArgs>(args: SelectSubset<T, LoanPaymentFindUniqueArgs<ExtArgs>>): Prisma__LoanPaymentClient<$Result.GetResult<Prisma.$LoanPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoanPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoanPaymentFindUniqueOrThrowArgs} args - Arguments to find a LoanPayment
     * @example
     * // Get one LoanPayment
     * const loanPayment = await prisma.loanPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoanPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, LoanPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoanPaymentClient<$Result.GetResult<Prisma.$LoanPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanPaymentFindFirstArgs} args - Arguments to find a LoanPayment
     * @example
     * // Get one LoanPayment
     * const loanPayment = await prisma.loanPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoanPaymentFindFirstArgs>(args?: SelectSubset<T, LoanPaymentFindFirstArgs<ExtArgs>>): Prisma__LoanPaymentClient<$Result.GetResult<Prisma.$LoanPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanPaymentFindFirstOrThrowArgs} args - Arguments to find a LoanPayment
     * @example
     * // Get one LoanPayment
     * const loanPayment = await prisma.loanPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoanPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, LoanPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoanPaymentClient<$Result.GetResult<Prisma.$LoanPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoanPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoanPayments
     * const loanPayments = await prisma.loanPayment.findMany()
     * 
     * // Get first 10 LoanPayments
     * const loanPayments = await prisma.loanPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loanPaymentWithIdOnly = await prisma.loanPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoanPaymentFindManyArgs>(args?: SelectSubset<T, LoanPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoanPayment.
     * @param {LoanPaymentCreateArgs} args - Arguments to create a LoanPayment.
     * @example
     * // Create one LoanPayment
     * const LoanPayment = await prisma.loanPayment.create({
     *   data: {
     *     // ... data to create a LoanPayment
     *   }
     * })
     * 
     */
    create<T extends LoanPaymentCreateArgs>(args: SelectSubset<T, LoanPaymentCreateArgs<ExtArgs>>): Prisma__LoanPaymentClient<$Result.GetResult<Prisma.$LoanPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoanPayments.
     * @param {LoanPaymentCreateManyArgs} args - Arguments to create many LoanPayments.
     * @example
     * // Create many LoanPayments
     * const loanPayment = await prisma.loanPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoanPaymentCreateManyArgs>(args?: SelectSubset<T, LoanPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoanPayments and returns the data saved in the database.
     * @param {LoanPaymentCreateManyAndReturnArgs} args - Arguments to create many LoanPayments.
     * @example
     * // Create many LoanPayments
     * const loanPayment = await prisma.loanPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoanPayments and only return the `id`
     * const loanPaymentWithIdOnly = await prisma.loanPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoanPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, LoanPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoanPayment.
     * @param {LoanPaymentDeleteArgs} args - Arguments to delete one LoanPayment.
     * @example
     * // Delete one LoanPayment
     * const LoanPayment = await prisma.loanPayment.delete({
     *   where: {
     *     // ... filter to delete one LoanPayment
     *   }
     * })
     * 
     */
    delete<T extends LoanPaymentDeleteArgs>(args: SelectSubset<T, LoanPaymentDeleteArgs<ExtArgs>>): Prisma__LoanPaymentClient<$Result.GetResult<Prisma.$LoanPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoanPayment.
     * @param {LoanPaymentUpdateArgs} args - Arguments to update one LoanPayment.
     * @example
     * // Update one LoanPayment
     * const loanPayment = await prisma.loanPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoanPaymentUpdateArgs>(args: SelectSubset<T, LoanPaymentUpdateArgs<ExtArgs>>): Prisma__LoanPaymentClient<$Result.GetResult<Prisma.$LoanPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoanPayments.
     * @param {LoanPaymentDeleteManyArgs} args - Arguments to filter LoanPayments to delete.
     * @example
     * // Delete a few LoanPayments
     * const { count } = await prisma.loanPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoanPaymentDeleteManyArgs>(args?: SelectSubset<T, LoanPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoanPayments
     * const loanPayment = await prisma.loanPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoanPaymentUpdateManyArgs>(args: SelectSubset<T, LoanPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanPayments and returns the data updated in the database.
     * @param {LoanPaymentUpdateManyAndReturnArgs} args - Arguments to update many LoanPayments.
     * @example
     * // Update many LoanPayments
     * const loanPayment = await prisma.loanPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoanPayments and only return the `id`
     * const loanPaymentWithIdOnly = await prisma.loanPayment.updateManyAndReturn({
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
    updateManyAndReturn<T extends LoanPaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, LoanPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoanPayment.
     * @param {LoanPaymentUpsertArgs} args - Arguments to update or create a LoanPayment.
     * @example
     * // Update or create a LoanPayment
     * const loanPayment = await prisma.loanPayment.upsert({
     *   create: {
     *     // ... data to create a LoanPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoanPayment we want to update
     *   }
     * })
     */
    upsert<T extends LoanPaymentUpsertArgs>(args: SelectSubset<T, LoanPaymentUpsertArgs<ExtArgs>>): Prisma__LoanPaymentClient<$Result.GetResult<Prisma.$LoanPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoanPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanPaymentCountArgs} args - Arguments to filter LoanPayments to count.
     * @example
     * // Count the number of LoanPayments
     * const count = await prisma.loanPayment.count({
     *   where: {
     *     // ... the filter for the LoanPayments we want to count
     *   }
     * })
    **/
    count<T extends LoanPaymentCountArgs>(
      args?: Subset<T, LoanPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoanPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoanPaymentAggregateArgs>(args: Subset<T, LoanPaymentAggregateArgs>): Prisma.PrismaPromise<GetLoanPaymentAggregateType<T>>

    /**
     * Group by LoanPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanPaymentGroupByArgs} args - Group by arguments.
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
      T extends LoanPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoanPaymentGroupByArgs['orderBy'] }
        : { orderBy?: LoanPaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoanPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoanPayment model
   */
  readonly fields: LoanPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoanPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoanPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loan<T extends LoanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoanDefaultArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LoanPayment model
   */
  interface LoanPaymentFieldRefs {
    readonly id: FieldRef<"LoanPayment", 'String'>
    readonly loanId: FieldRef<"LoanPayment", 'String'>
    readonly amount: FieldRef<"LoanPayment", 'Float'>
    readonly paymentDate: FieldRef<"LoanPayment", 'DateTime'>
    readonly receiptNo: FieldRef<"LoanPayment", 'String'>
    readonly status: FieldRef<"LoanPayment", 'String'>
    readonly createdAt: FieldRef<"LoanPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"LoanPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoanPayment findUnique
   */
  export type LoanPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanPayment
     */
    select?: LoanPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanPayment
     */
    omit?: LoanPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanPaymentInclude<ExtArgs> | null
    /**
     * Filter, which LoanPayment to fetch.
     */
    where: LoanPaymentWhereUniqueInput
  }

  /**
   * LoanPayment findUniqueOrThrow
   */
  export type LoanPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanPayment
     */
    select?: LoanPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanPayment
     */
    omit?: LoanPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanPaymentInclude<ExtArgs> | null
    /**
     * Filter, which LoanPayment to fetch.
     */
    where: LoanPaymentWhereUniqueInput
  }

  /**
   * LoanPayment findFirst
   */
  export type LoanPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanPayment
     */
    select?: LoanPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanPayment
     */
    omit?: LoanPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanPaymentInclude<ExtArgs> | null
    /**
     * Filter, which LoanPayment to fetch.
     */
    where?: LoanPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanPayments to fetch.
     */
    orderBy?: LoanPaymentOrderByWithRelationInput | LoanPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanPayments.
     */
    cursor?: LoanPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanPayments.
     */
    distinct?: LoanPaymentScalarFieldEnum | LoanPaymentScalarFieldEnum[]
  }

  /**
   * LoanPayment findFirstOrThrow
   */
  export type LoanPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanPayment
     */
    select?: LoanPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanPayment
     */
    omit?: LoanPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanPaymentInclude<ExtArgs> | null
    /**
     * Filter, which LoanPayment to fetch.
     */
    where?: LoanPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanPayments to fetch.
     */
    orderBy?: LoanPaymentOrderByWithRelationInput | LoanPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanPayments.
     */
    cursor?: LoanPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanPayments.
     */
    distinct?: LoanPaymentScalarFieldEnum | LoanPaymentScalarFieldEnum[]
  }

  /**
   * LoanPayment findMany
   */
  export type LoanPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanPayment
     */
    select?: LoanPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanPayment
     */
    omit?: LoanPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanPaymentInclude<ExtArgs> | null
    /**
     * Filter, which LoanPayments to fetch.
     */
    where?: LoanPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanPayments to fetch.
     */
    orderBy?: LoanPaymentOrderByWithRelationInput | LoanPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoanPayments.
     */
    cursor?: LoanPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanPayments.
     */
    distinct?: LoanPaymentScalarFieldEnum | LoanPaymentScalarFieldEnum[]
  }

  /**
   * LoanPayment create
   */
  export type LoanPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanPayment
     */
    select?: LoanPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanPayment
     */
    omit?: LoanPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a LoanPayment.
     */
    data: XOR<LoanPaymentCreateInput, LoanPaymentUncheckedCreateInput>
  }

  /**
   * LoanPayment createMany
   */
  export type LoanPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoanPayments.
     */
    data: LoanPaymentCreateManyInput | LoanPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoanPayment createManyAndReturn
   */
  export type LoanPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanPayment
     */
    select?: LoanPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanPayment
     */
    omit?: LoanPaymentOmit<ExtArgs> | null
    /**
     * The data used to create many LoanPayments.
     */
    data: LoanPaymentCreateManyInput | LoanPaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoanPayment update
   */
  export type LoanPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanPayment
     */
    select?: LoanPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanPayment
     */
    omit?: LoanPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a LoanPayment.
     */
    data: XOR<LoanPaymentUpdateInput, LoanPaymentUncheckedUpdateInput>
    /**
     * Choose, which LoanPayment to update.
     */
    where: LoanPaymentWhereUniqueInput
  }

  /**
   * LoanPayment updateMany
   */
  export type LoanPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoanPayments.
     */
    data: XOR<LoanPaymentUpdateManyMutationInput, LoanPaymentUncheckedUpdateManyInput>
    /**
     * Filter which LoanPayments to update
     */
    where?: LoanPaymentWhereInput
    /**
     * Limit how many LoanPayments to update.
     */
    limit?: number
  }

  /**
   * LoanPayment updateManyAndReturn
   */
  export type LoanPaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanPayment
     */
    select?: LoanPaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanPayment
     */
    omit?: LoanPaymentOmit<ExtArgs> | null
    /**
     * The data used to update LoanPayments.
     */
    data: XOR<LoanPaymentUpdateManyMutationInput, LoanPaymentUncheckedUpdateManyInput>
    /**
     * Filter which LoanPayments to update
     */
    where?: LoanPaymentWhereInput
    /**
     * Limit how many LoanPayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanPaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoanPayment upsert
   */
  export type LoanPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanPayment
     */
    select?: LoanPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanPayment
     */
    omit?: LoanPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the LoanPayment to update in case it exists.
     */
    where: LoanPaymentWhereUniqueInput
    /**
     * In case the LoanPayment found by the `where` argument doesn't exist, create a new LoanPayment with this data.
     */
    create: XOR<LoanPaymentCreateInput, LoanPaymentUncheckedCreateInput>
    /**
     * In case the LoanPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoanPaymentUpdateInput, LoanPaymentUncheckedUpdateInput>
  }

  /**
   * LoanPayment delete
   */
  export type LoanPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanPayment
     */
    select?: LoanPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanPayment
     */
    omit?: LoanPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanPaymentInclude<ExtArgs> | null
    /**
     * Filter which LoanPayment to delete.
     */
    where: LoanPaymentWhereUniqueInput
  }

  /**
   * LoanPayment deleteMany
   */
  export type LoanPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanPayments to delete
     */
    where?: LoanPaymentWhereInput
    /**
     * Limit how many LoanPayments to delete.
     */
    limit?: number
  }

  /**
   * LoanPayment without action
   */
  export type LoanPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanPayment
     */
    select?: LoanPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanPayment
     */
    omit?: LoanPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanPaymentInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    amount: number | null
    description: string | null
    reference: string | null
    status: string | null
    receiptNo: string | null
    processedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    amount: number | null
    description: string | null
    reference: string | null
    status: string | null
    receiptNo: string | null
    processedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    amount: number
    description: number
    reference: number
    status: number
    receiptNo: number
    processedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    reference?: true
    status?: true
    receiptNo?: true
    processedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    reference?: true
    status?: true
    receiptNo?: true
    processedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    reference?: true
    status?: true
    receiptNo?: true
    processedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    userId: string
    type: string
    amount: number
    description: string | null
    reference: string | null
    status: string
    receiptNo: string | null
    processedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    reference?: boolean
    status?: boolean
    receiptNo?: boolean
    processedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    reference?: boolean
    status?: boolean
    receiptNo?: boolean
    processedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    reference?: boolean
    status?: boolean
    receiptNo?: boolean
    processedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    reference?: boolean
    status?: boolean
    receiptNo?: boolean
    processedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "amount" | "description" | "reference" | "status" | "receiptNo" | "processedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      amount: number
      description: string | null
      reference: string | null
      status: string
      receiptNo: string | null
      processedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly type: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly reference: FieldRef<"Transaction", 'String'>
    readonly status: FieldRef<"Transaction", 'String'>
    readonly receiptNo: FieldRef<"Transaction", 'String'>
    readonly processedBy: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Contribution
   */

  export type AggregateContribution = {
    _count: ContributionCountAggregateOutputType | null
    _avg: ContributionAvgAggregateOutputType | null
    _sum: ContributionSumAggregateOutputType | null
    _min: ContributionMinAggregateOutputType | null
    _max: ContributionMaxAggregateOutputType | null
  }

  export type ContributionAvgAggregateOutputType = {
    amount: number | null
  }

  export type ContributionSumAggregateOutputType = {
    amount: number | null
  }

  export type ContributionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    month: Date | null
    amount: number | null
    paidDate: Date | null
    status: string | null
    receiptNo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContributionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    month: Date | null
    amount: number | null
    paidDate: Date | null
    status: string | null
    receiptNo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContributionCountAggregateOutputType = {
    id: number
    userId: number
    month: number
    amount: number
    paidDate: number
    status: number
    receiptNo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContributionAvgAggregateInputType = {
    amount?: true
  }

  export type ContributionSumAggregateInputType = {
    amount?: true
  }

  export type ContributionMinAggregateInputType = {
    id?: true
    userId?: true
    month?: true
    amount?: true
    paidDate?: true
    status?: true
    receiptNo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContributionMaxAggregateInputType = {
    id?: true
    userId?: true
    month?: true
    amount?: true
    paidDate?: true
    status?: true
    receiptNo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContributionCountAggregateInputType = {
    id?: true
    userId?: true
    month?: true
    amount?: true
    paidDate?: true
    status?: true
    receiptNo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contribution to aggregate.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contributions
    **/
    _count?: true | ContributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContributionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContributionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContributionMaxAggregateInputType
  }

  export type GetContributionAggregateType<T extends ContributionAggregateArgs> = {
        [P in keyof T & keyof AggregateContribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContribution[P]>
      : GetScalarType<T[P], AggregateContribution[P]>
  }




  export type ContributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributionWhereInput
    orderBy?: ContributionOrderByWithAggregationInput | ContributionOrderByWithAggregationInput[]
    by: ContributionScalarFieldEnum[] | ContributionScalarFieldEnum
    having?: ContributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContributionCountAggregateInputType | true
    _avg?: ContributionAvgAggregateInputType
    _sum?: ContributionSumAggregateInputType
    _min?: ContributionMinAggregateInputType
    _max?: ContributionMaxAggregateInputType
  }

  export type ContributionGroupByOutputType = {
    id: string
    userId: string
    month: Date
    amount: number
    paidDate: Date
    status: string
    receiptNo: string
    createdAt: Date
    updatedAt: Date
    _count: ContributionCountAggregateOutputType | null
    _avg: ContributionAvgAggregateOutputType | null
    _sum: ContributionSumAggregateOutputType | null
    _min: ContributionMinAggregateOutputType | null
    _max: ContributionMaxAggregateOutputType | null
  }

  type GetContributionGroupByPayload<T extends ContributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContributionGroupByOutputType[P]>
            : GetScalarType<T[P], ContributionGroupByOutputType[P]>
        }
      >
    >


  export type ContributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    month?: boolean
    amount?: boolean
    paidDate?: boolean
    status?: boolean
    receiptNo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contribution"]>

  export type ContributionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    month?: boolean
    amount?: boolean
    paidDate?: boolean
    status?: boolean
    receiptNo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contribution"]>

  export type ContributionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    month?: boolean
    amount?: boolean
    paidDate?: boolean
    status?: boolean
    receiptNo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contribution"]>

  export type ContributionSelectScalar = {
    id?: boolean
    userId?: boolean
    month?: boolean
    amount?: boolean
    paidDate?: boolean
    status?: boolean
    receiptNo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContributionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "month" | "amount" | "paidDate" | "status" | "receiptNo" | "createdAt" | "updatedAt", ExtArgs["result"]["contribution"]>
  export type ContributionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContributionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContributionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contribution"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      month: Date
      amount: number
      paidDate: Date
      status: string
      receiptNo: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contribution"]>
    composites: {}
  }

  type ContributionGetPayload<S extends boolean | null | undefined | ContributionDefaultArgs> = $Result.GetResult<Prisma.$ContributionPayload, S>

  type ContributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContributionCountAggregateInputType | true
    }

  export interface ContributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contribution'], meta: { name: 'Contribution' } }
    /**
     * Find zero or one Contribution that matches the filter.
     * @param {ContributionFindUniqueArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContributionFindUniqueArgs>(args: SelectSubset<T, ContributionFindUniqueArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContributionFindUniqueOrThrowArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContributionFindUniqueOrThrowArgs>(args: SelectSubset<T, ContributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionFindFirstArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContributionFindFirstArgs>(args?: SelectSubset<T, ContributionFindFirstArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionFindFirstOrThrowArgs} args - Arguments to find a Contribution
     * @example
     * // Get one Contribution
     * const contribution = await prisma.contribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContributionFindFirstOrThrowArgs>(args?: SelectSubset<T, ContributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contributions
     * const contributions = await prisma.contribution.findMany()
     * 
     * // Get first 10 Contributions
     * const contributions = await prisma.contribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contributionWithIdOnly = await prisma.contribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContributionFindManyArgs>(args?: SelectSubset<T, ContributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contribution.
     * @param {ContributionCreateArgs} args - Arguments to create a Contribution.
     * @example
     * // Create one Contribution
     * const Contribution = await prisma.contribution.create({
     *   data: {
     *     // ... data to create a Contribution
     *   }
     * })
     * 
     */
    create<T extends ContributionCreateArgs>(args: SelectSubset<T, ContributionCreateArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contributions.
     * @param {ContributionCreateManyArgs} args - Arguments to create many Contributions.
     * @example
     * // Create many Contributions
     * const contribution = await prisma.contribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContributionCreateManyArgs>(args?: SelectSubset<T, ContributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contributions and returns the data saved in the database.
     * @param {ContributionCreateManyAndReturnArgs} args - Arguments to create many Contributions.
     * @example
     * // Create many Contributions
     * const contribution = await prisma.contribution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contributions and only return the `id`
     * const contributionWithIdOnly = await prisma.contribution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContributionCreateManyAndReturnArgs>(args?: SelectSubset<T, ContributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contribution.
     * @param {ContributionDeleteArgs} args - Arguments to delete one Contribution.
     * @example
     * // Delete one Contribution
     * const Contribution = await prisma.contribution.delete({
     *   where: {
     *     // ... filter to delete one Contribution
     *   }
     * })
     * 
     */
    delete<T extends ContributionDeleteArgs>(args: SelectSubset<T, ContributionDeleteArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contribution.
     * @param {ContributionUpdateArgs} args - Arguments to update one Contribution.
     * @example
     * // Update one Contribution
     * const contribution = await prisma.contribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContributionUpdateArgs>(args: SelectSubset<T, ContributionUpdateArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contributions.
     * @param {ContributionDeleteManyArgs} args - Arguments to filter Contributions to delete.
     * @example
     * // Delete a few Contributions
     * const { count } = await prisma.contribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContributionDeleteManyArgs>(args?: SelectSubset<T, ContributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contributions
     * const contribution = await prisma.contribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContributionUpdateManyArgs>(args: SelectSubset<T, ContributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contributions and returns the data updated in the database.
     * @param {ContributionUpdateManyAndReturnArgs} args - Arguments to update many Contributions.
     * @example
     * // Update many Contributions
     * const contribution = await prisma.contribution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contributions and only return the `id`
     * const contributionWithIdOnly = await prisma.contribution.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContributionUpdateManyAndReturnArgs>(args: SelectSubset<T, ContributionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contribution.
     * @param {ContributionUpsertArgs} args - Arguments to update or create a Contribution.
     * @example
     * // Update or create a Contribution
     * const contribution = await prisma.contribution.upsert({
     *   create: {
     *     // ... data to create a Contribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contribution we want to update
     *   }
     * })
     */
    upsert<T extends ContributionUpsertArgs>(args: SelectSubset<T, ContributionUpsertArgs<ExtArgs>>): Prisma__ContributionClient<$Result.GetResult<Prisma.$ContributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionCountArgs} args - Arguments to filter Contributions to count.
     * @example
     * // Count the number of Contributions
     * const count = await prisma.contribution.count({
     *   where: {
     *     // ... the filter for the Contributions we want to count
     *   }
     * })
    **/
    count<T extends ContributionCountArgs>(
      args?: Subset<T, ContributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContributionAggregateArgs>(args: Subset<T, ContributionAggregateArgs>): Prisma.PrismaPromise<GetContributionAggregateType<T>>

    /**
     * Group by Contribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributionGroupByArgs} args - Group by arguments.
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
      T extends ContributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContributionGroupByArgs['orderBy'] }
        : { orderBy?: ContributionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contribution model
   */
  readonly fields: ContributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Contribution model
   */
  interface ContributionFieldRefs {
    readonly id: FieldRef<"Contribution", 'String'>
    readonly userId: FieldRef<"Contribution", 'String'>
    readonly month: FieldRef<"Contribution", 'DateTime'>
    readonly amount: FieldRef<"Contribution", 'Float'>
    readonly paidDate: FieldRef<"Contribution", 'DateTime'>
    readonly status: FieldRef<"Contribution", 'String'>
    readonly receiptNo: FieldRef<"Contribution", 'String'>
    readonly createdAt: FieldRef<"Contribution", 'DateTime'>
    readonly updatedAt: FieldRef<"Contribution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contribution findUnique
   */
  export type ContributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where: ContributionWhereUniqueInput
  }

  /**
   * Contribution findUniqueOrThrow
   */
  export type ContributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where: ContributionWhereUniqueInput
  }

  /**
   * Contribution findFirst
   */
  export type ContributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contributions.
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contributions.
     */
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Contribution findFirstOrThrow
   */
  export type ContributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contribution to fetch.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contributions.
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contributions.
     */
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Contribution findMany
   */
  export type ContributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter, which Contributions to fetch.
     */
    where?: ContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributions to fetch.
     */
    orderBy?: ContributionOrderByWithRelationInput | ContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contributions.
     */
    cursor?: ContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contributions.
     */
    distinct?: ContributionScalarFieldEnum | ContributionScalarFieldEnum[]
  }

  /**
   * Contribution create
   */
  export type ContributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * The data needed to create a Contribution.
     */
    data: XOR<ContributionCreateInput, ContributionUncheckedCreateInput>
  }

  /**
   * Contribution createMany
   */
  export type ContributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contributions.
     */
    data: ContributionCreateManyInput | ContributionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contribution createManyAndReturn
   */
  export type ContributionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * The data used to create many Contributions.
     */
    data: ContributionCreateManyInput | ContributionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contribution update
   */
  export type ContributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * The data needed to update a Contribution.
     */
    data: XOR<ContributionUpdateInput, ContributionUncheckedUpdateInput>
    /**
     * Choose, which Contribution to update.
     */
    where: ContributionWhereUniqueInput
  }

  /**
   * Contribution updateMany
   */
  export type ContributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contributions.
     */
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyInput>
    /**
     * Filter which Contributions to update
     */
    where?: ContributionWhereInput
    /**
     * Limit how many Contributions to update.
     */
    limit?: number
  }

  /**
   * Contribution updateManyAndReturn
   */
  export type ContributionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * The data used to update Contributions.
     */
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyInput>
    /**
     * Filter which Contributions to update
     */
    where?: ContributionWhereInput
    /**
     * Limit how many Contributions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contribution upsert
   */
  export type ContributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * The filter to search for the Contribution to update in case it exists.
     */
    where: ContributionWhereUniqueInput
    /**
     * In case the Contribution found by the `where` argument doesn't exist, create a new Contribution with this data.
     */
    create: XOR<ContributionCreateInput, ContributionUncheckedCreateInput>
    /**
     * In case the Contribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContributionUpdateInput, ContributionUncheckedUpdateInput>
  }

  /**
   * Contribution delete
   */
  export type ContributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
    /**
     * Filter which Contribution to delete.
     */
    where: ContributionWhereUniqueInput
  }

  /**
   * Contribution deleteMany
   */
  export type ContributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contributions to delete
     */
    where?: ContributionWhereInput
    /**
     * Limit how many Contributions to delete.
     */
    limit?: number
  }

  /**
   * Contribution without action
   */
  export type ContributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contribution
     */
    select?: ContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contribution
     */
    omit?: ContributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributionInclude<ExtArgs> | null
  }


  /**
   * Model Guarantor
   */

  export type AggregateGuarantor = {
    _count: GuarantorCountAggregateOutputType | null
    _min: GuarantorMinAggregateOutputType | null
    _max: GuarantorMaxAggregateOutputType | null
  }

  export type GuarantorMinAggregateOutputType = {
    id: string | null
    userId: string | null
    loanId: string | null
    fullName: string | null
    phone: string | null
    email: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuarantorMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    loanId: string | null
    fullName: string | null
    phone: string | null
    email: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuarantorCountAggregateOutputType = {
    id: number
    userId: number
    loanId: number
    fullName: number
    phone: number
    email: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuarantorMinAggregateInputType = {
    id?: true
    userId?: true
    loanId?: true
    fullName?: true
    phone?: true
    email?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuarantorMaxAggregateInputType = {
    id?: true
    userId?: true
    loanId?: true
    fullName?: true
    phone?: true
    email?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuarantorCountAggregateInputType = {
    id?: true
    userId?: true
    loanId?: true
    fullName?: true
    phone?: true
    email?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuarantorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guarantor to aggregate.
     */
    where?: GuarantorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guarantors to fetch.
     */
    orderBy?: GuarantorOrderByWithRelationInput | GuarantorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuarantorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guarantors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guarantors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guarantors
    **/
    _count?: true | GuarantorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuarantorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuarantorMaxAggregateInputType
  }

  export type GetGuarantorAggregateType<T extends GuarantorAggregateArgs> = {
        [P in keyof T & keyof AggregateGuarantor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuarantor[P]>
      : GetScalarType<T[P], AggregateGuarantor[P]>
  }




  export type GuarantorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuarantorWhereInput
    orderBy?: GuarantorOrderByWithAggregationInput | GuarantorOrderByWithAggregationInput[]
    by: GuarantorScalarFieldEnum[] | GuarantorScalarFieldEnum
    having?: GuarantorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuarantorCountAggregateInputType | true
    _min?: GuarantorMinAggregateInputType
    _max?: GuarantorMaxAggregateInputType
  }

  export type GuarantorGroupByOutputType = {
    id: string
    userId: string
    loanId: string | null
    fullName: string
    phone: string
    email: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: GuarantorCountAggregateOutputType | null
    _min: GuarantorMinAggregateOutputType | null
    _max: GuarantorMaxAggregateOutputType | null
  }

  type GetGuarantorGroupByPayload<T extends GuarantorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuarantorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuarantorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuarantorGroupByOutputType[P]>
            : GetScalarType<T[P], GuarantorGroupByOutputType[P]>
        }
      >
    >


  export type GuarantorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    loanId?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    loan?: boolean | Guarantor$loanArgs<ExtArgs>
  }, ExtArgs["result"]["guarantor"]>

  export type GuarantorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    loanId?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    loan?: boolean | Guarantor$loanArgs<ExtArgs>
  }, ExtArgs["result"]["guarantor"]>

  export type GuarantorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    loanId?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    loan?: boolean | Guarantor$loanArgs<ExtArgs>
  }, ExtArgs["result"]["guarantor"]>

  export type GuarantorSelectScalar = {
    id?: boolean
    userId?: boolean
    loanId?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuarantorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "loanId" | "fullName" | "phone" | "email" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["guarantor"]>
  export type GuarantorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    loan?: boolean | Guarantor$loanArgs<ExtArgs>
  }
  export type GuarantorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    loan?: boolean | Guarantor$loanArgs<ExtArgs>
  }
  export type GuarantorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    loan?: boolean | Guarantor$loanArgs<ExtArgs>
  }

  export type $GuarantorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guarantor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      loan: Prisma.$LoanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      loanId: string | null
      fullName: string
      phone: string
      email: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guarantor"]>
    composites: {}
  }

  type GuarantorGetPayload<S extends boolean | null | undefined | GuarantorDefaultArgs> = $Result.GetResult<Prisma.$GuarantorPayload, S>

  type GuarantorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuarantorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuarantorCountAggregateInputType | true
    }

  export interface GuarantorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guarantor'], meta: { name: 'Guarantor' } }
    /**
     * Find zero or one Guarantor that matches the filter.
     * @param {GuarantorFindUniqueArgs} args - Arguments to find a Guarantor
     * @example
     * // Get one Guarantor
     * const guarantor = await prisma.guarantor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuarantorFindUniqueArgs>(args: SelectSubset<T, GuarantorFindUniqueArgs<ExtArgs>>): Prisma__GuarantorClient<$Result.GetResult<Prisma.$GuarantorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guarantor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuarantorFindUniqueOrThrowArgs} args - Arguments to find a Guarantor
     * @example
     * // Get one Guarantor
     * const guarantor = await prisma.guarantor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuarantorFindUniqueOrThrowArgs>(args: SelectSubset<T, GuarantorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuarantorClient<$Result.GetResult<Prisma.$GuarantorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guarantor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuarantorFindFirstArgs} args - Arguments to find a Guarantor
     * @example
     * // Get one Guarantor
     * const guarantor = await prisma.guarantor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuarantorFindFirstArgs>(args?: SelectSubset<T, GuarantorFindFirstArgs<ExtArgs>>): Prisma__GuarantorClient<$Result.GetResult<Prisma.$GuarantorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guarantor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuarantorFindFirstOrThrowArgs} args - Arguments to find a Guarantor
     * @example
     * // Get one Guarantor
     * const guarantor = await prisma.guarantor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuarantorFindFirstOrThrowArgs>(args?: SelectSubset<T, GuarantorFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuarantorClient<$Result.GetResult<Prisma.$GuarantorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guarantors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuarantorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guarantors
     * const guarantors = await prisma.guarantor.findMany()
     * 
     * // Get first 10 Guarantors
     * const guarantors = await prisma.guarantor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guarantorWithIdOnly = await prisma.guarantor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuarantorFindManyArgs>(args?: SelectSubset<T, GuarantorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuarantorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guarantor.
     * @param {GuarantorCreateArgs} args - Arguments to create a Guarantor.
     * @example
     * // Create one Guarantor
     * const Guarantor = await prisma.guarantor.create({
     *   data: {
     *     // ... data to create a Guarantor
     *   }
     * })
     * 
     */
    create<T extends GuarantorCreateArgs>(args: SelectSubset<T, GuarantorCreateArgs<ExtArgs>>): Prisma__GuarantorClient<$Result.GetResult<Prisma.$GuarantorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guarantors.
     * @param {GuarantorCreateManyArgs} args - Arguments to create many Guarantors.
     * @example
     * // Create many Guarantors
     * const guarantor = await prisma.guarantor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuarantorCreateManyArgs>(args?: SelectSubset<T, GuarantorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guarantors and returns the data saved in the database.
     * @param {GuarantorCreateManyAndReturnArgs} args - Arguments to create many Guarantors.
     * @example
     * // Create many Guarantors
     * const guarantor = await prisma.guarantor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guarantors and only return the `id`
     * const guarantorWithIdOnly = await prisma.guarantor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuarantorCreateManyAndReturnArgs>(args?: SelectSubset<T, GuarantorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuarantorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guarantor.
     * @param {GuarantorDeleteArgs} args - Arguments to delete one Guarantor.
     * @example
     * // Delete one Guarantor
     * const Guarantor = await prisma.guarantor.delete({
     *   where: {
     *     // ... filter to delete one Guarantor
     *   }
     * })
     * 
     */
    delete<T extends GuarantorDeleteArgs>(args: SelectSubset<T, GuarantorDeleteArgs<ExtArgs>>): Prisma__GuarantorClient<$Result.GetResult<Prisma.$GuarantorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guarantor.
     * @param {GuarantorUpdateArgs} args - Arguments to update one Guarantor.
     * @example
     * // Update one Guarantor
     * const guarantor = await prisma.guarantor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuarantorUpdateArgs>(args: SelectSubset<T, GuarantorUpdateArgs<ExtArgs>>): Prisma__GuarantorClient<$Result.GetResult<Prisma.$GuarantorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guarantors.
     * @param {GuarantorDeleteManyArgs} args - Arguments to filter Guarantors to delete.
     * @example
     * // Delete a few Guarantors
     * const { count } = await prisma.guarantor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuarantorDeleteManyArgs>(args?: SelectSubset<T, GuarantorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guarantors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuarantorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guarantors
     * const guarantor = await prisma.guarantor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuarantorUpdateManyArgs>(args: SelectSubset<T, GuarantorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guarantors and returns the data updated in the database.
     * @param {GuarantorUpdateManyAndReturnArgs} args - Arguments to update many Guarantors.
     * @example
     * // Update many Guarantors
     * const guarantor = await prisma.guarantor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guarantors and only return the `id`
     * const guarantorWithIdOnly = await prisma.guarantor.updateManyAndReturn({
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
    updateManyAndReturn<T extends GuarantorUpdateManyAndReturnArgs>(args: SelectSubset<T, GuarantorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuarantorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guarantor.
     * @param {GuarantorUpsertArgs} args - Arguments to update or create a Guarantor.
     * @example
     * // Update or create a Guarantor
     * const guarantor = await prisma.guarantor.upsert({
     *   create: {
     *     // ... data to create a Guarantor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guarantor we want to update
     *   }
     * })
     */
    upsert<T extends GuarantorUpsertArgs>(args: SelectSubset<T, GuarantorUpsertArgs<ExtArgs>>): Prisma__GuarantorClient<$Result.GetResult<Prisma.$GuarantorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guarantors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuarantorCountArgs} args - Arguments to filter Guarantors to count.
     * @example
     * // Count the number of Guarantors
     * const count = await prisma.guarantor.count({
     *   where: {
     *     // ... the filter for the Guarantors we want to count
     *   }
     * })
    **/
    count<T extends GuarantorCountArgs>(
      args?: Subset<T, GuarantorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuarantorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guarantor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuarantorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuarantorAggregateArgs>(args: Subset<T, GuarantorAggregateArgs>): Prisma.PrismaPromise<GetGuarantorAggregateType<T>>

    /**
     * Group by Guarantor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuarantorGroupByArgs} args - Group by arguments.
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
      T extends GuarantorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuarantorGroupByArgs['orderBy'] }
        : { orderBy?: GuarantorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuarantorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuarantorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guarantor model
   */
  readonly fields: GuarantorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guarantor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuarantorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    loan<T extends Guarantor$loanArgs<ExtArgs> = {}>(args?: Subset<T, Guarantor$loanArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Guarantor model
   */
  interface GuarantorFieldRefs {
    readonly id: FieldRef<"Guarantor", 'String'>
    readonly userId: FieldRef<"Guarantor", 'String'>
    readonly loanId: FieldRef<"Guarantor", 'String'>
    readonly fullName: FieldRef<"Guarantor", 'String'>
    readonly phone: FieldRef<"Guarantor", 'String'>
    readonly email: FieldRef<"Guarantor", 'String'>
    readonly status: FieldRef<"Guarantor", 'String'>
    readonly createdAt: FieldRef<"Guarantor", 'DateTime'>
    readonly updatedAt: FieldRef<"Guarantor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guarantor findUnique
   */
  export type GuarantorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guarantor
     */
    select?: GuarantorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guarantor
     */
    omit?: GuarantorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuarantorInclude<ExtArgs> | null
    /**
     * Filter, which Guarantor to fetch.
     */
    where: GuarantorWhereUniqueInput
  }

  /**
   * Guarantor findUniqueOrThrow
   */
  export type GuarantorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guarantor
     */
    select?: GuarantorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guarantor
     */
    omit?: GuarantorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuarantorInclude<ExtArgs> | null
    /**
     * Filter, which Guarantor to fetch.
     */
    where: GuarantorWhereUniqueInput
  }

  /**
   * Guarantor findFirst
   */
  export type GuarantorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guarantor
     */
    select?: GuarantorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guarantor
     */
    omit?: GuarantorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuarantorInclude<ExtArgs> | null
    /**
     * Filter, which Guarantor to fetch.
     */
    where?: GuarantorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guarantors to fetch.
     */
    orderBy?: GuarantorOrderByWithRelationInput | GuarantorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guarantors.
     */
    cursor?: GuarantorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guarantors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guarantors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guarantors.
     */
    distinct?: GuarantorScalarFieldEnum | GuarantorScalarFieldEnum[]
  }

  /**
   * Guarantor findFirstOrThrow
   */
  export type GuarantorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guarantor
     */
    select?: GuarantorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guarantor
     */
    omit?: GuarantorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuarantorInclude<ExtArgs> | null
    /**
     * Filter, which Guarantor to fetch.
     */
    where?: GuarantorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guarantors to fetch.
     */
    orderBy?: GuarantorOrderByWithRelationInput | GuarantorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guarantors.
     */
    cursor?: GuarantorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guarantors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guarantors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guarantors.
     */
    distinct?: GuarantorScalarFieldEnum | GuarantorScalarFieldEnum[]
  }

  /**
   * Guarantor findMany
   */
  export type GuarantorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guarantor
     */
    select?: GuarantorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guarantor
     */
    omit?: GuarantorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuarantorInclude<ExtArgs> | null
    /**
     * Filter, which Guarantors to fetch.
     */
    where?: GuarantorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guarantors to fetch.
     */
    orderBy?: GuarantorOrderByWithRelationInput | GuarantorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guarantors.
     */
    cursor?: GuarantorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guarantors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guarantors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guarantors.
     */
    distinct?: GuarantorScalarFieldEnum | GuarantorScalarFieldEnum[]
  }

  /**
   * Guarantor create
   */
  export type GuarantorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guarantor
     */
    select?: GuarantorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guarantor
     */
    omit?: GuarantorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuarantorInclude<ExtArgs> | null
    /**
     * The data needed to create a Guarantor.
     */
    data: XOR<GuarantorCreateInput, GuarantorUncheckedCreateInput>
  }

  /**
   * Guarantor createMany
   */
  export type GuarantorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guarantors.
     */
    data: GuarantorCreateManyInput | GuarantorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guarantor createManyAndReturn
   */
  export type GuarantorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guarantor
     */
    select?: GuarantorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guarantor
     */
    omit?: GuarantorOmit<ExtArgs> | null
    /**
     * The data used to create many Guarantors.
     */
    data: GuarantorCreateManyInput | GuarantorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuarantorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guarantor update
   */
  export type GuarantorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guarantor
     */
    select?: GuarantorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guarantor
     */
    omit?: GuarantorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuarantorInclude<ExtArgs> | null
    /**
     * The data needed to update a Guarantor.
     */
    data: XOR<GuarantorUpdateInput, GuarantorUncheckedUpdateInput>
    /**
     * Choose, which Guarantor to update.
     */
    where: GuarantorWhereUniqueInput
  }

  /**
   * Guarantor updateMany
   */
  export type GuarantorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guarantors.
     */
    data: XOR<GuarantorUpdateManyMutationInput, GuarantorUncheckedUpdateManyInput>
    /**
     * Filter which Guarantors to update
     */
    where?: GuarantorWhereInput
    /**
     * Limit how many Guarantors to update.
     */
    limit?: number
  }

  /**
   * Guarantor updateManyAndReturn
   */
  export type GuarantorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guarantor
     */
    select?: GuarantorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guarantor
     */
    omit?: GuarantorOmit<ExtArgs> | null
    /**
     * The data used to update Guarantors.
     */
    data: XOR<GuarantorUpdateManyMutationInput, GuarantorUncheckedUpdateManyInput>
    /**
     * Filter which Guarantors to update
     */
    where?: GuarantorWhereInput
    /**
     * Limit how many Guarantors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuarantorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guarantor upsert
   */
  export type GuarantorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guarantor
     */
    select?: GuarantorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guarantor
     */
    omit?: GuarantorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuarantorInclude<ExtArgs> | null
    /**
     * The filter to search for the Guarantor to update in case it exists.
     */
    where: GuarantorWhereUniqueInput
    /**
     * In case the Guarantor found by the `where` argument doesn't exist, create a new Guarantor with this data.
     */
    create: XOR<GuarantorCreateInput, GuarantorUncheckedCreateInput>
    /**
     * In case the Guarantor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuarantorUpdateInput, GuarantorUncheckedUpdateInput>
  }

  /**
   * Guarantor delete
   */
  export type GuarantorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guarantor
     */
    select?: GuarantorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guarantor
     */
    omit?: GuarantorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuarantorInclude<ExtArgs> | null
    /**
     * Filter which Guarantor to delete.
     */
    where: GuarantorWhereUniqueInput
  }

  /**
   * Guarantor deleteMany
   */
  export type GuarantorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guarantors to delete
     */
    where?: GuarantorWhereInput
    /**
     * Limit how many Guarantors to delete.
     */
    limit?: number
  }

  /**
   * Guarantor.loan
   */
  export type Guarantor$loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    where?: LoanWhereInput
  }

  /**
   * Guarantor without action
   */
  export type GuarantorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guarantor
     */
    select?: GuarantorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guarantor
     */
    omit?: GuarantorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuarantorInclude<ExtArgs> | null
  }


  /**
   * Model Withdrawal
   */

  export type AggregateWithdrawal = {
    _count: WithdrawalCountAggregateOutputType | null
    _avg: WithdrawalAvgAggregateOutputType | null
    _sum: WithdrawalSumAggregateOutputType | null
    _min: WithdrawalMinAggregateOutputType | null
    _max: WithdrawalMaxAggregateOutputType | null
  }

  export type WithdrawalAvgAggregateOutputType = {
    amount: number | null
  }

  export type WithdrawalSumAggregateOutputType = {
    amount: number | null
  }

  export type WithdrawalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    method: string | null
    phoneNumber: string | null
    bankName: string | null
    accountNumber: string | null
    accountName: string | null
    status: string | null
    reference: string | null
    processedBy: string | null
    processedAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WithdrawalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    method: string | null
    phoneNumber: string | null
    bankName: string | null
    accountNumber: string | null
    accountName: string | null
    status: string | null
    reference: string | null
    processedBy: string | null
    processedAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WithdrawalCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    method: number
    phoneNumber: number
    bankName: number
    accountNumber: number
    accountName: number
    status: number
    reference: number
    processedBy: number
    processedAt: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WithdrawalAvgAggregateInputType = {
    amount?: true
  }

  export type WithdrawalSumAggregateInputType = {
    amount?: true
  }

  export type WithdrawalMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    method?: true
    phoneNumber?: true
    bankName?: true
    accountNumber?: true
    accountName?: true
    status?: true
    reference?: true
    processedBy?: true
    processedAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WithdrawalMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    method?: true
    phoneNumber?: true
    bankName?: true
    accountNumber?: true
    accountName?: true
    status?: true
    reference?: true
    processedBy?: true
    processedAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WithdrawalCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    method?: true
    phoneNumber?: true
    bankName?: true
    accountNumber?: true
    accountName?: true
    status?: true
    reference?: true
    processedBy?: true
    processedAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WithdrawalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Withdrawal to aggregate.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Withdrawals
    **/
    _count?: true | WithdrawalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawalMaxAggregateInputType
  }

  export type GetWithdrawalAggregateType<T extends WithdrawalAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawal[P]>
      : GetScalarType<T[P], AggregateWithdrawal[P]>
  }




  export type WithdrawalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawalWhereInput
    orderBy?: WithdrawalOrderByWithAggregationInput | WithdrawalOrderByWithAggregationInput[]
    by: WithdrawalScalarFieldEnum[] | WithdrawalScalarFieldEnum
    having?: WithdrawalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawalCountAggregateInputType | true
    _avg?: WithdrawalAvgAggregateInputType
    _sum?: WithdrawalSumAggregateInputType
    _min?: WithdrawalMinAggregateInputType
    _max?: WithdrawalMaxAggregateInputType
  }

  export type WithdrawalGroupByOutputType = {
    id: string
    userId: string
    amount: number
    method: string
    phoneNumber: string | null
    bankName: string | null
    accountNumber: string | null
    accountName: string | null
    status: string
    reference: string | null
    processedBy: string | null
    processedAt: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: WithdrawalCountAggregateOutputType | null
    _avg: WithdrawalAvgAggregateOutputType | null
    _sum: WithdrawalSumAggregateOutputType | null
    _min: WithdrawalMinAggregateOutputType | null
    _max: WithdrawalMaxAggregateOutputType | null
  }

  type GetWithdrawalGroupByPayload<T extends WithdrawalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawalGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawalGroupByOutputType[P]>
        }
      >
    >


  export type WithdrawalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    method?: boolean
    phoneNumber?: boolean
    bankName?: boolean
    accountNumber?: boolean
    accountName?: boolean
    status?: boolean
    reference?: boolean
    processedBy?: boolean
    processedAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawal"]>

  export type WithdrawalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    method?: boolean
    phoneNumber?: boolean
    bankName?: boolean
    accountNumber?: boolean
    accountName?: boolean
    status?: boolean
    reference?: boolean
    processedBy?: boolean
    processedAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawal"]>

  export type WithdrawalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    method?: boolean
    phoneNumber?: boolean
    bankName?: boolean
    accountNumber?: boolean
    accountName?: boolean
    status?: boolean
    reference?: boolean
    processedBy?: boolean
    processedAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawal"]>

  export type WithdrawalSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    method?: boolean
    phoneNumber?: boolean
    bankName?: boolean
    accountNumber?: boolean
    accountName?: boolean
    status?: boolean
    reference?: boolean
    processedBy?: boolean
    processedAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WithdrawalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "method" | "phoneNumber" | "bankName" | "accountNumber" | "accountName" | "status" | "reference" | "processedBy" | "processedAt" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["withdrawal"]>
  export type WithdrawalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WithdrawalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WithdrawalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WithdrawalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Withdrawal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      method: string
      phoneNumber: string | null
      bankName: string | null
      accountNumber: string | null
      accountName: string | null
      status: string
      reference: string | null
      processedBy: string | null
      processedAt: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["withdrawal"]>
    composites: {}
  }

  type WithdrawalGetPayload<S extends boolean | null | undefined | WithdrawalDefaultArgs> = $Result.GetResult<Prisma.$WithdrawalPayload, S>

  type WithdrawalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WithdrawalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WithdrawalCountAggregateInputType | true
    }

  export interface WithdrawalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Withdrawal'], meta: { name: 'Withdrawal' } }
    /**
     * Find zero or one Withdrawal that matches the filter.
     * @param {WithdrawalFindUniqueArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WithdrawalFindUniqueArgs>(args: SelectSubset<T, WithdrawalFindUniqueArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Withdrawal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WithdrawalFindUniqueOrThrowArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WithdrawalFindUniqueOrThrowArgs>(args: SelectSubset<T, WithdrawalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Withdrawal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindFirstArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WithdrawalFindFirstArgs>(args?: SelectSubset<T, WithdrawalFindFirstArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Withdrawal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindFirstOrThrowArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WithdrawalFindFirstOrThrowArgs>(args?: SelectSubset<T, WithdrawalFindFirstOrThrowArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Withdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Withdrawals
     * const withdrawals = await prisma.withdrawal.findMany()
     * 
     * // Get first 10 Withdrawals
     * const withdrawals = await prisma.withdrawal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawalWithIdOnly = await prisma.withdrawal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WithdrawalFindManyArgs>(args?: SelectSubset<T, WithdrawalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Withdrawal.
     * @param {WithdrawalCreateArgs} args - Arguments to create a Withdrawal.
     * @example
     * // Create one Withdrawal
     * const Withdrawal = await prisma.withdrawal.create({
     *   data: {
     *     // ... data to create a Withdrawal
     *   }
     * })
     * 
     */
    create<T extends WithdrawalCreateArgs>(args: SelectSubset<T, WithdrawalCreateArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Withdrawals.
     * @param {WithdrawalCreateManyArgs} args - Arguments to create many Withdrawals.
     * @example
     * // Create many Withdrawals
     * const withdrawal = await prisma.withdrawal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WithdrawalCreateManyArgs>(args?: SelectSubset<T, WithdrawalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Withdrawals and returns the data saved in the database.
     * @param {WithdrawalCreateManyAndReturnArgs} args - Arguments to create many Withdrawals.
     * @example
     * // Create many Withdrawals
     * const withdrawal = await prisma.withdrawal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Withdrawals and only return the `id`
     * const withdrawalWithIdOnly = await prisma.withdrawal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WithdrawalCreateManyAndReturnArgs>(args?: SelectSubset<T, WithdrawalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Withdrawal.
     * @param {WithdrawalDeleteArgs} args - Arguments to delete one Withdrawal.
     * @example
     * // Delete one Withdrawal
     * const Withdrawal = await prisma.withdrawal.delete({
     *   where: {
     *     // ... filter to delete one Withdrawal
     *   }
     * })
     * 
     */
    delete<T extends WithdrawalDeleteArgs>(args: SelectSubset<T, WithdrawalDeleteArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Withdrawal.
     * @param {WithdrawalUpdateArgs} args - Arguments to update one Withdrawal.
     * @example
     * // Update one Withdrawal
     * const withdrawal = await prisma.withdrawal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WithdrawalUpdateArgs>(args: SelectSubset<T, WithdrawalUpdateArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Withdrawals.
     * @param {WithdrawalDeleteManyArgs} args - Arguments to filter Withdrawals to delete.
     * @example
     * // Delete a few Withdrawals
     * const { count } = await prisma.withdrawal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WithdrawalDeleteManyArgs>(args?: SelectSubset<T, WithdrawalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Withdrawals
     * const withdrawal = await prisma.withdrawal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WithdrawalUpdateManyArgs>(args: SelectSubset<T, WithdrawalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Withdrawals and returns the data updated in the database.
     * @param {WithdrawalUpdateManyAndReturnArgs} args - Arguments to update many Withdrawals.
     * @example
     * // Update many Withdrawals
     * const withdrawal = await prisma.withdrawal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Withdrawals and only return the `id`
     * const withdrawalWithIdOnly = await prisma.withdrawal.updateManyAndReturn({
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
    updateManyAndReturn<T extends WithdrawalUpdateManyAndReturnArgs>(args: SelectSubset<T, WithdrawalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Withdrawal.
     * @param {WithdrawalUpsertArgs} args - Arguments to update or create a Withdrawal.
     * @example
     * // Update or create a Withdrawal
     * const withdrawal = await prisma.withdrawal.upsert({
     *   create: {
     *     // ... data to create a Withdrawal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Withdrawal we want to update
     *   }
     * })
     */
    upsert<T extends WithdrawalUpsertArgs>(args: SelectSubset<T, WithdrawalUpsertArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalCountArgs} args - Arguments to filter Withdrawals to count.
     * @example
     * // Count the number of Withdrawals
     * const count = await prisma.withdrawal.count({
     *   where: {
     *     // ... the filter for the Withdrawals we want to count
     *   }
     * })
    **/
    count<T extends WithdrawalCountArgs>(
      args?: Subset<T, WithdrawalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WithdrawalAggregateArgs>(args: Subset<T, WithdrawalAggregateArgs>): Prisma.PrismaPromise<GetWithdrawalAggregateType<T>>

    /**
     * Group by Withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalGroupByArgs} args - Group by arguments.
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
      T extends WithdrawalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WithdrawalGroupByArgs['orderBy'] }
        : { orderBy?: WithdrawalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WithdrawalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Withdrawal model
   */
  readonly fields: WithdrawalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Withdrawal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WithdrawalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Withdrawal model
   */
  interface WithdrawalFieldRefs {
    readonly id: FieldRef<"Withdrawal", 'String'>
    readonly userId: FieldRef<"Withdrawal", 'String'>
    readonly amount: FieldRef<"Withdrawal", 'Float'>
    readonly method: FieldRef<"Withdrawal", 'String'>
    readonly phoneNumber: FieldRef<"Withdrawal", 'String'>
    readonly bankName: FieldRef<"Withdrawal", 'String'>
    readonly accountNumber: FieldRef<"Withdrawal", 'String'>
    readonly accountName: FieldRef<"Withdrawal", 'String'>
    readonly status: FieldRef<"Withdrawal", 'String'>
    readonly reference: FieldRef<"Withdrawal", 'String'>
    readonly processedBy: FieldRef<"Withdrawal", 'String'>
    readonly processedAt: FieldRef<"Withdrawal", 'DateTime'>
    readonly notes: FieldRef<"Withdrawal", 'String'>
    readonly createdAt: FieldRef<"Withdrawal", 'DateTime'>
    readonly updatedAt: FieldRef<"Withdrawal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Withdrawal findUnique
   */
  export type WithdrawalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal findUniqueOrThrow
   */
  export type WithdrawalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal findFirst
   */
  export type WithdrawalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Withdrawals.
     */
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal findFirstOrThrow
   */
  export type WithdrawalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Withdrawals.
     */
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal findMany
   */
  export type WithdrawalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawals to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Withdrawals.
     */
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal create
   */
  export type WithdrawalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The data needed to create a Withdrawal.
     */
    data: XOR<WithdrawalCreateInput, WithdrawalUncheckedCreateInput>
  }

  /**
   * Withdrawal createMany
   */
  export type WithdrawalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Withdrawals.
     */
    data: WithdrawalCreateManyInput | WithdrawalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Withdrawal createManyAndReturn
   */
  export type WithdrawalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * The data used to create many Withdrawals.
     */
    data: WithdrawalCreateManyInput | WithdrawalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Withdrawal update
   */
  export type WithdrawalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The data needed to update a Withdrawal.
     */
    data: XOR<WithdrawalUpdateInput, WithdrawalUncheckedUpdateInput>
    /**
     * Choose, which Withdrawal to update.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal updateMany
   */
  export type WithdrawalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Withdrawals.
     */
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyInput>
    /**
     * Filter which Withdrawals to update
     */
    where?: WithdrawalWhereInput
    /**
     * Limit how many Withdrawals to update.
     */
    limit?: number
  }

  /**
   * Withdrawal updateManyAndReturn
   */
  export type WithdrawalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * The data used to update Withdrawals.
     */
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyInput>
    /**
     * Filter which Withdrawals to update
     */
    where?: WithdrawalWhereInput
    /**
     * Limit how many Withdrawals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Withdrawal upsert
   */
  export type WithdrawalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The filter to search for the Withdrawal to update in case it exists.
     */
    where: WithdrawalWhereUniqueInput
    /**
     * In case the Withdrawal found by the `where` argument doesn't exist, create a new Withdrawal with this data.
     */
    create: XOR<WithdrawalCreateInput, WithdrawalUncheckedCreateInput>
    /**
     * In case the Withdrawal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WithdrawalUpdateInput, WithdrawalUncheckedUpdateInput>
  }

  /**
   * Withdrawal delete
   */
  export type WithdrawalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter which Withdrawal to delete.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal deleteMany
   */
  export type WithdrawalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Withdrawals to delete
     */
    where?: WithdrawalWhereInput
    /**
     * Limit how many Withdrawals to delete.
     */
    limit?: number
  }

  /**
   * Withdrawal without action
   */
  export type WithdrawalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
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
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    idNumber: 'idNumber',
    password: 'password',
    memberNumber: 'memberNumber',
    monthlyContribution: 'monthlyContribution',
    shares: 'shares',
    savingsBalance: 'savingsBalance',
    status: 'status',
    role: 'role',
    physicalAddress: 'physicalAddress',
    postalAddress: 'postalAddress',
    idDocument: 'idDocument',
    lastContributionDate: 'lastContributionDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LoanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    interestRate: 'interestRate',
    totalRepayable: 'totalRepayable',
    monthlyInstallment: 'monthlyInstallment',
    termMonths: 'termMonths',
    purpose: 'purpose',
    status: 'status',
    approvalDate: 'approvalDate',
    disbursementDate: 'disbursementDate',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    guarantor1: 'guarantor1',
    guarantor1Phone: 'guarantor1Phone',
    guarantor2: 'guarantor2',
    guarantor2Phone: 'guarantor2Phone'
  };

  export type LoanScalarFieldEnum = (typeof LoanScalarFieldEnum)[keyof typeof LoanScalarFieldEnum]


  export const LoanPaymentScalarFieldEnum: {
    id: 'id',
    loanId: 'loanId',
    amount: 'amount',
    paymentDate: 'paymentDate',
    receiptNo: 'receiptNo',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LoanPaymentScalarFieldEnum = (typeof LoanPaymentScalarFieldEnum)[keyof typeof LoanPaymentScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    amount: 'amount',
    description: 'description',
    reference: 'reference',
    status: 'status',
    receiptNo: 'receiptNo',
    processedBy: 'processedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const ContributionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    month: 'month',
    amount: 'amount',
    paidDate: 'paidDate',
    status: 'status',
    receiptNo: 'receiptNo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContributionScalarFieldEnum = (typeof ContributionScalarFieldEnum)[keyof typeof ContributionScalarFieldEnum]


  export const GuarantorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    loanId: 'loanId',
    fullName: 'fullName',
    phone: 'phone',
    email: 'email',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuarantorScalarFieldEnum = (typeof GuarantorScalarFieldEnum)[keyof typeof GuarantorScalarFieldEnum]


  export const WithdrawalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    method: 'method',
    phoneNumber: 'phoneNumber',
    bankName: 'bankName',
    accountNumber: 'accountNumber',
    accountName: 'accountName',
    status: 'status',
    reference: 'reference',
    processedBy: 'processedBy',
    processedAt: 'processedAt',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WithdrawalScalarFieldEnum = (typeof WithdrawalScalarFieldEnum)[keyof typeof WithdrawalScalarFieldEnum]


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    idNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    memberNumber?: StringFilter<"User"> | string
    monthlyContribution?: FloatFilter<"User"> | number
    shares?: IntFilter<"User"> | number
    savingsBalance?: FloatFilter<"User"> | number
    status?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    physicalAddress?: StringNullableFilter<"User"> | string | null
    postalAddress?: StringNullableFilter<"User"> | string | null
    idDocument?: StringNullableFilter<"User"> | string | null
    lastContributionDate?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    loans?: LoanListRelationFilter
    transactions?: TransactionListRelationFilter
    contributions?: ContributionListRelationFilter
    guarantors?: GuarantorListRelationFilter
    withdrawals?: WithdrawalListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    idNumber?: SortOrder
    password?: SortOrder
    memberNumber?: SortOrder
    monthlyContribution?: SortOrder
    shares?: SortOrder
    savingsBalance?: SortOrder
    status?: SortOrder
    role?: SortOrder
    physicalAddress?: SortOrderInput | SortOrder
    postalAddress?: SortOrderInput | SortOrder
    idDocument?: SortOrderInput | SortOrder
    lastContributionDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loans?: LoanOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    contributions?: ContributionOrderByRelationAggregateInput
    guarantors?: GuarantorOrderByRelationAggregateInput
    withdrawals?: WithdrawalOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    idNumber?: string
    memberNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    monthlyContribution?: FloatFilter<"User"> | number
    shares?: IntFilter<"User"> | number
    savingsBalance?: FloatFilter<"User"> | number
    status?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    physicalAddress?: StringNullableFilter<"User"> | string | null
    postalAddress?: StringNullableFilter<"User"> | string | null
    idDocument?: StringNullableFilter<"User"> | string | null
    lastContributionDate?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    loans?: LoanListRelationFilter
    transactions?: TransactionListRelationFilter
    contributions?: ContributionListRelationFilter
    guarantors?: GuarantorListRelationFilter
    withdrawals?: WithdrawalListRelationFilter
  }, "id" | "email" | "idNumber" | "memberNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    idNumber?: SortOrder
    password?: SortOrder
    memberNumber?: SortOrder
    monthlyContribution?: SortOrder
    shares?: SortOrder
    savingsBalance?: SortOrder
    status?: SortOrder
    role?: SortOrder
    physicalAddress?: SortOrderInput | SortOrder
    postalAddress?: SortOrderInput | SortOrder
    idDocument?: SortOrderInput | SortOrder
    lastContributionDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    idNumber?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    memberNumber?: StringWithAggregatesFilter<"User"> | string
    monthlyContribution?: FloatWithAggregatesFilter<"User"> | number
    shares?: IntWithAggregatesFilter<"User"> | number
    savingsBalance?: FloatWithAggregatesFilter<"User"> | number
    status?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    physicalAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    postalAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    idDocument?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastContributionDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LoanWhereInput = {
    AND?: LoanWhereInput | LoanWhereInput[]
    OR?: LoanWhereInput[]
    NOT?: LoanWhereInput | LoanWhereInput[]
    id?: StringFilter<"Loan"> | string
    userId?: StringFilter<"Loan"> | string
    amount?: FloatFilter<"Loan"> | number
    interestRate?: FloatFilter<"Loan"> | number
    totalRepayable?: FloatFilter<"Loan"> | number
    monthlyInstallment?: FloatFilter<"Loan"> | number
    termMonths?: IntFilter<"Loan"> | number
    purpose?: StringNullableFilter<"Loan"> | string | null
    status?: StringFilter<"Loan"> | string
    approvalDate?: DateTimeNullableFilter<"Loan"> | Date | string | null
    disbursementDate?: DateTimeNullableFilter<"Loan"> | Date | string | null
    dueDate?: DateTimeFilter<"Loan"> | Date | string
    createdAt?: DateTimeFilter<"Loan"> | Date | string
    updatedAt?: DateTimeFilter<"Loan"> | Date | string
    guarantor1?: StringNullableFilter<"Loan"> | string | null
    guarantor1Phone?: StringNullableFilter<"Loan"> | string | null
    guarantor2?: StringNullableFilter<"Loan"> | string | null
    guarantor2Phone?: StringNullableFilter<"Loan"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: LoanPaymentListRelationFilter
    guarantors?: GuarantorListRelationFilter
  }

  export type LoanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    totalRepayable?: SortOrder
    monthlyInstallment?: SortOrder
    termMonths?: SortOrder
    purpose?: SortOrderInput | SortOrder
    status?: SortOrder
    approvalDate?: SortOrderInput | SortOrder
    disbursementDate?: SortOrderInput | SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guarantor1?: SortOrderInput | SortOrder
    guarantor1Phone?: SortOrderInput | SortOrder
    guarantor2?: SortOrderInput | SortOrder
    guarantor2Phone?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    payments?: LoanPaymentOrderByRelationAggregateInput
    guarantors?: GuarantorOrderByRelationAggregateInput
  }

  export type LoanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoanWhereInput | LoanWhereInput[]
    OR?: LoanWhereInput[]
    NOT?: LoanWhereInput | LoanWhereInput[]
    userId?: StringFilter<"Loan"> | string
    amount?: FloatFilter<"Loan"> | number
    interestRate?: FloatFilter<"Loan"> | number
    totalRepayable?: FloatFilter<"Loan"> | number
    monthlyInstallment?: FloatFilter<"Loan"> | number
    termMonths?: IntFilter<"Loan"> | number
    purpose?: StringNullableFilter<"Loan"> | string | null
    status?: StringFilter<"Loan"> | string
    approvalDate?: DateTimeNullableFilter<"Loan"> | Date | string | null
    disbursementDate?: DateTimeNullableFilter<"Loan"> | Date | string | null
    dueDate?: DateTimeFilter<"Loan"> | Date | string
    createdAt?: DateTimeFilter<"Loan"> | Date | string
    updatedAt?: DateTimeFilter<"Loan"> | Date | string
    guarantor1?: StringNullableFilter<"Loan"> | string | null
    guarantor1Phone?: StringNullableFilter<"Loan"> | string | null
    guarantor2?: StringNullableFilter<"Loan"> | string | null
    guarantor2Phone?: StringNullableFilter<"Loan"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: LoanPaymentListRelationFilter
    guarantors?: GuarantorListRelationFilter
  }, "id">

  export type LoanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    totalRepayable?: SortOrder
    monthlyInstallment?: SortOrder
    termMonths?: SortOrder
    purpose?: SortOrderInput | SortOrder
    status?: SortOrder
    approvalDate?: SortOrderInput | SortOrder
    disbursementDate?: SortOrderInput | SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guarantor1?: SortOrderInput | SortOrder
    guarantor1Phone?: SortOrderInput | SortOrder
    guarantor2?: SortOrderInput | SortOrder
    guarantor2Phone?: SortOrderInput | SortOrder
    _count?: LoanCountOrderByAggregateInput
    _avg?: LoanAvgOrderByAggregateInput
    _max?: LoanMaxOrderByAggregateInput
    _min?: LoanMinOrderByAggregateInput
    _sum?: LoanSumOrderByAggregateInput
  }

  export type LoanScalarWhereWithAggregatesInput = {
    AND?: LoanScalarWhereWithAggregatesInput | LoanScalarWhereWithAggregatesInput[]
    OR?: LoanScalarWhereWithAggregatesInput[]
    NOT?: LoanScalarWhereWithAggregatesInput | LoanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Loan"> | string
    userId?: StringWithAggregatesFilter<"Loan"> | string
    amount?: FloatWithAggregatesFilter<"Loan"> | number
    interestRate?: FloatWithAggregatesFilter<"Loan"> | number
    totalRepayable?: FloatWithAggregatesFilter<"Loan"> | number
    monthlyInstallment?: FloatWithAggregatesFilter<"Loan"> | number
    termMonths?: IntWithAggregatesFilter<"Loan"> | number
    purpose?: StringNullableWithAggregatesFilter<"Loan"> | string | null
    status?: StringWithAggregatesFilter<"Loan"> | string
    approvalDate?: DateTimeNullableWithAggregatesFilter<"Loan"> | Date | string | null
    disbursementDate?: DateTimeNullableWithAggregatesFilter<"Loan"> | Date | string | null
    dueDate?: DateTimeWithAggregatesFilter<"Loan"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Loan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Loan"> | Date | string
    guarantor1?: StringNullableWithAggregatesFilter<"Loan"> | string | null
    guarantor1Phone?: StringNullableWithAggregatesFilter<"Loan"> | string | null
    guarantor2?: StringNullableWithAggregatesFilter<"Loan"> | string | null
    guarantor2Phone?: StringNullableWithAggregatesFilter<"Loan"> | string | null
  }

  export type LoanPaymentWhereInput = {
    AND?: LoanPaymentWhereInput | LoanPaymentWhereInput[]
    OR?: LoanPaymentWhereInput[]
    NOT?: LoanPaymentWhereInput | LoanPaymentWhereInput[]
    id?: StringFilter<"LoanPayment"> | string
    loanId?: StringFilter<"LoanPayment"> | string
    amount?: FloatFilter<"LoanPayment"> | number
    paymentDate?: DateTimeFilter<"LoanPayment"> | Date | string
    receiptNo?: StringFilter<"LoanPayment"> | string
    status?: StringFilter<"LoanPayment"> | string
    createdAt?: DateTimeFilter<"LoanPayment"> | Date | string
    updatedAt?: DateTimeFilter<"LoanPayment"> | Date | string
    loan?: XOR<LoanScalarRelationFilter, LoanWhereInput>
  }

  export type LoanPaymentOrderByWithRelationInput = {
    id?: SortOrder
    loanId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    receiptNo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loan?: LoanOrderByWithRelationInput
  }

  export type LoanPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    receiptNo?: string
    AND?: LoanPaymentWhereInput | LoanPaymentWhereInput[]
    OR?: LoanPaymentWhereInput[]
    NOT?: LoanPaymentWhereInput | LoanPaymentWhereInput[]
    loanId?: StringFilter<"LoanPayment"> | string
    amount?: FloatFilter<"LoanPayment"> | number
    paymentDate?: DateTimeFilter<"LoanPayment"> | Date | string
    status?: StringFilter<"LoanPayment"> | string
    createdAt?: DateTimeFilter<"LoanPayment"> | Date | string
    updatedAt?: DateTimeFilter<"LoanPayment"> | Date | string
    loan?: XOR<LoanScalarRelationFilter, LoanWhereInput>
  }, "id" | "receiptNo">

  export type LoanPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    loanId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    receiptNo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LoanPaymentCountOrderByAggregateInput
    _avg?: LoanPaymentAvgOrderByAggregateInput
    _max?: LoanPaymentMaxOrderByAggregateInput
    _min?: LoanPaymentMinOrderByAggregateInput
    _sum?: LoanPaymentSumOrderByAggregateInput
  }

  export type LoanPaymentScalarWhereWithAggregatesInput = {
    AND?: LoanPaymentScalarWhereWithAggregatesInput | LoanPaymentScalarWhereWithAggregatesInput[]
    OR?: LoanPaymentScalarWhereWithAggregatesInput[]
    NOT?: LoanPaymentScalarWhereWithAggregatesInput | LoanPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoanPayment"> | string
    loanId?: StringWithAggregatesFilter<"LoanPayment"> | string
    amount?: FloatWithAggregatesFilter<"LoanPayment"> | number
    paymentDate?: DateTimeWithAggregatesFilter<"LoanPayment"> | Date | string
    receiptNo?: StringWithAggregatesFilter<"LoanPayment"> | string
    status?: StringWithAggregatesFilter<"LoanPayment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LoanPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LoanPayment"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    type?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    description?: StringNullableFilter<"Transaction"> | string | null
    reference?: StringNullableFilter<"Transaction"> | string | null
    status?: StringFilter<"Transaction"> | string
    receiptNo?: StringNullableFilter<"Transaction"> | string | null
    processedBy?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    status?: SortOrder
    receiptNo?: SortOrderInput | SortOrder
    processedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    receiptNo?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    type?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    description?: StringNullableFilter<"Transaction"> | string | null
    status?: StringFilter<"Transaction"> | string
    processedBy?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "reference" | "receiptNo">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    status?: SortOrder
    receiptNo?: SortOrderInput | SortOrder
    processedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    type?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    description?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    reference?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    status?: StringWithAggregatesFilter<"Transaction"> | string
    receiptNo?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    processedBy?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type ContributionWhereInput = {
    AND?: ContributionWhereInput | ContributionWhereInput[]
    OR?: ContributionWhereInput[]
    NOT?: ContributionWhereInput | ContributionWhereInput[]
    id?: StringFilter<"Contribution"> | string
    userId?: StringFilter<"Contribution"> | string
    month?: DateTimeFilter<"Contribution"> | Date | string
    amount?: FloatFilter<"Contribution"> | number
    paidDate?: DateTimeFilter<"Contribution"> | Date | string
    status?: StringFilter<"Contribution"> | string
    receiptNo?: StringFilter<"Contribution"> | string
    createdAt?: DateTimeFilter<"Contribution"> | Date | string
    updatedAt?: DateTimeFilter<"Contribution"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ContributionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    amount?: SortOrder
    paidDate?: SortOrder
    status?: SortOrder
    receiptNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ContributionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    receiptNo?: string
    AND?: ContributionWhereInput | ContributionWhereInput[]
    OR?: ContributionWhereInput[]
    NOT?: ContributionWhereInput | ContributionWhereInput[]
    userId?: StringFilter<"Contribution"> | string
    month?: DateTimeFilter<"Contribution"> | Date | string
    amount?: FloatFilter<"Contribution"> | number
    paidDate?: DateTimeFilter<"Contribution"> | Date | string
    status?: StringFilter<"Contribution"> | string
    createdAt?: DateTimeFilter<"Contribution"> | Date | string
    updatedAt?: DateTimeFilter<"Contribution"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "receiptNo">

  export type ContributionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    amount?: SortOrder
    paidDate?: SortOrder
    status?: SortOrder
    receiptNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContributionCountOrderByAggregateInput
    _avg?: ContributionAvgOrderByAggregateInput
    _max?: ContributionMaxOrderByAggregateInput
    _min?: ContributionMinOrderByAggregateInput
    _sum?: ContributionSumOrderByAggregateInput
  }

  export type ContributionScalarWhereWithAggregatesInput = {
    AND?: ContributionScalarWhereWithAggregatesInput | ContributionScalarWhereWithAggregatesInput[]
    OR?: ContributionScalarWhereWithAggregatesInput[]
    NOT?: ContributionScalarWhereWithAggregatesInput | ContributionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contribution"> | string
    userId?: StringWithAggregatesFilter<"Contribution"> | string
    month?: DateTimeWithAggregatesFilter<"Contribution"> | Date | string
    amount?: FloatWithAggregatesFilter<"Contribution"> | number
    paidDate?: DateTimeWithAggregatesFilter<"Contribution"> | Date | string
    status?: StringWithAggregatesFilter<"Contribution"> | string
    receiptNo?: StringWithAggregatesFilter<"Contribution"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contribution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contribution"> | Date | string
  }

  export type GuarantorWhereInput = {
    AND?: GuarantorWhereInput | GuarantorWhereInput[]
    OR?: GuarantorWhereInput[]
    NOT?: GuarantorWhereInput | GuarantorWhereInput[]
    id?: StringFilter<"Guarantor"> | string
    userId?: StringFilter<"Guarantor"> | string
    loanId?: StringNullableFilter<"Guarantor"> | string | null
    fullName?: StringFilter<"Guarantor"> | string
    phone?: StringFilter<"Guarantor"> | string
    email?: StringNullableFilter<"Guarantor"> | string | null
    status?: StringFilter<"Guarantor"> | string
    createdAt?: DateTimeFilter<"Guarantor"> | Date | string
    updatedAt?: DateTimeFilter<"Guarantor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    loan?: XOR<LoanNullableScalarRelationFilter, LoanWhereInput> | null
  }

  export type GuarantorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    loanId?: SortOrderInput | SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    loan?: LoanOrderByWithRelationInput
  }

  export type GuarantorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuarantorWhereInput | GuarantorWhereInput[]
    OR?: GuarantorWhereInput[]
    NOT?: GuarantorWhereInput | GuarantorWhereInput[]
    userId?: StringFilter<"Guarantor"> | string
    loanId?: StringNullableFilter<"Guarantor"> | string | null
    fullName?: StringFilter<"Guarantor"> | string
    phone?: StringFilter<"Guarantor"> | string
    email?: StringNullableFilter<"Guarantor"> | string | null
    status?: StringFilter<"Guarantor"> | string
    createdAt?: DateTimeFilter<"Guarantor"> | Date | string
    updatedAt?: DateTimeFilter<"Guarantor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    loan?: XOR<LoanNullableScalarRelationFilter, LoanWhereInput> | null
  }, "id">

  export type GuarantorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    loanId?: SortOrderInput | SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuarantorCountOrderByAggregateInput
    _max?: GuarantorMaxOrderByAggregateInput
    _min?: GuarantorMinOrderByAggregateInput
  }

  export type GuarantorScalarWhereWithAggregatesInput = {
    AND?: GuarantorScalarWhereWithAggregatesInput | GuarantorScalarWhereWithAggregatesInput[]
    OR?: GuarantorScalarWhereWithAggregatesInput[]
    NOT?: GuarantorScalarWhereWithAggregatesInput | GuarantorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guarantor"> | string
    userId?: StringWithAggregatesFilter<"Guarantor"> | string
    loanId?: StringNullableWithAggregatesFilter<"Guarantor"> | string | null
    fullName?: StringWithAggregatesFilter<"Guarantor"> | string
    phone?: StringWithAggregatesFilter<"Guarantor"> | string
    email?: StringNullableWithAggregatesFilter<"Guarantor"> | string | null
    status?: StringWithAggregatesFilter<"Guarantor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Guarantor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Guarantor"> | Date | string
  }

  export type WithdrawalWhereInput = {
    AND?: WithdrawalWhereInput | WithdrawalWhereInput[]
    OR?: WithdrawalWhereInput[]
    NOT?: WithdrawalWhereInput | WithdrawalWhereInput[]
    id?: StringFilter<"Withdrawal"> | string
    userId?: StringFilter<"Withdrawal"> | string
    amount?: FloatFilter<"Withdrawal"> | number
    method?: StringFilter<"Withdrawal"> | string
    phoneNumber?: StringNullableFilter<"Withdrawal"> | string | null
    bankName?: StringNullableFilter<"Withdrawal"> | string | null
    accountNumber?: StringNullableFilter<"Withdrawal"> | string | null
    accountName?: StringNullableFilter<"Withdrawal"> | string | null
    status?: StringFilter<"Withdrawal"> | string
    reference?: StringNullableFilter<"Withdrawal"> | string | null
    processedBy?: StringNullableFilter<"Withdrawal"> | string | null
    processedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
    notes?: StringNullableFilter<"Withdrawal"> | string | null
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
    updatedAt?: DateTimeFilter<"Withdrawal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WithdrawalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    accountName?: SortOrderInput | SortOrder
    status?: SortOrder
    reference?: SortOrderInput | SortOrder
    processedBy?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WithdrawalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: WithdrawalWhereInput | WithdrawalWhereInput[]
    OR?: WithdrawalWhereInput[]
    NOT?: WithdrawalWhereInput | WithdrawalWhereInput[]
    userId?: StringFilter<"Withdrawal"> | string
    amount?: FloatFilter<"Withdrawal"> | number
    method?: StringFilter<"Withdrawal"> | string
    phoneNumber?: StringNullableFilter<"Withdrawal"> | string | null
    bankName?: StringNullableFilter<"Withdrawal"> | string | null
    accountNumber?: StringNullableFilter<"Withdrawal"> | string | null
    accountName?: StringNullableFilter<"Withdrawal"> | string | null
    status?: StringFilter<"Withdrawal"> | string
    processedBy?: StringNullableFilter<"Withdrawal"> | string | null
    processedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
    notes?: StringNullableFilter<"Withdrawal"> | string | null
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
    updatedAt?: DateTimeFilter<"Withdrawal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "reference">

  export type WithdrawalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    accountName?: SortOrderInput | SortOrder
    status?: SortOrder
    reference?: SortOrderInput | SortOrder
    processedBy?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WithdrawalCountOrderByAggregateInput
    _avg?: WithdrawalAvgOrderByAggregateInput
    _max?: WithdrawalMaxOrderByAggregateInput
    _min?: WithdrawalMinOrderByAggregateInput
    _sum?: WithdrawalSumOrderByAggregateInput
  }

  export type WithdrawalScalarWhereWithAggregatesInput = {
    AND?: WithdrawalScalarWhereWithAggregatesInput | WithdrawalScalarWhereWithAggregatesInput[]
    OR?: WithdrawalScalarWhereWithAggregatesInput[]
    NOT?: WithdrawalScalarWhereWithAggregatesInput | WithdrawalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Withdrawal"> | string
    userId?: StringWithAggregatesFilter<"Withdrawal"> | string
    amount?: FloatWithAggregatesFilter<"Withdrawal"> | number
    method?: StringWithAggregatesFilter<"Withdrawal"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"Withdrawal"> | string | null
    bankName?: StringNullableWithAggregatesFilter<"Withdrawal"> | string | null
    accountNumber?: StringNullableWithAggregatesFilter<"Withdrawal"> | string | null
    accountName?: StringNullableWithAggregatesFilter<"Withdrawal"> | string | null
    status?: StringWithAggregatesFilter<"Withdrawal"> | string
    reference?: StringNullableWithAggregatesFilter<"Withdrawal"> | string | null
    processedBy?: StringNullableWithAggregatesFilter<"Withdrawal"> | string | null
    processedAt?: DateTimeNullableWithAggregatesFilter<"Withdrawal"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Withdrawal"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Withdrawal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Withdrawal"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    idNumber: string
    password: string
    memberNumber: string
    monthlyContribution?: number
    shares?: number
    savingsBalance?: number
    status?: string
    role?: string
    physicalAddress?: string | null
    postalAddress?: string | null
    idDocument?: string | null
    lastContributionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loans?: LoanCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    contributions?: ContributionCreateNestedManyWithoutUserInput
    guarantors?: GuarantorCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    idNumber: string
    password: string
    memberNumber: string
    monthlyContribution?: number
    shares?: number
    savingsBalance?: number
    status?: string
    role?: string
    physicalAddress?: string | null
    postalAddress?: string | null
    idDocument?: string | null
    lastContributionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loans?: LoanUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutUserInput
    guarantors?: GuarantorUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    memberNumber?: StringFieldUpdateOperationsInput | string
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    savingsBalance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    physicalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    idDocument?: NullableStringFieldUpdateOperationsInput | string | null
    lastContributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loans?: LoanUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    contributions?: ContributionUpdateManyWithoutUserNestedInput
    guarantors?: GuarantorUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    memberNumber?: StringFieldUpdateOperationsInput | string
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    savingsBalance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    physicalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    idDocument?: NullableStringFieldUpdateOperationsInput | string | null
    lastContributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutUserNestedInput
    guarantors?: GuarantorUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    idNumber: string
    password: string
    memberNumber: string
    monthlyContribution?: number
    shares?: number
    savingsBalance?: number
    status?: string
    role?: string
    physicalAddress?: string | null
    postalAddress?: string | null
    idDocument?: string | null
    lastContributionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    memberNumber?: StringFieldUpdateOperationsInput | string
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    savingsBalance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    physicalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    idDocument?: NullableStringFieldUpdateOperationsInput | string | null
    lastContributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    memberNumber?: StringFieldUpdateOperationsInput | string
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    savingsBalance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    physicalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    idDocument?: NullableStringFieldUpdateOperationsInput | string | null
    lastContributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanCreateInput = {
    id?: string
    amount: number
    interestRate?: number
    totalRepayable: number
    monthlyInstallment: number
    termMonths?: number
    purpose?: string | null
    status?: string
    approvalDate?: Date | string | null
    disbursementDate?: Date | string | null
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    guarantor1?: string | null
    guarantor1Phone?: string | null
    guarantor2?: string | null
    guarantor2Phone?: string | null
    user: UserCreateNestedOneWithoutLoansInput
    payments?: LoanPaymentCreateNestedManyWithoutLoanInput
    guarantors?: GuarantorCreateNestedManyWithoutLoanInput
  }

  export type LoanUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    interestRate?: number
    totalRepayable: number
    monthlyInstallment: number
    termMonths?: number
    purpose?: string | null
    status?: string
    approvalDate?: Date | string | null
    disbursementDate?: Date | string | null
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    guarantor1?: string | null
    guarantor1Phone?: string | null
    guarantor2?: string | null
    guarantor2Phone?: string | null
    payments?: LoanPaymentUncheckedCreateNestedManyWithoutLoanInput
    guarantors?: GuarantorUncheckedCreateNestedManyWithoutLoanInput
  }

  export type LoanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    totalRepayable?: FloatFieldUpdateOperationsInput | number
    monthlyInstallment?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disbursementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guarantor1?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor1Phone?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2Phone?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutLoansNestedInput
    payments?: LoanPaymentUpdateManyWithoutLoanNestedInput
    guarantors?: GuarantorUpdateManyWithoutLoanNestedInput
  }

  export type LoanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    totalRepayable?: FloatFieldUpdateOperationsInput | number
    monthlyInstallment?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disbursementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guarantor1?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor1Phone?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2Phone?: NullableStringFieldUpdateOperationsInput | string | null
    payments?: LoanPaymentUncheckedUpdateManyWithoutLoanNestedInput
    guarantors?: GuarantorUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type LoanCreateManyInput = {
    id?: string
    userId: string
    amount: number
    interestRate?: number
    totalRepayable: number
    monthlyInstallment: number
    termMonths?: number
    purpose?: string | null
    status?: string
    approvalDate?: Date | string | null
    disbursementDate?: Date | string | null
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    guarantor1?: string | null
    guarantor1Phone?: string | null
    guarantor2?: string | null
    guarantor2Phone?: string | null
  }

  export type LoanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    totalRepayable?: FloatFieldUpdateOperationsInput | number
    monthlyInstallment?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disbursementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guarantor1?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor1Phone?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2Phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    totalRepayable?: FloatFieldUpdateOperationsInput | number
    monthlyInstallment?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disbursementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guarantor1?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor1Phone?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2Phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoanPaymentCreateInput = {
    id?: string
    amount: number
    paymentDate?: Date | string
    receiptNo: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    loan: LoanCreateNestedOneWithoutPaymentsInput
  }

  export type LoanPaymentUncheckedCreateInput = {
    id?: string
    loanId: string
    amount: number
    paymentDate?: Date | string
    receiptNo: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loan?: LoanUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type LoanPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanPaymentCreateManyInput = {
    id?: string
    loanId: string
    amount: number
    paymentDate?: Date | string
    receiptNo: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    type: string
    amount: number
    description?: string | null
    reference?: string | null
    status?: string
    receiptNo?: string | null
    processedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    amount: number
    description?: string | null
    reference?: string | null
    status?: string
    receiptNo?: string | null
    processedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    receiptNo?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    receiptNo?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    userId: string
    type: string
    amount: number
    description?: string | null
    reference?: string | null
    status?: string
    receiptNo?: string | null
    processedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    receiptNo?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    receiptNo?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionCreateInput = {
    id?: string
    month: Date | string
    amount: number
    paidDate?: Date | string
    status?: string
    receiptNo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContributionsInput
  }

  export type ContributionUncheckedCreateInput = {
    id?: string
    userId: string
    month: Date | string
    amount: number
    paidDate?: Date | string
    status?: string
    receiptNo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    receiptNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContributionsNestedInput
  }

  export type ContributionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    receiptNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionCreateManyInput = {
    id?: string
    userId: string
    month: Date | string
    amount: number
    paidDate?: Date | string
    status?: string
    receiptNo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    receiptNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    receiptNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuarantorCreateInput = {
    id?: string
    fullName: string
    phone: string
    email?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGuarantorsInput
    loan?: LoanCreateNestedOneWithoutGuarantorsInput
  }

  export type GuarantorUncheckedCreateInput = {
    id?: string
    userId: string
    loanId?: string | null
    fullName: string
    phone: string
    email?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuarantorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGuarantorsNestedInput
    loan?: LoanUpdateOneWithoutGuarantorsNestedInput
  }

  export type GuarantorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    loanId?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuarantorCreateManyInput = {
    id?: string
    userId: string
    loanId?: string | null
    fullName: string
    phone: string
    email?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuarantorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuarantorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    loanId?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalCreateInput = {
    id?: string
    amount: number
    method: string
    phoneNumber?: string | null
    bankName?: string | null
    accountNumber?: string | null
    accountName?: string | null
    status?: string
    reference?: string | null
    processedBy?: string | null
    processedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWithdrawalsInput
  }

  export type WithdrawalUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    method: string
    phoneNumber?: string | null
    bankName?: string | null
    accountNumber?: string | null
    accountName?: string | null
    status?: string
    reference?: string | null
    processedBy?: string | null
    processedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWithdrawalsNestedInput
  }

  export type WithdrawalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalCreateManyInput = {
    id?: string
    userId: string
    amount: number
    method: string
    phoneNumber?: string | null
    bankName?: string | null
    accountNumber?: string | null
    accountName?: string | null
    status?: string
    reference?: string | null
    processedBy?: string | null
    processedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type LoanListRelationFilter = {
    every?: LoanWhereInput
    some?: LoanWhereInput
    none?: LoanWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type ContributionListRelationFilter = {
    every?: ContributionWhereInput
    some?: ContributionWhereInput
    none?: ContributionWhereInput
  }

  export type GuarantorListRelationFilter = {
    every?: GuarantorWhereInput
    some?: GuarantorWhereInput
    none?: GuarantorWhereInput
  }

  export type WithdrawalListRelationFilter = {
    every?: WithdrawalWhereInput
    some?: WithdrawalWhereInput
    none?: WithdrawalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LoanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContributionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuarantorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WithdrawalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    idNumber?: SortOrder
    password?: SortOrder
    memberNumber?: SortOrder
    monthlyContribution?: SortOrder
    shares?: SortOrder
    savingsBalance?: SortOrder
    status?: SortOrder
    role?: SortOrder
    physicalAddress?: SortOrder
    postalAddress?: SortOrder
    idDocument?: SortOrder
    lastContributionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    monthlyContribution?: SortOrder
    shares?: SortOrder
    savingsBalance?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    idNumber?: SortOrder
    password?: SortOrder
    memberNumber?: SortOrder
    monthlyContribution?: SortOrder
    shares?: SortOrder
    savingsBalance?: SortOrder
    status?: SortOrder
    role?: SortOrder
    physicalAddress?: SortOrder
    postalAddress?: SortOrder
    idDocument?: SortOrder
    lastContributionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    idNumber?: SortOrder
    password?: SortOrder
    memberNumber?: SortOrder
    monthlyContribution?: SortOrder
    shares?: SortOrder
    savingsBalance?: SortOrder
    status?: SortOrder
    role?: SortOrder
    physicalAddress?: SortOrder
    postalAddress?: SortOrder
    idDocument?: SortOrder
    lastContributionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    monthlyContribution?: SortOrder
    shares?: SortOrder
    savingsBalance?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LoanPaymentListRelationFilter = {
    every?: LoanPaymentWhereInput
    some?: LoanPaymentWhereInput
    none?: LoanPaymentWhereInput
  }

  export type LoanPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    totalRepayable?: SortOrder
    monthlyInstallment?: SortOrder
    termMonths?: SortOrder
    purpose?: SortOrder
    status?: SortOrder
    approvalDate?: SortOrder
    disbursementDate?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guarantor1?: SortOrder
    guarantor1Phone?: SortOrder
    guarantor2?: SortOrder
    guarantor2Phone?: SortOrder
  }

  export type LoanAvgOrderByAggregateInput = {
    amount?: SortOrder
    interestRate?: SortOrder
    totalRepayable?: SortOrder
    monthlyInstallment?: SortOrder
    termMonths?: SortOrder
  }

  export type LoanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    totalRepayable?: SortOrder
    monthlyInstallment?: SortOrder
    termMonths?: SortOrder
    purpose?: SortOrder
    status?: SortOrder
    approvalDate?: SortOrder
    disbursementDate?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guarantor1?: SortOrder
    guarantor1Phone?: SortOrder
    guarantor2?: SortOrder
    guarantor2Phone?: SortOrder
  }

  export type LoanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    totalRepayable?: SortOrder
    monthlyInstallment?: SortOrder
    termMonths?: SortOrder
    purpose?: SortOrder
    status?: SortOrder
    approvalDate?: SortOrder
    disbursementDate?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guarantor1?: SortOrder
    guarantor1Phone?: SortOrder
    guarantor2?: SortOrder
    guarantor2Phone?: SortOrder
  }

  export type LoanSumOrderByAggregateInput = {
    amount?: SortOrder
    interestRate?: SortOrder
    totalRepayable?: SortOrder
    monthlyInstallment?: SortOrder
    termMonths?: SortOrder
  }

  export type LoanScalarRelationFilter = {
    is?: LoanWhereInput
    isNot?: LoanWhereInput
  }

  export type LoanPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    loanId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    receiptNo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanPaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type LoanPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    loanId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    receiptNo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    loanId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    receiptNo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanPaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    receiptNo?: SortOrder
    processedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    receiptNo?: SortOrder
    processedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    receiptNo?: SortOrder
    processedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ContributionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    amount?: SortOrder
    paidDate?: SortOrder
    status?: SortOrder
    receiptNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContributionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ContributionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    amount?: SortOrder
    paidDate?: SortOrder
    status?: SortOrder
    receiptNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContributionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    amount?: SortOrder
    paidDate?: SortOrder
    status?: SortOrder
    receiptNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContributionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type LoanNullableScalarRelationFilter = {
    is?: LoanWhereInput | null
    isNot?: LoanWhereInput | null
  }

  export type GuarantorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    loanId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuarantorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    loanId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuarantorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    loanId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    phoneNumber?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    processedBy?: SortOrder
    processedAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawalAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WithdrawalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    phoneNumber?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    processedBy?: SortOrder
    processedAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    phoneNumber?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    processedBy?: SortOrder
    processedAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WithdrawalSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type LoanCreateNestedManyWithoutUserInput = {
    create?: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput> | LoanCreateWithoutUserInput[] | LoanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutUserInput | LoanCreateOrConnectWithoutUserInput[]
    createMany?: LoanCreateManyUserInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ContributionCreateNestedManyWithoutUserInput = {
    create?: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput> | ContributionCreateWithoutUserInput[] | ContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutUserInput | ContributionCreateOrConnectWithoutUserInput[]
    createMany?: ContributionCreateManyUserInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type GuarantorCreateNestedManyWithoutUserInput = {
    create?: XOR<GuarantorCreateWithoutUserInput, GuarantorUncheckedCreateWithoutUserInput> | GuarantorCreateWithoutUserInput[] | GuarantorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuarantorCreateOrConnectWithoutUserInput | GuarantorCreateOrConnectWithoutUserInput[]
    createMany?: GuarantorCreateManyUserInputEnvelope
    connect?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
  }

  export type WithdrawalCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
  }

  export type LoanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput> | LoanCreateWithoutUserInput[] | LoanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutUserInput | LoanCreateOrConnectWithoutUserInput[]
    createMany?: LoanCreateManyUserInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ContributionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput> | ContributionCreateWithoutUserInput[] | ContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutUserInput | ContributionCreateOrConnectWithoutUserInput[]
    createMany?: ContributionCreateManyUserInputEnvelope
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
  }

  export type GuarantorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GuarantorCreateWithoutUserInput, GuarantorUncheckedCreateWithoutUserInput> | GuarantorCreateWithoutUserInput[] | GuarantorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuarantorCreateOrConnectWithoutUserInput | GuarantorCreateOrConnectWithoutUserInput[]
    createMany?: GuarantorCreateManyUserInputEnvelope
    connect?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
  }

  export type WithdrawalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LoanUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput> | LoanCreateWithoutUserInput[] | LoanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutUserInput | LoanCreateOrConnectWithoutUserInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutUserInput | LoanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoanCreateManyUserInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutUserInput | LoanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutUserInput | LoanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ContributionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput> | ContributionCreateWithoutUserInput[] | ContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutUserInput | ContributionCreateOrConnectWithoutUserInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutUserInput | ContributionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContributionCreateManyUserInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutUserInput | ContributionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutUserInput | ContributionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type GuarantorUpdateManyWithoutUserNestedInput = {
    create?: XOR<GuarantorCreateWithoutUserInput, GuarantorUncheckedCreateWithoutUserInput> | GuarantorCreateWithoutUserInput[] | GuarantorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuarantorCreateOrConnectWithoutUserInput | GuarantorCreateOrConnectWithoutUserInput[]
    upsert?: GuarantorUpsertWithWhereUniqueWithoutUserInput | GuarantorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GuarantorCreateManyUserInputEnvelope
    set?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
    disconnect?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
    delete?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
    connect?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
    update?: GuarantorUpdateWithWhereUniqueWithoutUserInput | GuarantorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GuarantorUpdateManyWithWhereWithoutUserInput | GuarantorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GuarantorScalarWhereInput | GuarantorScalarWhereInput[]
  }

  export type WithdrawalUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawalUpsertWithWhereUniqueWithoutUserInput | WithdrawalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    set?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    disconnect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    delete?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    update?: WithdrawalUpdateWithWhereUniqueWithoutUserInput | WithdrawalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawalUpdateManyWithWhereWithoutUserInput | WithdrawalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
  }

  export type LoanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput> | LoanCreateWithoutUserInput[] | LoanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutUserInput | LoanCreateOrConnectWithoutUserInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutUserInput | LoanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoanCreateManyUserInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutUserInput | LoanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutUserInput | LoanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ContributionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput> | ContributionCreateWithoutUserInput[] | ContributionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContributionCreateOrConnectWithoutUserInput | ContributionCreateOrConnectWithoutUserInput[]
    upsert?: ContributionUpsertWithWhereUniqueWithoutUserInput | ContributionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContributionCreateManyUserInputEnvelope
    set?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    disconnect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    delete?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    connect?: ContributionWhereUniqueInput | ContributionWhereUniqueInput[]
    update?: ContributionUpdateWithWhereUniqueWithoutUserInput | ContributionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContributionUpdateManyWithWhereWithoutUserInput | ContributionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
  }

  export type GuarantorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GuarantorCreateWithoutUserInput, GuarantorUncheckedCreateWithoutUserInput> | GuarantorCreateWithoutUserInput[] | GuarantorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuarantorCreateOrConnectWithoutUserInput | GuarantorCreateOrConnectWithoutUserInput[]
    upsert?: GuarantorUpsertWithWhereUniqueWithoutUserInput | GuarantorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GuarantorCreateManyUserInputEnvelope
    set?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
    disconnect?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
    delete?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
    connect?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
    update?: GuarantorUpdateWithWhereUniqueWithoutUserInput | GuarantorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GuarantorUpdateManyWithWhereWithoutUserInput | GuarantorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GuarantorScalarWhereInput | GuarantorScalarWhereInput[]
  }

  export type WithdrawalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawalUpsertWithWhereUniqueWithoutUserInput | WithdrawalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    set?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    disconnect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    delete?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    update?: WithdrawalUpdateWithWhereUniqueWithoutUserInput | WithdrawalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawalUpdateManyWithWhereWithoutUserInput | WithdrawalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLoansInput = {
    create?: XOR<UserCreateWithoutLoansInput, UserUncheckedCreateWithoutLoansInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoansInput
    connect?: UserWhereUniqueInput
  }

  export type LoanPaymentCreateNestedManyWithoutLoanInput = {
    create?: XOR<LoanPaymentCreateWithoutLoanInput, LoanPaymentUncheckedCreateWithoutLoanInput> | LoanPaymentCreateWithoutLoanInput[] | LoanPaymentUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: LoanPaymentCreateOrConnectWithoutLoanInput | LoanPaymentCreateOrConnectWithoutLoanInput[]
    createMany?: LoanPaymentCreateManyLoanInputEnvelope
    connect?: LoanPaymentWhereUniqueInput | LoanPaymentWhereUniqueInput[]
  }

  export type GuarantorCreateNestedManyWithoutLoanInput = {
    create?: XOR<GuarantorCreateWithoutLoanInput, GuarantorUncheckedCreateWithoutLoanInput> | GuarantorCreateWithoutLoanInput[] | GuarantorUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: GuarantorCreateOrConnectWithoutLoanInput | GuarantorCreateOrConnectWithoutLoanInput[]
    createMany?: GuarantorCreateManyLoanInputEnvelope
    connect?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
  }

  export type LoanPaymentUncheckedCreateNestedManyWithoutLoanInput = {
    create?: XOR<LoanPaymentCreateWithoutLoanInput, LoanPaymentUncheckedCreateWithoutLoanInput> | LoanPaymentCreateWithoutLoanInput[] | LoanPaymentUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: LoanPaymentCreateOrConnectWithoutLoanInput | LoanPaymentCreateOrConnectWithoutLoanInput[]
    createMany?: LoanPaymentCreateManyLoanInputEnvelope
    connect?: LoanPaymentWhereUniqueInput | LoanPaymentWhereUniqueInput[]
  }

  export type GuarantorUncheckedCreateNestedManyWithoutLoanInput = {
    create?: XOR<GuarantorCreateWithoutLoanInput, GuarantorUncheckedCreateWithoutLoanInput> | GuarantorCreateWithoutLoanInput[] | GuarantorUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: GuarantorCreateOrConnectWithoutLoanInput | GuarantorCreateOrConnectWithoutLoanInput[]
    createMany?: GuarantorCreateManyLoanInputEnvelope
    connect?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutLoansNestedInput = {
    create?: XOR<UserCreateWithoutLoansInput, UserUncheckedCreateWithoutLoansInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoansInput
    upsert?: UserUpsertWithoutLoansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLoansInput, UserUpdateWithoutLoansInput>, UserUncheckedUpdateWithoutLoansInput>
  }

  export type LoanPaymentUpdateManyWithoutLoanNestedInput = {
    create?: XOR<LoanPaymentCreateWithoutLoanInput, LoanPaymentUncheckedCreateWithoutLoanInput> | LoanPaymentCreateWithoutLoanInput[] | LoanPaymentUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: LoanPaymentCreateOrConnectWithoutLoanInput | LoanPaymentCreateOrConnectWithoutLoanInput[]
    upsert?: LoanPaymentUpsertWithWhereUniqueWithoutLoanInput | LoanPaymentUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: LoanPaymentCreateManyLoanInputEnvelope
    set?: LoanPaymentWhereUniqueInput | LoanPaymentWhereUniqueInput[]
    disconnect?: LoanPaymentWhereUniqueInput | LoanPaymentWhereUniqueInput[]
    delete?: LoanPaymentWhereUniqueInput | LoanPaymentWhereUniqueInput[]
    connect?: LoanPaymentWhereUniqueInput | LoanPaymentWhereUniqueInput[]
    update?: LoanPaymentUpdateWithWhereUniqueWithoutLoanInput | LoanPaymentUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: LoanPaymentUpdateManyWithWhereWithoutLoanInput | LoanPaymentUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: LoanPaymentScalarWhereInput | LoanPaymentScalarWhereInput[]
  }

  export type GuarantorUpdateManyWithoutLoanNestedInput = {
    create?: XOR<GuarantorCreateWithoutLoanInput, GuarantorUncheckedCreateWithoutLoanInput> | GuarantorCreateWithoutLoanInput[] | GuarantorUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: GuarantorCreateOrConnectWithoutLoanInput | GuarantorCreateOrConnectWithoutLoanInput[]
    upsert?: GuarantorUpsertWithWhereUniqueWithoutLoanInput | GuarantorUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: GuarantorCreateManyLoanInputEnvelope
    set?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
    disconnect?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
    delete?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
    connect?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
    update?: GuarantorUpdateWithWhereUniqueWithoutLoanInput | GuarantorUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: GuarantorUpdateManyWithWhereWithoutLoanInput | GuarantorUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: GuarantorScalarWhereInput | GuarantorScalarWhereInput[]
  }

  export type LoanPaymentUncheckedUpdateManyWithoutLoanNestedInput = {
    create?: XOR<LoanPaymentCreateWithoutLoanInput, LoanPaymentUncheckedCreateWithoutLoanInput> | LoanPaymentCreateWithoutLoanInput[] | LoanPaymentUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: LoanPaymentCreateOrConnectWithoutLoanInput | LoanPaymentCreateOrConnectWithoutLoanInput[]
    upsert?: LoanPaymentUpsertWithWhereUniqueWithoutLoanInput | LoanPaymentUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: LoanPaymentCreateManyLoanInputEnvelope
    set?: LoanPaymentWhereUniqueInput | LoanPaymentWhereUniqueInput[]
    disconnect?: LoanPaymentWhereUniqueInput | LoanPaymentWhereUniqueInput[]
    delete?: LoanPaymentWhereUniqueInput | LoanPaymentWhereUniqueInput[]
    connect?: LoanPaymentWhereUniqueInput | LoanPaymentWhereUniqueInput[]
    update?: LoanPaymentUpdateWithWhereUniqueWithoutLoanInput | LoanPaymentUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: LoanPaymentUpdateManyWithWhereWithoutLoanInput | LoanPaymentUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: LoanPaymentScalarWhereInput | LoanPaymentScalarWhereInput[]
  }

  export type GuarantorUncheckedUpdateManyWithoutLoanNestedInput = {
    create?: XOR<GuarantorCreateWithoutLoanInput, GuarantorUncheckedCreateWithoutLoanInput> | GuarantorCreateWithoutLoanInput[] | GuarantorUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: GuarantorCreateOrConnectWithoutLoanInput | GuarantorCreateOrConnectWithoutLoanInput[]
    upsert?: GuarantorUpsertWithWhereUniqueWithoutLoanInput | GuarantorUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: GuarantorCreateManyLoanInputEnvelope
    set?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
    disconnect?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
    delete?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
    connect?: GuarantorWhereUniqueInput | GuarantorWhereUniqueInput[]
    update?: GuarantorUpdateWithWhereUniqueWithoutLoanInput | GuarantorUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: GuarantorUpdateManyWithWhereWithoutLoanInput | GuarantorUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: GuarantorScalarWhereInput | GuarantorScalarWhereInput[]
  }

  export type LoanCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<LoanCreateWithoutPaymentsInput, LoanUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: LoanCreateOrConnectWithoutPaymentsInput
    connect?: LoanWhereUniqueInput
  }

  export type LoanUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<LoanCreateWithoutPaymentsInput, LoanUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: LoanCreateOrConnectWithoutPaymentsInput
    upsert?: LoanUpsertWithoutPaymentsInput
    connect?: LoanWhereUniqueInput
    update?: XOR<XOR<LoanUpdateToOneWithWhereWithoutPaymentsInput, LoanUpdateWithoutPaymentsInput>, LoanUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutContributionsInput = {
    create?: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContributionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutContributionsNestedInput = {
    create?: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContributionsInput
    upsert?: UserUpsertWithoutContributionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContributionsInput, UserUpdateWithoutContributionsInput>, UserUncheckedUpdateWithoutContributionsInput>
  }

  export type UserCreateNestedOneWithoutGuarantorsInput = {
    create?: XOR<UserCreateWithoutGuarantorsInput, UserUncheckedCreateWithoutGuarantorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuarantorsInput
    connect?: UserWhereUniqueInput
  }

  export type LoanCreateNestedOneWithoutGuarantorsInput = {
    create?: XOR<LoanCreateWithoutGuarantorsInput, LoanUncheckedCreateWithoutGuarantorsInput>
    connectOrCreate?: LoanCreateOrConnectWithoutGuarantorsInput
    connect?: LoanWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGuarantorsNestedInput = {
    create?: XOR<UserCreateWithoutGuarantorsInput, UserUncheckedCreateWithoutGuarantorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuarantorsInput
    upsert?: UserUpsertWithoutGuarantorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGuarantorsInput, UserUpdateWithoutGuarantorsInput>, UserUncheckedUpdateWithoutGuarantorsInput>
  }

  export type LoanUpdateOneWithoutGuarantorsNestedInput = {
    create?: XOR<LoanCreateWithoutGuarantorsInput, LoanUncheckedCreateWithoutGuarantorsInput>
    connectOrCreate?: LoanCreateOrConnectWithoutGuarantorsInput
    upsert?: LoanUpsertWithoutGuarantorsInput
    disconnect?: LoanWhereInput | boolean
    delete?: LoanWhereInput | boolean
    connect?: LoanWhereUniqueInput
    update?: XOR<XOR<LoanUpdateToOneWithWhereWithoutGuarantorsInput, LoanUpdateWithoutGuarantorsInput>, LoanUncheckedUpdateWithoutGuarantorsInput>
  }

  export type UserCreateNestedOneWithoutWithdrawalsInput = {
    create?: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalsInput
    upsert?: UserUpsertWithoutWithdrawalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWithdrawalsInput, UserUpdateWithoutWithdrawalsInput>, UserUncheckedUpdateWithoutWithdrawalsInput>
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

  export type LoanCreateWithoutUserInput = {
    id?: string
    amount: number
    interestRate?: number
    totalRepayable: number
    monthlyInstallment: number
    termMonths?: number
    purpose?: string | null
    status?: string
    approvalDate?: Date | string | null
    disbursementDate?: Date | string | null
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    guarantor1?: string | null
    guarantor1Phone?: string | null
    guarantor2?: string | null
    guarantor2Phone?: string | null
    payments?: LoanPaymentCreateNestedManyWithoutLoanInput
    guarantors?: GuarantorCreateNestedManyWithoutLoanInput
  }

  export type LoanUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    interestRate?: number
    totalRepayable: number
    monthlyInstallment: number
    termMonths?: number
    purpose?: string | null
    status?: string
    approvalDate?: Date | string | null
    disbursementDate?: Date | string | null
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    guarantor1?: string | null
    guarantor1Phone?: string | null
    guarantor2?: string | null
    guarantor2Phone?: string | null
    payments?: LoanPaymentUncheckedCreateNestedManyWithoutLoanInput
    guarantors?: GuarantorUncheckedCreateNestedManyWithoutLoanInput
  }

  export type LoanCreateOrConnectWithoutUserInput = {
    where: LoanWhereUniqueInput
    create: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput>
  }

  export type LoanCreateManyUserInputEnvelope = {
    data: LoanCreateManyUserInput | LoanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    type: string
    amount: number
    description?: string | null
    reference?: string | null
    status?: string
    receiptNo?: string | null
    processedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    amount: number
    description?: string | null
    reference?: string | null
    status?: string
    receiptNo?: string | null
    processedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContributionCreateWithoutUserInput = {
    id?: string
    month: Date | string
    amount: number
    paidDate?: Date | string
    status?: string
    receiptNo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionUncheckedCreateWithoutUserInput = {
    id?: string
    month: Date | string
    amount: number
    paidDate?: Date | string
    status?: string
    receiptNo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionCreateOrConnectWithoutUserInput = {
    where: ContributionWhereUniqueInput
    create: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput>
  }

  export type ContributionCreateManyUserInputEnvelope = {
    data: ContributionCreateManyUserInput | ContributionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GuarantorCreateWithoutUserInput = {
    id?: string
    fullName: string
    phone: string
    email?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    loan?: LoanCreateNestedOneWithoutGuarantorsInput
  }

  export type GuarantorUncheckedCreateWithoutUserInput = {
    id?: string
    loanId?: string | null
    fullName: string
    phone: string
    email?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuarantorCreateOrConnectWithoutUserInput = {
    where: GuarantorWhereUniqueInput
    create: XOR<GuarantorCreateWithoutUserInput, GuarantorUncheckedCreateWithoutUserInput>
  }

  export type GuarantorCreateManyUserInputEnvelope = {
    data: GuarantorCreateManyUserInput | GuarantorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WithdrawalCreateWithoutUserInput = {
    id?: string
    amount: number
    method: string
    phoneNumber?: string | null
    bankName?: string | null
    accountNumber?: string | null
    accountName?: string | null
    status?: string
    reference?: string | null
    processedBy?: string | null
    processedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    method: string
    phoneNumber?: string | null
    bankName?: string | null
    accountNumber?: string | null
    accountName?: string | null
    status?: string
    reference?: string | null
    processedBy?: string | null
    processedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalCreateOrConnectWithoutUserInput = {
    where: WithdrawalWhereUniqueInput
    create: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput>
  }

  export type WithdrawalCreateManyUserInputEnvelope = {
    data: WithdrawalCreateManyUserInput | WithdrawalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LoanUpsertWithWhereUniqueWithoutUserInput = {
    where: LoanWhereUniqueInput
    update: XOR<LoanUpdateWithoutUserInput, LoanUncheckedUpdateWithoutUserInput>
    create: XOR<LoanCreateWithoutUserInput, LoanUncheckedCreateWithoutUserInput>
  }

  export type LoanUpdateWithWhereUniqueWithoutUserInput = {
    where: LoanWhereUniqueInput
    data: XOR<LoanUpdateWithoutUserInput, LoanUncheckedUpdateWithoutUserInput>
  }

  export type LoanUpdateManyWithWhereWithoutUserInput = {
    where: LoanScalarWhereInput
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyWithoutUserInput>
  }

  export type LoanScalarWhereInput = {
    AND?: LoanScalarWhereInput | LoanScalarWhereInput[]
    OR?: LoanScalarWhereInput[]
    NOT?: LoanScalarWhereInput | LoanScalarWhereInput[]
    id?: StringFilter<"Loan"> | string
    userId?: StringFilter<"Loan"> | string
    amount?: FloatFilter<"Loan"> | number
    interestRate?: FloatFilter<"Loan"> | number
    totalRepayable?: FloatFilter<"Loan"> | number
    monthlyInstallment?: FloatFilter<"Loan"> | number
    termMonths?: IntFilter<"Loan"> | number
    purpose?: StringNullableFilter<"Loan"> | string | null
    status?: StringFilter<"Loan"> | string
    approvalDate?: DateTimeNullableFilter<"Loan"> | Date | string | null
    disbursementDate?: DateTimeNullableFilter<"Loan"> | Date | string | null
    dueDate?: DateTimeFilter<"Loan"> | Date | string
    createdAt?: DateTimeFilter<"Loan"> | Date | string
    updatedAt?: DateTimeFilter<"Loan"> | Date | string
    guarantor1?: StringNullableFilter<"Loan"> | string | null
    guarantor1Phone?: StringNullableFilter<"Loan"> | string | null
    guarantor2?: StringNullableFilter<"Loan"> | string | null
    guarantor2Phone?: StringNullableFilter<"Loan"> | string | null
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    type?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    description?: StringNullableFilter<"Transaction"> | string | null
    reference?: StringNullableFilter<"Transaction"> | string | null
    status?: StringFilter<"Transaction"> | string
    receiptNo?: StringNullableFilter<"Transaction"> | string | null
    processedBy?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type ContributionUpsertWithWhereUniqueWithoutUserInput = {
    where: ContributionWhereUniqueInput
    update: XOR<ContributionUpdateWithoutUserInput, ContributionUncheckedUpdateWithoutUserInput>
    create: XOR<ContributionCreateWithoutUserInput, ContributionUncheckedCreateWithoutUserInput>
  }

  export type ContributionUpdateWithWhereUniqueWithoutUserInput = {
    where: ContributionWhereUniqueInput
    data: XOR<ContributionUpdateWithoutUserInput, ContributionUncheckedUpdateWithoutUserInput>
  }

  export type ContributionUpdateManyWithWhereWithoutUserInput = {
    where: ContributionScalarWhereInput
    data: XOR<ContributionUpdateManyMutationInput, ContributionUncheckedUpdateManyWithoutUserInput>
  }

  export type ContributionScalarWhereInput = {
    AND?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
    OR?: ContributionScalarWhereInput[]
    NOT?: ContributionScalarWhereInput | ContributionScalarWhereInput[]
    id?: StringFilter<"Contribution"> | string
    userId?: StringFilter<"Contribution"> | string
    month?: DateTimeFilter<"Contribution"> | Date | string
    amount?: FloatFilter<"Contribution"> | number
    paidDate?: DateTimeFilter<"Contribution"> | Date | string
    status?: StringFilter<"Contribution"> | string
    receiptNo?: StringFilter<"Contribution"> | string
    createdAt?: DateTimeFilter<"Contribution"> | Date | string
    updatedAt?: DateTimeFilter<"Contribution"> | Date | string
  }

  export type GuarantorUpsertWithWhereUniqueWithoutUserInput = {
    where: GuarantorWhereUniqueInput
    update: XOR<GuarantorUpdateWithoutUserInput, GuarantorUncheckedUpdateWithoutUserInput>
    create: XOR<GuarantorCreateWithoutUserInput, GuarantorUncheckedCreateWithoutUserInput>
  }

  export type GuarantorUpdateWithWhereUniqueWithoutUserInput = {
    where: GuarantorWhereUniqueInput
    data: XOR<GuarantorUpdateWithoutUserInput, GuarantorUncheckedUpdateWithoutUserInput>
  }

  export type GuarantorUpdateManyWithWhereWithoutUserInput = {
    where: GuarantorScalarWhereInput
    data: XOR<GuarantorUpdateManyMutationInput, GuarantorUncheckedUpdateManyWithoutUserInput>
  }

  export type GuarantorScalarWhereInput = {
    AND?: GuarantorScalarWhereInput | GuarantorScalarWhereInput[]
    OR?: GuarantorScalarWhereInput[]
    NOT?: GuarantorScalarWhereInput | GuarantorScalarWhereInput[]
    id?: StringFilter<"Guarantor"> | string
    userId?: StringFilter<"Guarantor"> | string
    loanId?: StringNullableFilter<"Guarantor"> | string | null
    fullName?: StringFilter<"Guarantor"> | string
    phone?: StringFilter<"Guarantor"> | string
    email?: StringNullableFilter<"Guarantor"> | string | null
    status?: StringFilter<"Guarantor"> | string
    createdAt?: DateTimeFilter<"Guarantor"> | Date | string
    updatedAt?: DateTimeFilter<"Guarantor"> | Date | string
  }

  export type WithdrawalUpsertWithWhereUniqueWithoutUserInput = {
    where: WithdrawalWhereUniqueInput
    update: XOR<WithdrawalUpdateWithoutUserInput, WithdrawalUncheckedUpdateWithoutUserInput>
    create: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput>
  }

  export type WithdrawalUpdateWithWhereUniqueWithoutUserInput = {
    where: WithdrawalWhereUniqueInput
    data: XOR<WithdrawalUpdateWithoutUserInput, WithdrawalUncheckedUpdateWithoutUserInput>
  }

  export type WithdrawalUpdateManyWithWhereWithoutUserInput = {
    where: WithdrawalScalarWhereInput
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyWithoutUserInput>
  }

  export type WithdrawalScalarWhereInput = {
    AND?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
    OR?: WithdrawalScalarWhereInput[]
    NOT?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
    id?: StringFilter<"Withdrawal"> | string
    userId?: StringFilter<"Withdrawal"> | string
    amount?: FloatFilter<"Withdrawal"> | number
    method?: StringFilter<"Withdrawal"> | string
    phoneNumber?: StringNullableFilter<"Withdrawal"> | string | null
    bankName?: StringNullableFilter<"Withdrawal"> | string | null
    accountNumber?: StringNullableFilter<"Withdrawal"> | string | null
    accountName?: StringNullableFilter<"Withdrawal"> | string | null
    status?: StringFilter<"Withdrawal"> | string
    reference?: StringNullableFilter<"Withdrawal"> | string | null
    processedBy?: StringNullableFilter<"Withdrawal"> | string | null
    processedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
    notes?: StringNullableFilter<"Withdrawal"> | string | null
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
    updatedAt?: DateTimeFilter<"Withdrawal"> | Date | string
  }

  export type UserCreateWithoutLoansInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    idNumber: string
    password: string
    memberNumber: string
    monthlyContribution?: number
    shares?: number
    savingsBalance?: number
    status?: string
    role?: string
    physicalAddress?: string | null
    postalAddress?: string | null
    idDocument?: string | null
    lastContributionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
    contributions?: ContributionCreateNestedManyWithoutUserInput
    guarantors?: GuarantorCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLoansInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    idNumber: string
    password: string
    memberNumber: string
    monthlyContribution?: number
    shares?: number
    savingsBalance?: number
    status?: string
    role?: string
    physicalAddress?: string | null
    postalAddress?: string | null
    idDocument?: string | null
    lastContributionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutUserInput
    guarantors?: GuarantorUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLoansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLoansInput, UserUncheckedCreateWithoutLoansInput>
  }

  export type LoanPaymentCreateWithoutLoanInput = {
    id?: string
    amount: number
    paymentDate?: Date | string
    receiptNo: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanPaymentUncheckedCreateWithoutLoanInput = {
    id?: string
    amount: number
    paymentDate?: Date | string
    receiptNo: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanPaymentCreateOrConnectWithoutLoanInput = {
    where: LoanPaymentWhereUniqueInput
    create: XOR<LoanPaymentCreateWithoutLoanInput, LoanPaymentUncheckedCreateWithoutLoanInput>
  }

  export type LoanPaymentCreateManyLoanInputEnvelope = {
    data: LoanPaymentCreateManyLoanInput | LoanPaymentCreateManyLoanInput[]
    skipDuplicates?: boolean
  }

  export type GuarantorCreateWithoutLoanInput = {
    id?: string
    fullName: string
    phone: string
    email?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGuarantorsInput
  }

  export type GuarantorUncheckedCreateWithoutLoanInput = {
    id?: string
    userId: string
    fullName: string
    phone: string
    email?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuarantorCreateOrConnectWithoutLoanInput = {
    where: GuarantorWhereUniqueInput
    create: XOR<GuarantorCreateWithoutLoanInput, GuarantorUncheckedCreateWithoutLoanInput>
  }

  export type GuarantorCreateManyLoanInputEnvelope = {
    data: GuarantorCreateManyLoanInput | GuarantorCreateManyLoanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLoansInput = {
    update: XOR<UserUpdateWithoutLoansInput, UserUncheckedUpdateWithoutLoansInput>
    create: XOR<UserCreateWithoutLoansInput, UserUncheckedCreateWithoutLoansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLoansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLoansInput, UserUncheckedUpdateWithoutLoansInput>
  }

  export type UserUpdateWithoutLoansInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    memberNumber?: StringFieldUpdateOperationsInput | string
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    savingsBalance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    physicalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    idDocument?: NullableStringFieldUpdateOperationsInput | string | null
    lastContributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    contributions?: ContributionUpdateManyWithoutUserNestedInput
    guarantors?: GuarantorUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLoansInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    memberNumber?: StringFieldUpdateOperationsInput | string
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    savingsBalance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    physicalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    idDocument?: NullableStringFieldUpdateOperationsInput | string | null
    lastContributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutUserNestedInput
    guarantors?: GuarantorUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LoanPaymentUpsertWithWhereUniqueWithoutLoanInput = {
    where: LoanPaymentWhereUniqueInput
    update: XOR<LoanPaymentUpdateWithoutLoanInput, LoanPaymentUncheckedUpdateWithoutLoanInput>
    create: XOR<LoanPaymentCreateWithoutLoanInput, LoanPaymentUncheckedCreateWithoutLoanInput>
  }

  export type LoanPaymentUpdateWithWhereUniqueWithoutLoanInput = {
    where: LoanPaymentWhereUniqueInput
    data: XOR<LoanPaymentUpdateWithoutLoanInput, LoanPaymentUncheckedUpdateWithoutLoanInput>
  }

  export type LoanPaymentUpdateManyWithWhereWithoutLoanInput = {
    where: LoanPaymentScalarWhereInput
    data: XOR<LoanPaymentUpdateManyMutationInput, LoanPaymentUncheckedUpdateManyWithoutLoanInput>
  }

  export type LoanPaymentScalarWhereInput = {
    AND?: LoanPaymentScalarWhereInput | LoanPaymentScalarWhereInput[]
    OR?: LoanPaymentScalarWhereInput[]
    NOT?: LoanPaymentScalarWhereInput | LoanPaymentScalarWhereInput[]
    id?: StringFilter<"LoanPayment"> | string
    loanId?: StringFilter<"LoanPayment"> | string
    amount?: FloatFilter<"LoanPayment"> | number
    paymentDate?: DateTimeFilter<"LoanPayment"> | Date | string
    receiptNo?: StringFilter<"LoanPayment"> | string
    status?: StringFilter<"LoanPayment"> | string
    createdAt?: DateTimeFilter<"LoanPayment"> | Date | string
    updatedAt?: DateTimeFilter<"LoanPayment"> | Date | string
  }

  export type GuarantorUpsertWithWhereUniqueWithoutLoanInput = {
    where: GuarantorWhereUniqueInput
    update: XOR<GuarantorUpdateWithoutLoanInput, GuarantorUncheckedUpdateWithoutLoanInput>
    create: XOR<GuarantorCreateWithoutLoanInput, GuarantorUncheckedCreateWithoutLoanInput>
  }

  export type GuarantorUpdateWithWhereUniqueWithoutLoanInput = {
    where: GuarantorWhereUniqueInput
    data: XOR<GuarantorUpdateWithoutLoanInput, GuarantorUncheckedUpdateWithoutLoanInput>
  }

  export type GuarantorUpdateManyWithWhereWithoutLoanInput = {
    where: GuarantorScalarWhereInput
    data: XOR<GuarantorUpdateManyMutationInput, GuarantorUncheckedUpdateManyWithoutLoanInput>
  }

  export type LoanCreateWithoutPaymentsInput = {
    id?: string
    amount: number
    interestRate?: number
    totalRepayable: number
    monthlyInstallment: number
    termMonths?: number
    purpose?: string | null
    status?: string
    approvalDate?: Date | string | null
    disbursementDate?: Date | string | null
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    guarantor1?: string | null
    guarantor1Phone?: string | null
    guarantor2?: string | null
    guarantor2Phone?: string | null
    user: UserCreateNestedOneWithoutLoansInput
    guarantors?: GuarantorCreateNestedManyWithoutLoanInput
  }

  export type LoanUncheckedCreateWithoutPaymentsInput = {
    id?: string
    userId: string
    amount: number
    interestRate?: number
    totalRepayable: number
    monthlyInstallment: number
    termMonths?: number
    purpose?: string | null
    status?: string
    approvalDate?: Date | string | null
    disbursementDate?: Date | string | null
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    guarantor1?: string | null
    guarantor1Phone?: string | null
    guarantor2?: string | null
    guarantor2Phone?: string | null
    guarantors?: GuarantorUncheckedCreateNestedManyWithoutLoanInput
  }

  export type LoanCreateOrConnectWithoutPaymentsInput = {
    where: LoanWhereUniqueInput
    create: XOR<LoanCreateWithoutPaymentsInput, LoanUncheckedCreateWithoutPaymentsInput>
  }

  export type LoanUpsertWithoutPaymentsInput = {
    update: XOR<LoanUpdateWithoutPaymentsInput, LoanUncheckedUpdateWithoutPaymentsInput>
    create: XOR<LoanCreateWithoutPaymentsInput, LoanUncheckedCreateWithoutPaymentsInput>
    where?: LoanWhereInput
  }

  export type LoanUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: LoanWhereInput
    data: XOR<LoanUpdateWithoutPaymentsInput, LoanUncheckedUpdateWithoutPaymentsInput>
  }

  export type LoanUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    totalRepayable?: FloatFieldUpdateOperationsInput | number
    monthlyInstallment?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disbursementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guarantor1?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor1Phone?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2Phone?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutLoansNestedInput
    guarantors?: GuarantorUpdateManyWithoutLoanNestedInput
  }

  export type LoanUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    totalRepayable?: FloatFieldUpdateOperationsInput | number
    monthlyInstallment?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disbursementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guarantor1?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor1Phone?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2Phone?: NullableStringFieldUpdateOperationsInput | string | null
    guarantors?: GuarantorUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    idNumber: string
    password: string
    memberNumber: string
    monthlyContribution?: number
    shares?: number
    savingsBalance?: number
    status?: string
    role?: string
    physicalAddress?: string | null
    postalAddress?: string | null
    idDocument?: string | null
    lastContributionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loans?: LoanCreateNestedManyWithoutUserInput
    contributions?: ContributionCreateNestedManyWithoutUserInput
    guarantors?: GuarantorCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    idNumber: string
    password: string
    memberNumber: string
    monthlyContribution?: number
    shares?: number
    savingsBalance?: number
    status?: string
    role?: string
    physicalAddress?: string | null
    postalAddress?: string | null
    idDocument?: string | null
    lastContributionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loans?: LoanUncheckedCreateNestedManyWithoutUserInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutUserInput
    guarantors?: GuarantorUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    memberNumber?: StringFieldUpdateOperationsInput | string
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    savingsBalance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    physicalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    idDocument?: NullableStringFieldUpdateOperationsInput | string | null
    lastContributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loans?: LoanUpdateManyWithoutUserNestedInput
    contributions?: ContributionUpdateManyWithoutUserNestedInput
    guarantors?: GuarantorUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    memberNumber?: StringFieldUpdateOperationsInput | string
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    savingsBalance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    physicalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    idDocument?: NullableStringFieldUpdateOperationsInput | string | null
    lastContributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutUserNestedInput
    guarantors?: GuarantorUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutContributionsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    idNumber: string
    password: string
    memberNumber: string
    monthlyContribution?: number
    shares?: number
    savingsBalance?: number
    status?: string
    role?: string
    physicalAddress?: string | null
    postalAddress?: string | null
    idDocument?: string | null
    lastContributionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loans?: LoanCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    guarantors?: GuarantorCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContributionsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    idNumber: string
    password: string
    memberNumber: string
    monthlyContribution?: number
    shares?: number
    savingsBalance?: number
    status?: string
    role?: string
    physicalAddress?: string | null
    postalAddress?: string | null
    idDocument?: string | null
    lastContributionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loans?: LoanUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    guarantors?: GuarantorUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContributionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
  }

  export type UserUpsertWithoutContributionsInput = {
    update: XOR<UserUpdateWithoutContributionsInput, UserUncheckedUpdateWithoutContributionsInput>
    create: XOR<UserCreateWithoutContributionsInput, UserUncheckedCreateWithoutContributionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContributionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContributionsInput, UserUncheckedUpdateWithoutContributionsInput>
  }

  export type UserUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    memberNumber?: StringFieldUpdateOperationsInput | string
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    savingsBalance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    physicalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    idDocument?: NullableStringFieldUpdateOperationsInput | string | null
    lastContributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loans?: LoanUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    guarantors?: GuarantorUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    memberNumber?: StringFieldUpdateOperationsInput | string
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    savingsBalance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    physicalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    idDocument?: NullableStringFieldUpdateOperationsInput | string | null
    lastContributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    guarantors?: GuarantorUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGuarantorsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    idNumber: string
    password: string
    memberNumber: string
    monthlyContribution?: number
    shares?: number
    savingsBalance?: number
    status?: string
    role?: string
    physicalAddress?: string | null
    postalAddress?: string | null
    idDocument?: string | null
    lastContributionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loans?: LoanCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    contributions?: ContributionCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGuarantorsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    idNumber: string
    password: string
    memberNumber: string
    monthlyContribution?: number
    shares?: number
    savingsBalance?: number
    status?: string
    role?: string
    physicalAddress?: string | null
    postalAddress?: string | null
    idDocument?: string | null
    lastContributionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loans?: LoanUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGuarantorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGuarantorsInput, UserUncheckedCreateWithoutGuarantorsInput>
  }

  export type LoanCreateWithoutGuarantorsInput = {
    id?: string
    amount: number
    interestRate?: number
    totalRepayable: number
    monthlyInstallment: number
    termMonths?: number
    purpose?: string | null
    status?: string
    approvalDate?: Date | string | null
    disbursementDate?: Date | string | null
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    guarantor1?: string | null
    guarantor1Phone?: string | null
    guarantor2?: string | null
    guarantor2Phone?: string | null
    user: UserCreateNestedOneWithoutLoansInput
    payments?: LoanPaymentCreateNestedManyWithoutLoanInput
  }

  export type LoanUncheckedCreateWithoutGuarantorsInput = {
    id?: string
    userId: string
    amount: number
    interestRate?: number
    totalRepayable: number
    monthlyInstallment: number
    termMonths?: number
    purpose?: string | null
    status?: string
    approvalDate?: Date | string | null
    disbursementDate?: Date | string | null
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    guarantor1?: string | null
    guarantor1Phone?: string | null
    guarantor2?: string | null
    guarantor2Phone?: string | null
    payments?: LoanPaymentUncheckedCreateNestedManyWithoutLoanInput
  }

  export type LoanCreateOrConnectWithoutGuarantorsInput = {
    where: LoanWhereUniqueInput
    create: XOR<LoanCreateWithoutGuarantorsInput, LoanUncheckedCreateWithoutGuarantorsInput>
  }

  export type UserUpsertWithoutGuarantorsInput = {
    update: XOR<UserUpdateWithoutGuarantorsInput, UserUncheckedUpdateWithoutGuarantorsInput>
    create: XOR<UserCreateWithoutGuarantorsInput, UserUncheckedCreateWithoutGuarantorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGuarantorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGuarantorsInput, UserUncheckedUpdateWithoutGuarantorsInput>
  }

  export type UserUpdateWithoutGuarantorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    memberNumber?: StringFieldUpdateOperationsInput | string
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    savingsBalance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    physicalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    idDocument?: NullableStringFieldUpdateOperationsInput | string | null
    lastContributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loans?: LoanUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    contributions?: ContributionUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGuarantorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    memberNumber?: StringFieldUpdateOperationsInput | string
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    savingsBalance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    physicalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    idDocument?: NullableStringFieldUpdateOperationsInput | string | null
    lastContributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LoanUpsertWithoutGuarantorsInput = {
    update: XOR<LoanUpdateWithoutGuarantorsInput, LoanUncheckedUpdateWithoutGuarantorsInput>
    create: XOR<LoanCreateWithoutGuarantorsInput, LoanUncheckedCreateWithoutGuarantorsInput>
    where?: LoanWhereInput
  }

  export type LoanUpdateToOneWithWhereWithoutGuarantorsInput = {
    where?: LoanWhereInput
    data: XOR<LoanUpdateWithoutGuarantorsInput, LoanUncheckedUpdateWithoutGuarantorsInput>
  }

  export type LoanUpdateWithoutGuarantorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    totalRepayable?: FloatFieldUpdateOperationsInput | number
    monthlyInstallment?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disbursementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guarantor1?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor1Phone?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2Phone?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutLoansNestedInput
    payments?: LoanPaymentUpdateManyWithoutLoanNestedInput
  }

  export type LoanUncheckedUpdateWithoutGuarantorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    totalRepayable?: FloatFieldUpdateOperationsInput | number
    monthlyInstallment?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disbursementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guarantor1?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor1Phone?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2Phone?: NullableStringFieldUpdateOperationsInput | string | null
    payments?: LoanPaymentUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type UserCreateWithoutWithdrawalsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    idNumber: string
    password: string
    memberNumber: string
    monthlyContribution?: number
    shares?: number
    savingsBalance?: number
    status?: string
    role?: string
    physicalAddress?: string | null
    postalAddress?: string | null
    idDocument?: string | null
    lastContributionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loans?: LoanCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    contributions?: ContributionCreateNestedManyWithoutUserInput
    guarantors?: GuarantorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWithdrawalsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    idNumber: string
    password: string
    memberNumber: string
    monthlyContribution?: number
    shares?: number
    savingsBalance?: number
    status?: string
    role?: string
    physicalAddress?: string | null
    postalAddress?: string | null
    idDocument?: string | null
    lastContributionDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loans?: LoanUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    contributions?: ContributionUncheckedCreateNestedManyWithoutUserInput
    guarantors?: GuarantorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWithdrawalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
  }

  export type UserUpsertWithoutWithdrawalsInput = {
    update: XOR<UserUpdateWithoutWithdrawalsInput, UserUncheckedUpdateWithoutWithdrawalsInput>
    create: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWithdrawalsInput, UserUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type UserUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    memberNumber?: StringFieldUpdateOperationsInput | string
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    savingsBalance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    physicalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    idDocument?: NullableStringFieldUpdateOperationsInput | string | null
    lastContributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loans?: LoanUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    contributions?: ContributionUpdateManyWithoutUserNestedInput
    guarantors?: GuarantorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWithdrawalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    memberNumber?: StringFieldUpdateOperationsInput | string
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    savingsBalance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    physicalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: NullableStringFieldUpdateOperationsInput | string | null
    idDocument?: NullableStringFieldUpdateOperationsInput | string | null
    lastContributionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loans?: LoanUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    contributions?: ContributionUncheckedUpdateManyWithoutUserNestedInput
    guarantors?: GuarantorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LoanCreateManyUserInput = {
    id?: string
    amount: number
    interestRate?: number
    totalRepayable: number
    monthlyInstallment: number
    termMonths?: number
    purpose?: string | null
    status?: string
    approvalDate?: Date | string | null
    disbursementDate?: Date | string | null
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    guarantor1?: string | null
    guarantor1Phone?: string | null
    guarantor2?: string | null
    guarantor2Phone?: string | null
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    type: string
    amount: number
    description?: string | null
    reference?: string | null
    status?: string
    receiptNo?: string | null
    processedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContributionCreateManyUserInput = {
    id?: string
    month: Date | string
    amount: number
    paidDate?: Date | string
    status?: string
    receiptNo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuarantorCreateManyUserInput = {
    id?: string
    loanId?: string | null
    fullName: string
    phone: string
    email?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WithdrawalCreateManyUserInput = {
    id?: string
    amount: number
    method: string
    phoneNumber?: string | null
    bankName?: string | null
    accountNumber?: string | null
    accountName?: string | null
    status?: string
    reference?: string | null
    processedBy?: string | null
    processedAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    totalRepayable?: FloatFieldUpdateOperationsInput | number
    monthlyInstallment?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disbursementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guarantor1?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor1Phone?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2Phone?: NullableStringFieldUpdateOperationsInput | string | null
    payments?: LoanPaymentUpdateManyWithoutLoanNestedInput
    guarantors?: GuarantorUpdateManyWithoutLoanNestedInput
  }

  export type LoanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    totalRepayable?: FloatFieldUpdateOperationsInput | number
    monthlyInstallment?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disbursementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guarantor1?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor1Phone?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2Phone?: NullableStringFieldUpdateOperationsInput | string | null
    payments?: LoanPaymentUncheckedUpdateManyWithoutLoanNestedInput
    guarantors?: GuarantorUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type LoanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    totalRepayable?: FloatFieldUpdateOperationsInput | number
    monthlyInstallment?: FloatFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disbursementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guarantor1?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor1Phone?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2?: NullableStringFieldUpdateOperationsInput | string | null
    guarantor2Phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    receiptNo?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    receiptNo?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    receiptNo?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    receiptNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    receiptNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContributionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    receiptNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuarantorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loan?: LoanUpdateOneWithoutGuarantorsNestedInput
  }

  export type GuarantorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanId?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuarantorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanId?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanPaymentCreateManyLoanInput = {
    id?: string
    amount: number
    paymentDate?: Date | string
    receiptNo: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuarantorCreateManyLoanInput = {
    id?: string
    userId: string
    fullName: string
    phone: string
    email?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanPaymentUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanPaymentUncheckedUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanPaymentUncheckedUpdateManyWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuarantorUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGuarantorsNestedInput
  }

  export type GuarantorUncheckedUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuarantorUncheckedUpdateManyWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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