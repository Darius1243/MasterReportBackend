
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
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>
/**
 * Model Facility
 * 
 */
export type Facility = $Result.DefaultSelection<Prisma.$FacilityPayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model Inflow
 * 
 */
export type Inflow = $Result.DefaultSelection<Prisma.$InflowPayload>
/**
 * Model Outflow
 * 
 */
export type Outflow = $Result.DefaultSelection<Prisma.$OutflowPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more People
 * const people = await prisma.person.findMany()
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
   * // Fetch zero or more People
   * const people = await prisma.person.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs>;

  /**
   * `prisma.facility`: Exposes CRUD operations for the **Facility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facilities
    * const facilities = await prisma.facility.findMany()
    * ```
    */
  get facility(): Prisma.FacilityDelegate<ExtArgs>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs>;

  /**
   * `prisma.inflow`: Exposes CRUD operations for the **Inflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inflows
    * const inflows = await prisma.inflow.findMany()
    * ```
    */
  get inflow(): Prisma.InflowDelegate<ExtArgs>;

  /**
   * `prisma.outflow`: Exposes CRUD operations for the **Outflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outflows
    * const outflows = await prisma.outflow.findMany()
    * ```
    */
  get outflow(): Prisma.OutflowDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Person: 'Person',
    Facility: 'Facility',
    Job: 'Job',
    Inflow: 'Inflow',
    Outflow: 'Outflow'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "person" | "facility" | "job" | "inflow" | "outflow"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      Facility: {
        payload: Prisma.$FacilityPayload<ExtArgs>
        fields: Prisma.FacilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          findFirst: {
            args: Prisma.FacilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          findMany: {
            args: Prisma.FacilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          create: {
            args: Prisma.FacilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          createMany: {
            args: Prisma.FacilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          delete: {
            args: Prisma.FacilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          update: {
            args: Prisma.FacilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          deleteMany: {
            args: Prisma.FacilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FacilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          aggregate: {
            args: Prisma.FacilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacility>
          }
          groupBy: {
            args: Prisma.FacilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacilityCountArgs<ExtArgs>
            result: $Utils.Optional<FacilityCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      Inflow: {
        payload: Prisma.$InflowPayload<ExtArgs>
        fields: Prisma.InflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InflowPayload>
          }
          findFirst: {
            args: Prisma.InflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InflowPayload>
          }
          findMany: {
            args: Prisma.InflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InflowPayload>[]
          }
          create: {
            args: Prisma.InflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InflowPayload>
          }
          createMany: {
            args: Prisma.InflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InflowPayload>[]
          }
          delete: {
            args: Prisma.InflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InflowPayload>
          }
          update: {
            args: Prisma.InflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InflowPayload>
          }
          deleteMany: {
            args: Prisma.InflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InflowPayload>
          }
          aggregate: {
            args: Prisma.InflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInflow>
          }
          groupBy: {
            args: Prisma.InflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<InflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.InflowCountArgs<ExtArgs>
            result: $Utils.Optional<InflowCountAggregateOutputType> | number
          }
        }
      }
      Outflow: {
        payload: Prisma.$OutflowPayload<ExtArgs>
        fields: Prisma.OutflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutflowPayload>
          }
          findFirst: {
            args: Prisma.OutflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutflowPayload>
          }
          findMany: {
            args: Prisma.OutflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutflowPayload>[]
          }
          create: {
            args: Prisma.OutflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutflowPayload>
          }
          createMany: {
            args: Prisma.OutflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutflowPayload>[]
          }
          delete: {
            args: Prisma.OutflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutflowPayload>
          }
          update: {
            args: Prisma.OutflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutflowPayload>
          }
          deleteMany: {
            args: Prisma.OutflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutflowPayload>
          }
          aggregate: {
            args: Prisma.OutflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutflow>
          }
          groupBy: {
            args: Prisma.OutflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutflowCountArgs<ExtArgs>
            result: $Utils.Optional<OutflowCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
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
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    inflows: number
    outflows: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inflows?: boolean | PersonCountOutputTypeCountInflowsArgs
    outflows?: boolean | PersonCountOutputTypeCountOutflowsArgs
  }

  // Custom InputTypes
  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountInflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InflowWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountOutflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutflowWhereInput
  }


  /**
   * Count Type FacilityCountOutputType
   */

  export type FacilityCountOutputType = {
    inflows: number
    outflow: number
  }

  export type FacilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inflows?: boolean | FacilityCountOutputTypeCountInflowsArgs
    outflow?: boolean | FacilityCountOutputTypeCountOutflowArgs
  }

  // Custom InputTypes
  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityCountOutputType
     */
    select?: FacilityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountInflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InflowWhereInput
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountOutflowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutflowWhereInput
  }


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    inflows: number
    outflows: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inflows?: boolean | JobCountOutputTypeCountInflowsArgs
    outflows?: boolean | JobCountOutputTypeCountOutflowsArgs
  }

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountInflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InflowWhereInput
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountOutflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutflowWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    id: number | null
  }

  export type PersonSumAggregateOutputType = {
    id: number | null
  }

  export type PersonMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type PersonMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    id?: true
  }

  export type PersonSumAggregateInputType = {
    id?: true
  }

  export type PersonMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: number
    name: string
    email: string | null
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    inflows?: boolean | Person$inflowsArgs<ExtArgs>
    outflows?: boolean | Person$outflowsArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inflows?: boolean | Person$inflowsArgs<ExtArgs>
    outflows?: boolean | Person$outflowsArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      inflows: Prisma.$InflowPayload<ExtArgs>[]
      outflows: Prisma.$OutflowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string | null
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonFindUniqueArgs>(args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonFindFirstArgs>(args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonFindManyArgs>(args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends PersonCreateArgs>(args: SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many People.
     * @param {PersonCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCreateManyArgs>(args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {PersonCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `id`
     * const personWithIdOnly = await prisma.person.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends PersonDeleteArgs>(args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonUpdateArgs>(args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonDeleteManyArgs>(args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonUpdateManyArgs>(args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends PersonUpsertArgs>(args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
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
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inflows<T extends Person$inflowsArgs<ExtArgs> = {}>(args?: Subset<T, Person$inflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InflowPayload<ExtArgs>, T, "findMany"> | Null>
    outflows<T extends Person$outflowsArgs<ExtArgs> = {}>(args?: Subset<T, Person$outflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutflowPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Person model
   */ 
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'Int'>
    readonly name: FieldRef<"Person", 'String'>
    readonly email: FieldRef<"Person", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }

  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
  }

  /**
   * Person createManyAndReturn
   */
  export type PersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
  }

  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
  }

  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }

  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
  }

  /**
   * Person.inflows
   */
  export type Person$inflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inflow
     */
    select?: InflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InflowInclude<ExtArgs> | null
    where?: InflowWhereInput
    orderBy?: InflowOrderByWithRelationInput | InflowOrderByWithRelationInput[]
    cursor?: InflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InflowScalarFieldEnum | InflowScalarFieldEnum[]
  }

  /**
   * Person.outflows
   */
  export type Person$outflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outflow
     */
    select?: OutflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutflowInclude<ExtArgs> | null
    where?: OutflowWhereInput
    orderBy?: OutflowOrderByWithRelationInput | OutflowOrderByWithRelationInput[]
    cursor?: OutflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutflowScalarFieldEnum | OutflowScalarFieldEnum[]
  }

  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
  }


  /**
   * Model Facility
   */

  export type AggregateFacility = {
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  export type FacilityAvgAggregateOutputType = {
    id: number | null
  }

  export type FacilitySumAggregateOutputType = {
    id: number | null
  }

  export type FacilityMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FacilityMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FacilityCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type FacilityAvgAggregateInputType = {
    id?: true
  }

  export type FacilitySumAggregateInputType = {
    id?: true
  }

  export type FacilityMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FacilityMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FacilityCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type FacilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facility to aggregate.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facilities
    **/
    _count?: true | FacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityMaxAggregateInputType
  }

  export type GetFacilityAggregateType<T extends FacilityAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility[P]>
      : GetScalarType<T[P], AggregateFacility[P]>
  }




  export type FacilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityWhereInput
    orderBy?: FacilityOrderByWithAggregationInput | FacilityOrderByWithAggregationInput[]
    by: FacilityScalarFieldEnum[] | FacilityScalarFieldEnum
    having?: FacilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityCountAggregateInputType | true
    _avg?: FacilityAvgAggregateInputType
    _sum?: FacilitySumAggregateInputType
    _min?: FacilityMinAggregateInputType
    _max?: FacilityMaxAggregateInputType
  }

  export type FacilityGroupByOutputType = {
    id: number
    name: string
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  type GetFacilityGroupByPayload<T extends FacilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityGroupByOutputType[P]>
        }
      >
    >


  export type FacilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    inflows?: boolean | Facility$inflowsArgs<ExtArgs>
    outflow?: boolean | Facility$outflowArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type FacilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inflows?: boolean | Facility$inflowsArgs<ExtArgs>
    outflow?: boolean | Facility$outflowArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FacilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Facility"
    objects: {
      inflows: Prisma.$InflowPayload<ExtArgs>[]
      outflow: Prisma.$OutflowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["facility"]>
    composites: {}
  }

  type FacilityGetPayload<S extends boolean | null | undefined | FacilityDefaultArgs> = $Result.GetResult<Prisma.$FacilityPayload, S>

  type FacilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FacilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FacilityCountAggregateInputType | true
    }

  export interface FacilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Facility'], meta: { name: 'Facility' } }
    /**
     * Find zero or one Facility that matches the filter.
     * @param {FacilityFindUniqueArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacilityFindUniqueArgs>(args: SelectSubset<T, FacilityFindUniqueArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Facility that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FacilityFindUniqueOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacilityFindUniqueOrThrowArgs>(args: SelectSubset<T, FacilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Facility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacilityFindFirstArgs>(args?: SelectSubset<T, FacilityFindFirstArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Facility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacilityFindFirstOrThrowArgs>(args?: SelectSubset<T, FacilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Facilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facilities
     * const facilities = await prisma.facility.findMany()
     * 
     * // Get first 10 Facilities
     * const facilities = await prisma.facility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityWithIdOnly = await prisma.facility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacilityFindManyArgs>(args?: SelectSubset<T, FacilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Facility.
     * @param {FacilityCreateArgs} args - Arguments to create a Facility.
     * @example
     * // Create one Facility
     * const Facility = await prisma.facility.create({
     *   data: {
     *     // ... data to create a Facility
     *   }
     * })
     * 
     */
    create<T extends FacilityCreateArgs>(args: SelectSubset<T, FacilityCreateArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Facilities.
     * @param {FacilityCreateManyArgs} args - Arguments to create many Facilities.
     * @example
     * // Create many Facilities
     * const facility = await prisma.facility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacilityCreateManyArgs>(args?: SelectSubset<T, FacilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facilities and returns the data saved in the database.
     * @param {FacilityCreateManyAndReturnArgs} args - Arguments to create many Facilities.
     * @example
     * // Create many Facilities
     * const facility = await prisma.facility.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facilities and only return the `id`
     * const facilityWithIdOnly = await prisma.facility.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacilityCreateManyAndReturnArgs>(args?: SelectSubset<T, FacilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Facility.
     * @param {FacilityDeleteArgs} args - Arguments to delete one Facility.
     * @example
     * // Delete one Facility
     * const Facility = await prisma.facility.delete({
     *   where: {
     *     // ... filter to delete one Facility
     *   }
     * })
     * 
     */
    delete<T extends FacilityDeleteArgs>(args: SelectSubset<T, FacilityDeleteArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Facility.
     * @param {FacilityUpdateArgs} args - Arguments to update one Facility.
     * @example
     * // Update one Facility
     * const facility = await prisma.facility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacilityUpdateArgs>(args: SelectSubset<T, FacilityUpdateArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Facilities.
     * @param {FacilityDeleteManyArgs} args - Arguments to filter Facilities to delete.
     * @example
     * // Delete a few Facilities
     * const { count } = await prisma.facility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacilityDeleteManyArgs>(args?: SelectSubset<T, FacilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacilityUpdateManyArgs>(args: SelectSubset<T, FacilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Facility.
     * @param {FacilityUpsertArgs} args - Arguments to update or create a Facility.
     * @example
     * // Update or create a Facility
     * const facility = await prisma.facility.upsert({
     *   create: {
     *     // ... data to create a Facility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility we want to update
     *   }
     * })
     */
    upsert<T extends FacilityUpsertArgs>(args: SelectSubset<T, FacilityUpsertArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityCountArgs} args - Arguments to filter Facilities to count.
     * @example
     * // Count the number of Facilities
     * const count = await prisma.facility.count({
     *   where: {
     *     // ... the filter for the Facilities we want to count
     *   }
     * })
    **/
    count<T extends FacilityCountArgs>(
      args?: Subset<T, FacilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacilityAggregateArgs>(args: Subset<T, FacilityAggregateArgs>): Prisma.PrismaPromise<GetFacilityAggregateType<T>>

    /**
     * Group by Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityGroupByArgs} args - Group by arguments.
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
      T extends FacilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityGroupByArgs['orderBy'] }
        : { orderBy?: FacilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Facility model
   */
  readonly fields: FacilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Facility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inflows<T extends Facility$inflowsArgs<ExtArgs> = {}>(args?: Subset<T, Facility$inflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InflowPayload<ExtArgs>, T, "findMany"> | Null>
    outflow<T extends Facility$outflowArgs<ExtArgs> = {}>(args?: Subset<T, Facility$outflowArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutflowPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Facility model
   */ 
  interface FacilityFieldRefs {
    readonly id: FieldRef<"Facility", 'Int'>
    readonly name: FieldRef<"Facility", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Facility findUnique
   */
  export type FacilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility findUniqueOrThrow
   */
  export type FacilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility findFirst
   */
  export type FacilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility findFirstOrThrow
   */
  export type FacilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility findMany
   */
  export type FacilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facilities to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility create
   */
  export type FacilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Facility.
     */
    data: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
  }

  /**
   * Facility createMany
   */
  export type FacilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facilities.
     */
    data: FacilityCreateManyInput | FacilityCreateManyInput[]
  }

  /**
   * Facility createManyAndReturn
   */
  export type FacilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Facilities.
     */
    data: FacilityCreateManyInput | FacilityCreateManyInput[]
  }

  /**
   * Facility update
   */
  export type FacilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Facility.
     */
    data: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
    /**
     * Choose, which Facility to update.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility updateMany
   */
  export type FacilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facilities.
     */
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyInput>
    /**
     * Filter which Facilities to update
     */
    where?: FacilityWhereInput
  }

  /**
   * Facility upsert
   */
  export type FacilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Facility to update in case it exists.
     */
    where: FacilityWhereUniqueInput
    /**
     * In case the Facility found by the `where` argument doesn't exist, create a new Facility with this data.
     */
    create: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
    /**
     * In case the Facility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
  }

  /**
   * Facility delete
   */
  export type FacilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter which Facility to delete.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility deleteMany
   */
  export type FacilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facilities to delete
     */
    where?: FacilityWhereInput
  }

  /**
   * Facility.inflows
   */
  export type Facility$inflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inflow
     */
    select?: InflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InflowInclude<ExtArgs> | null
    where?: InflowWhereInput
    orderBy?: InflowOrderByWithRelationInput | InflowOrderByWithRelationInput[]
    cursor?: InflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InflowScalarFieldEnum | InflowScalarFieldEnum[]
  }

  /**
   * Facility.outflow
   */
  export type Facility$outflowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outflow
     */
    select?: OutflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutflowInclude<ExtArgs> | null
    where?: OutflowWhereInput
    orderBy?: OutflowOrderByWithRelationInput | OutflowOrderByWithRelationInput[]
    cursor?: OutflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutflowScalarFieldEnum | OutflowScalarFieldEnum[]
  }

  /**
   * Facility without action
   */
  export type FacilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    id: number | null
  }

  export type JobSumAggregateOutputType = {
    id: number | null
  }

  export type JobMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type JobMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    id?: true
  }

  export type JobSumAggregateInputType = {
    id?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: number
    name: string
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    inflows?: boolean | Job$inflowsArgs<ExtArgs>
    outflows?: boolean | Job$outflowsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inflows?: boolean | Job$inflowsArgs<ExtArgs>
    outflows?: boolean | Job$outflowsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      inflows: Prisma.$InflowPayload<ExtArgs>[]
      outflows: Prisma.$OutflowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
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
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inflows<T extends Job$inflowsArgs<ExtArgs> = {}>(args?: Subset<T, Job$inflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InflowPayload<ExtArgs>, T, "findMany"> | Null>
    outflows<T extends Job$outflowsArgs<ExtArgs> = {}>(args?: Subset<T, Job$outflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutflowPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Job model
   */ 
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'Int'>
    readonly name: FieldRef<"Job", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
  }

  /**
   * Job.inflows
   */
  export type Job$inflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inflow
     */
    select?: InflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InflowInclude<ExtArgs> | null
    where?: InflowWhereInput
    orderBy?: InflowOrderByWithRelationInput | InflowOrderByWithRelationInput[]
    cursor?: InflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InflowScalarFieldEnum | InflowScalarFieldEnum[]
  }

  /**
   * Job.outflows
   */
  export type Job$outflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outflow
     */
    select?: OutflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutflowInclude<ExtArgs> | null
    where?: OutflowWhereInput
    orderBy?: OutflowOrderByWithRelationInput | OutflowOrderByWithRelationInput[]
    cursor?: OutflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutflowScalarFieldEnum | OutflowScalarFieldEnum[]
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model Inflow
   */

  export type AggregateInflow = {
    _count: InflowCountAggregateOutputType | null
    _avg: InflowAvgAggregateOutputType | null
    _sum: InflowSumAggregateOutputType | null
    _min: InflowMinAggregateOutputType | null
    _max: InflowMaxAggregateOutputType | null
  }

  export type InflowAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    personId: number | null
    facilityId: number | null
    jobId: number | null
  }

  export type InflowSumAggregateOutputType = {
    id: number | null
    amount: number | null
    personId: number | null
    facilityId: number | null
    jobId: number | null
  }

  export type InflowMinAggregateOutputType = {
    id: number | null
    amount: number | null
    date: Date | null
    description: string | null
    personId: number | null
    facilityId: number | null
    jobId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InflowMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    date: Date | null
    description: string | null
    personId: number | null
    facilityId: number | null
    jobId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InflowCountAggregateOutputType = {
    id: number
    amount: number
    date: number
    description: number
    personId: number
    facilityId: number
    jobId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InflowAvgAggregateInputType = {
    id?: true
    amount?: true
    personId?: true
    facilityId?: true
    jobId?: true
  }

  export type InflowSumAggregateInputType = {
    id?: true
    amount?: true
    personId?: true
    facilityId?: true
    jobId?: true
  }

  export type InflowMinAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    description?: true
    personId?: true
    facilityId?: true
    jobId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InflowMaxAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    description?: true
    personId?: true
    facilityId?: true
    jobId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InflowCountAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    description?: true
    personId?: true
    facilityId?: true
    jobId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inflow to aggregate.
     */
    where?: InflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inflows to fetch.
     */
    orderBy?: InflowOrderByWithRelationInput | InflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inflows
    **/
    _count?: true | InflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InflowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InflowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InflowMaxAggregateInputType
  }

  export type GetInflowAggregateType<T extends InflowAggregateArgs> = {
        [P in keyof T & keyof AggregateInflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInflow[P]>
      : GetScalarType<T[P], AggregateInflow[P]>
  }




  export type InflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InflowWhereInput
    orderBy?: InflowOrderByWithAggregationInput | InflowOrderByWithAggregationInput[]
    by: InflowScalarFieldEnum[] | InflowScalarFieldEnum
    having?: InflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InflowCountAggregateInputType | true
    _avg?: InflowAvgAggregateInputType
    _sum?: InflowSumAggregateInputType
    _min?: InflowMinAggregateInputType
    _max?: InflowMaxAggregateInputType
  }

  export type InflowGroupByOutputType = {
    id: number
    amount: number
    date: Date
    description: string | null
    personId: number
    facilityId: number
    jobId: number | null
    createdAt: Date
    updatedAt: Date
    _count: InflowCountAggregateOutputType | null
    _avg: InflowAvgAggregateOutputType | null
    _sum: InflowSumAggregateOutputType | null
    _min: InflowMinAggregateOutputType | null
    _max: InflowMaxAggregateOutputType | null
  }

  type GetInflowGroupByPayload<T extends InflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InflowGroupByOutputType[P]>
            : GetScalarType<T[P], InflowGroupByOutputType[P]>
        }
      >
    >


  export type InflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    personId?: boolean
    facilityId?: boolean
    jobId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    job?: boolean | Inflow$jobArgs<ExtArgs>
  }, ExtArgs["result"]["inflow"]>

  export type InflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    personId?: boolean
    facilityId?: boolean
    jobId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    job?: boolean | Inflow$jobArgs<ExtArgs>
  }, ExtArgs["result"]["inflow"]>

  export type InflowSelectScalar = {
    id?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    personId?: boolean
    facilityId?: boolean
    jobId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    job?: boolean | Inflow$jobArgs<ExtArgs>
  }
  export type InflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    job?: boolean | Inflow$jobArgs<ExtArgs>
  }

  export type $InflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inflow"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
      facility: Prisma.$FacilityPayload<ExtArgs>
      job: Prisma.$JobPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      date: Date
      description: string | null
      personId: number
      facilityId: number
      jobId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inflow"]>
    composites: {}
  }

  type InflowGetPayload<S extends boolean | null | undefined | InflowDefaultArgs> = $Result.GetResult<Prisma.$InflowPayload, S>

  type InflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InflowFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InflowCountAggregateInputType | true
    }

  export interface InflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inflow'], meta: { name: 'Inflow' } }
    /**
     * Find zero or one Inflow that matches the filter.
     * @param {InflowFindUniqueArgs} args - Arguments to find a Inflow
     * @example
     * // Get one Inflow
     * const inflow = await prisma.inflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InflowFindUniqueArgs>(args: SelectSubset<T, InflowFindUniqueArgs<ExtArgs>>): Prisma__InflowClient<$Result.GetResult<Prisma.$InflowPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Inflow that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InflowFindUniqueOrThrowArgs} args - Arguments to find a Inflow
     * @example
     * // Get one Inflow
     * const inflow = await prisma.inflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InflowFindUniqueOrThrowArgs>(args: SelectSubset<T, InflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InflowClient<$Result.GetResult<Prisma.$InflowPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Inflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InflowFindFirstArgs} args - Arguments to find a Inflow
     * @example
     * // Get one Inflow
     * const inflow = await prisma.inflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InflowFindFirstArgs>(args?: SelectSubset<T, InflowFindFirstArgs<ExtArgs>>): Prisma__InflowClient<$Result.GetResult<Prisma.$InflowPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Inflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InflowFindFirstOrThrowArgs} args - Arguments to find a Inflow
     * @example
     * // Get one Inflow
     * const inflow = await prisma.inflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InflowFindFirstOrThrowArgs>(args?: SelectSubset<T, InflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__InflowClient<$Result.GetResult<Prisma.$InflowPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Inflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inflows
     * const inflows = await prisma.inflow.findMany()
     * 
     * // Get first 10 Inflows
     * const inflows = await prisma.inflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inflowWithIdOnly = await prisma.inflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InflowFindManyArgs>(args?: SelectSubset<T, InflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InflowPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Inflow.
     * @param {InflowCreateArgs} args - Arguments to create a Inflow.
     * @example
     * // Create one Inflow
     * const Inflow = await prisma.inflow.create({
     *   data: {
     *     // ... data to create a Inflow
     *   }
     * })
     * 
     */
    create<T extends InflowCreateArgs>(args: SelectSubset<T, InflowCreateArgs<ExtArgs>>): Prisma__InflowClient<$Result.GetResult<Prisma.$InflowPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Inflows.
     * @param {InflowCreateManyArgs} args - Arguments to create many Inflows.
     * @example
     * // Create many Inflows
     * const inflow = await prisma.inflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InflowCreateManyArgs>(args?: SelectSubset<T, InflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inflows and returns the data saved in the database.
     * @param {InflowCreateManyAndReturnArgs} args - Arguments to create many Inflows.
     * @example
     * // Create many Inflows
     * const inflow = await prisma.inflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inflows and only return the `id`
     * const inflowWithIdOnly = await prisma.inflow.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InflowCreateManyAndReturnArgs>(args?: SelectSubset<T, InflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InflowPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Inflow.
     * @param {InflowDeleteArgs} args - Arguments to delete one Inflow.
     * @example
     * // Delete one Inflow
     * const Inflow = await prisma.inflow.delete({
     *   where: {
     *     // ... filter to delete one Inflow
     *   }
     * })
     * 
     */
    delete<T extends InflowDeleteArgs>(args: SelectSubset<T, InflowDeleteArgs<ExtArgs>>): Prisma__InflowClient<$Result.GetResult<Prisma.$InflowPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Inflow.
     * @param {InflowUpdateArgs} args - Arguments to update one Inflow.
     * @example
     * // Update one Inflow
     * const inflow = await prisma.inflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InflowUpdateArgs>(args: SelectSubset<T, InflowUpdateArgs<ExtArgs>>): Prisma__InflowClient<$Result.GetResult<Prisma.$InflowPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Inflows.
     * @param {InflowDeleteManyArgs} args - Arguments to filter Inflows to delete.
     * @example
     * // Delete a few Inflows
     * const { count } = await prisma.inflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InflowDeleteManyArgs>(args?: SelectSubset<T, InflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inflows
     * const inflow = await prisma.inflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InflowUpdateManyArgs>(args: SelectSubset<T, InflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inflow.
     * @param {InflowUpsertArgs} args - Arguments to update or create a Inflow.
     * @example
     * // Update or create a Inflow
     * const inflow = await prisma.inflow.upsert({
     *   create: {
     *     // ... data to create a Inflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inflow we want to update
     *   }
     * })
     */
    upsert<T extends InflowUpsertArgs>(args: SelectSubset<T, InflowUpsertArgs<ExtArgs>>): Prisma__InflowClient<$Result.GetResult<Prisma.$InflowPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Inflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InflowCountArgs} args - Arguments to filter Inflows to count.
     * @example
     * // Count the number of Inflows
     * const count = await prisma.inflow.count({
     *   where: {
     *     // ... the filter for the Inflows we want to count
     *   }
     * })
    **/
    count<T extends InflowCountArgs>(
      args?: Subset<T, InflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InflowAggregateArgs>(args: Subset<T, InflowAggregateArgs>): Prisma.PrismaPromise<GetInflowAggregateType<T>>

    /**
     * Group by Inflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InflowGroupByArgs} args - Group by arguments.
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
      T extends InflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InflowGroupByArgs['orderBy'] }
        : { orderBy?: InflowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inflow model
   */
  readonly fields: InflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    facility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    job<T extends Inflow$jobArgs<ExtArgs> = {}>(args?: Subset<T, Inflow$jobArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Inflow model
   */ 
  interface InflowFieldRefs {
    readonly id: FieldRef<"Inflow", 'Int'>
    readonly amount: FieldRef<"Inflow", 'Float'>
    readonly date: FieldRef<"Inflow", 'DateTime'>
    readonly description: FieldRef<"Inflow", 'String'>
    readonly personId: FieldRef<"Inflow", 'Int'>
    readonly facilityId: FieldRef<"Inflow", 'Int'>
    readonly jobId: FieldRef<"Inflow", 'Int'>
    readonly createdAt: FieldRef<"Inflow", 'DateTime'>
    readonly updatedAt: FieldRef<"Inflow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inflow findUnique
   */
  export type InflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inflow
     */
    select?: InflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InflowInclude<ExtArgs> | null
    /**
     * Filter, which Inflow to fetch.
     */
    where: InflowWhereUniqueInput
  }

  /**
   * Inflow findUniqueOrThrow
   */
  export type InflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inflow
     */
    select?: InflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InflowInclude<ExtArgs> | null
    /**
     * Filter, which Inflow to fetch.
     */
    where: InflowWhereUniqueInput
  }

  /**
   * Inflow findFirst
   */
  export type InflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inflow
     */
    select?: InflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InflowInclude<ExtArgs> | null
    /**
     * Filter, which Inflow to fetch.
     */
    where?: InflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inflows to fetch.
     */
    orderBy?: InflowOrderByWithRelationInput | InflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inflows.
     */
    cursor?: InflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inflows.
     */
    distinct?: InflowScalarFieldEnum | InflowScalarFieldEnum[]
  }

  /**
   * Inflow findFirstOrThrow
   */
  export type InflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inflow
     */
    select?: InflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InflowInclude<ExtArgs> | null
    /**
     * Filter, which Inflow to fetch.
     */
    where?: InflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inflows to fetch.
     */
    orderBy?: InflowOrderByWithRelationInput | InflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inflows.
     */
    cursor?: InflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inflows.
     */
    distinct?: InflowScalarFieldEnum | InflowScalarFieldEnum[]
  }

  /**
   * Inflow findMany
   */
  export type InflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inflow
     */
    select?: InflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InflowInclude<ExtArgs> | null
    /**
     * Filter, which Inflows to fetch.
     */
    where?: InflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inflows to fetch.
     */
    orderBy?: InflowOrderByWithRelationInput | InflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inflows.
     */
    cursor?: InflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inflows.
     */
    skip?: number
    distinct?: InflowScalarFieldEnum | InflowScalarFieldEnum[]
  }

  /**
   * Inflow create
   */
  export type InflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inflow
     */
    select?: InflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InflowInclude<ExtArgs> | null
    /**
     * The data needed to create a Inflow.
     */
    data: XOR<InflowCreateInput, InflowUncheckedCreateInput>
  }

  /**
   * Inflow createMany
   */
  export type InflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inflows.
     */
    data: InflowCreateManyInput | InflowCreateManyInput[]
  }

  /**
   * Inflow createManyAndReturn
   */
  export type InflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inflow
     */
    select?: InflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Inflows.
     */
    data: InflowCreateManyInput | InflowCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InflowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inflow update
   */
  export type InflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inflow
     */
    select?: InflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InflowInclude<ExtArgs> | null
    /**
     * The data needed to update a Inflow.
     */
    data: XOR<InflowUpdateInput, InflowUncheckedUpdateInput>
    /**
     * Choose, which Inflow to update.
     */
    where: InflowWhereUniqueInput
  }

  /**
   * Inflow updateMany
   */
  export type InflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inflows.
     */
    data: XOR<InflowUpdateManyMutationInput, InflowUncheckedUpdateManyInput>
    /**
     * Filter which Inflows to update
     */
    where?: InflowWhereInput
  }

  /**
   * Inflow upsert
   */
  export type InflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inflow
     */
    select?: InflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InflowInclude<ExtArgs> | null
    /**
     * The filter to search for the Inflow to update in case it exists.
     */
    where: InflowWhereUniqueInput
    /**
     * In case the Inflow found by the `where` argument doesn't exist, create a new Inflow with this data.
     */
    create: XOR<InflowCreateInput, InflowUncheckedCreateInput>
    /**
     * In case the Inflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InflowUpdateInput, InflowUncheckedUpdateInput>
  }

  /**
   * Inflow delete
   */
  export type InflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inflow
     */
    select?: InflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InflowInclude<ExtArgs> | null
    /**
     * Filter which Inflow to delete.
     */
    where: InflowWhereUniqueInput
  }

  /**
   * Inflow deleteMany
   */
  export type InflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inflows to delete
     */
    where?: InflowWhereInput
  }

  /**
   * Inflow.job
   */
  export type Inflow$jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
  }

  /**
   * Inflow without action
   */
  export type InflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inflow
     */
    select?: InflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InflowInclude<ExtArgs> | null
  }


  /**
   * Model Outflow
   */

  export type AggregateOutflow = {
    _count: OutflowCountAggregateOutputType | null
    _avg: OutflowAvgAggregateOutputType | null
    _sum: OutflowSumAggregateOutputType | null
    _min: OutflowMinAggregateOutputType | null
    _max: OutflowMaxAggregateOutputType | null
  }

  export type OutflowAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    personId: number | null
    facilityId: number | null
    jobId: number | null
  }

  export type OutflowSumAggregateOutputType = {
    id: number | null
    amount: number | null
    personId: number | null
    facilityId: number | null
    jobId: number | null
  }

  export type OutflowMinAggregateOutputType = {
    id: number | null
    amount: number | null
    date: Date | null
    description: string | null
    personId: number | null
    facilityId: number | null
    jobId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutflowMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    date: Date | null
    description: string | null
    personId: number | null
    facilityId: number | null
    jobId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutflowCountAggregateOutputType = {
    id: number
    amount: number
    date: number
    description: number
    personId: number
    facilityId: number
    jobId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OutflowAvgAggregateInputType = {
    id?: true
    amount?: true
    personId?: true
    facilityId?: true
    jobId?: true
  }

  export type OutflowSumAggregateInputType = {
    id?: true
    amount?: true
    personId?: true
    facilityId?: true
    jobId?: true
  }

  export type OutflowMinAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    description?: true
    personId?: true
    facilityId?: true
    jobId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutflowMaxAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    description?: true
    personId?: true
    facilityId?: true
    jobId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutflowCountAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    description?: true
    personId?: true
    facilityId?: true
    jobId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OutflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outflow to aggregate.
     */
    where?: OutflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outflows to fetch.
     */
    orderBy?: OutflowOrderByWithRelationInput | OutflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outflows
    **/
    _count?: true | OutflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutflowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutflowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutflowMaxAggregateInputType
  }

  export type GetOutflowAggregateType<T extends OutflowAggregateArgs> = {
        [P in keyof T & keyof AggregateOutflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutflow[P]>
      : GetScalarType<T[P], AggregateOutflow[P]>
  }




  export type OutflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutflowWhereInput
    orderBy?: OutflowOrderByWithAggregationInput | OutflowOrderByWithAggregationInput[]
    by: OutflowScalarFieldEnum[] | OutflowScalarFieldEnum
    having?: OutflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutflowCountAggregateInputType | true
    _avg?: OutflowAvgAggregateInputType
    _sum?: OutflowSumAggregateInputType
    _min?: OutflowMinAggregateInputType
    _max?: OutflowMaxAggregateInputType
  }

  export type OutflowGroupByOutputType = {
    id: number
    amount: number
    date: Date
    description: string | null
    personId: number
    facilityId: number
    jobId: number | null
    createdAt: Date
    updatedAt: Date
    _count: OutflowCountAggregateOutputType | null
    _avg: OutflowAvgAggregateOutputType | null
    _sum: OutflowSumAggregateOutputType | null
    _min: OutflowMinAggregateOutputType | null
    _max: OutflowMaxAggregateOutputType | null
  }

  type GetOutflowGroupByPayload<T extends OutflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutflowGroupByOutputType[P]>
            : GetScalarType<T[P], OutflowGroupByOutputType[P]>
        }
      >
    >


  export type OutflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    personId?: boolean
    facilityId?: boolean
    jobId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    job?: boolean | Outflow$jobArgs<ExtArgs>
  }, ExtArgs["result"]["outflow"]>

  export type OutflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    personId?: boolean
    facilityId?: boolean
    jobId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    job?: boolean | Outflow$jobArgs<ExtArgs>
  }, ExtArgs["result"]["outflow"]>

  export type OutflowSelectScalar = {
    id?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    personId?: boolean
    facilityId?: boolean
    jobId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OutflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    job?: boolean | Outflow$jobArgs<ExtArgs>
  }
  export type OutflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    job?: boolean | Outflow$jobArgs<ExtArgs>
  }

  export type $OutflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outflow"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
      facility: Prisma.$FacilityPayload<ExtArgs>
      job: Prisma.$JobPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      date: Date
      description: string | null
      personId: number
      facilityId: number
      jobId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["outflow"]>
    composites: {}
  }

  type OutflowGetPayload<S extends boolean | null | undefined | OutflowDefaultArgs> = $Result.GetResult<Prisma.$OutflowPayload, S>

  type OutflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OutflowFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OutflowCountAggregateInputType | true
    }

  export interface OutflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outflow'], meta: { name: 'Outflow' } }
    /**
     * Find zero or one Outflow that matches the filter.
     * @param {OutflowFindUniqueArgs} args - Arguments to find a Outflow
     * @example
     * // Get one Outflow
     * const outflow = await prisma.outflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutflowFindUniqueArgs>(args: SelectSubset<T, OutflowFindUniqueArgs<ExtArgs>>): Prisma__OutflowClient<$Result.GetResult<Prisma.$OutflowPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Outflow that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OutflowFindUniqueOrThrowArgs} args - Arguments to find a Outflow
     * @example
     * // Get one Outflow
     * const outflow = await prisma.outflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutflowFindUniqueOrThrowArgs>(args: SelectSubset<T, OutflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutflowClient<$Result.GetResult<Prisma.$OutflowPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Outflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutflowFindFirstArgs} args - Arguments to find a Outflow
     * @example
     * // Get one Outflow
     * const outflow = await prisma.outflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutflowFindFirstArgs>(args?: SelectSubset<T, OutflowFindFirstArgs<ExtArgs>>): Prisma__OutflowClient<$Result.GetResult<Prisma.$OutflowPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Outflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutflowFindFirstOrThrowArgs} args - Arguments to find a Outflow
     * @example
     * // Get one Outflow
     * const outflow = await prisma.outflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutflowFindFirstOrThrowArgs>(args?: SelectSubset<T, OutflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutflowClient<$Result.GetResult<Prisma.$OutflowPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Outflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outflows
     * const outflows = await prisma.outflow.findMany()
     * 
     * // Get first 10 Outflows
     * const outflows = await prisma.outflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outflowWithIdOnly = await prisma.outflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutflowFindManyArgs>(args?: SelectSubset<T, OutflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutflowPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Outflow.
     * @param {OutflowCreateArgs} args - Arguments to create a Outflow.
     * @example
     * // Create one Outflow
     * const Outflow = await prisma.outflow.create({
     *   data: {
     *     // ... data to create a Outflow
     *   }
     * })
     * 
     */
    create<T extends OutflowCreateArgs>(args: SelectSubset<T, OutflowCreateArgs<ExtArgs>>): Prisma__OutflowClient<$Result.GetResult<Prisma.$OutflowPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Outflows.
     * @param {OutflowCreateManyArgs} args - Arguments to create many Outflows.
     * @example
     * // Create many Outflows
     * const outflow = await prisma.outflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutflowCreateManyArgs>(args?: SelectSubset<T, OutflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Outflows and returns the data saved in the database.
     * @param {OutflowCreateManyAndReturnArgs} args - Arguments to create many Outflows.
     * @example
     * // Create many Outflows
     * const outflow = await prisma.outflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Outflows and only return the `id`
     * const outflowWithIdOnly = await prisma.outflow.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutflowCreateManyAndReturnArgs>(args?: SelectSubset<T, OutflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutflowPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Outflow.
     * @param {OutflowDeleteArgs} args - Arguments to delete one Outflow.
     * @example
     * // Delete one Outflow
     * const Outflow = await prisma.outflow.delete({
     *   where: {
     *     // ... filter to delete one Outflow
     *   }
     * })
     * 
     */
    delete<T extends OutflowDeleteArgs>(args: SelectSubset<T, OutflowDeleteArgs<ExtArgs>>): Prisma__OutflowClient<$Result.GetResult<Prisma.$OutflowPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Outflow.
     * @param {OutflowUpdateArgs} args - Arguments to update one Outflow.
     * @example
     * // Update one Outflow
     * const outflow = await prisma.outflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutflowUpdateArgs>(args: SelectSubset<T, OutflowUpdateArgs<ExtArgs>>): Prisma__OutflowClient<$Result.GetResult<Prisma.$OutflowPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Outflows.
     * @param {OutflowDeleteManyArgs} args - Arguments to filter Outflows to delete.
     * @example
     * // Delete a few Outflows
     * const { count } = await prisma.outflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutflowDeleteManyArgs>(args?: SelectSubset<T, OutflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outflows
     * const outflow = await prisma.outflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutflowUpdateManyArgs>(args: SelectSubset<T, OutflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Outflow.
     * @param {OutflowUpsertArgs} args - Arguments to update or create a Outflow.
     * @example
     * // Update or create a Outflow
     * const outflow = await prisma.outflow.upsert({
     *   create: {
     *     // ... data to create a Outflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outflow we want to update
     *   }
     * })
     */
    upsert<T extends OutflowUpsertArgs>(args: SelectSubset<T, OutflowUpsertArgs<ExtArgs>>): Prisma__OutflowClient<$Result.GetResult<Prisma.$OutflowPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Outflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutflowCountArgs} args - Arguments to filter Outflows to count.
     * @example
     * // Count the number of Outflows
     * const count = await prisma.outflow.count({
     *   where: {
     *     // ... the filter for the Outflows we want to count
     *   }
     * })
    **/
    count<T extends OutflowCountArgs>(
      args?: Subset<T, OutflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutflowAggregateArgs>(args: Subset<T, OutflowAggregateArgs>): Prisma.PrismaPromise<GetOutflowAggregateType<T>>

    /**
     * Group by Outflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutflowGroupByArgs} args - Group by arguments.
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
      T extends OutflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutflowGroupByArgs['orderBy'] }
        : { orderBy?: OutflowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outflow model
   */
  readonly fields: OutflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    facility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    job<T extends Outflow$jobArgs<ExtArgs> = {}>(args?: Subset<T, Outflow$jobArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Outflow model
   */ 
  interface OutflowFieldRefs {
    readonly id: FieldRef<"Outflow", 'Int'>
    readonly amount: FieldRef<"Outflow", 'Float'>
    readonly date: FieldRef<"Outflow", 'DateTime'>
    readonly description: FieldRef<"Outflow", 'String'>
    readonly personId: FieldRef<"Outflow", 'Int'>
    readonly facilityId: FieldRef<"Outflow", 'Int'>
    readonly jobId: FieldRef<"Outflow", 'Int'>
    readonly createdAt: FieldRef<"Outflow", 'DateTime'>
    readonly updatedAt: FieldRef<"Outflow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Outflow findUnique
   */
  export type OutflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outflow
     */
    select?: OutflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutflowInclude<ExtArgs> | null
    /**
     * Filter, which Outflow to fetch.
     */
    where: OutflowWhereUniqueInput
  }

  /**
   * Outflow findUniqueOrThrow
   */
  export type OutflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outflow
     */
    select?: OutflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutflowInclude<ExtArgs> | null
    /**
     * Filter, which Outflow to fetch.
     */
    where: OutflowWhereUniqueInput
  }

  /**
   * Outflow findFirst
   */
  export type OutflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outflow
     */
    select?: OutflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutflowInclude<ExtArgs> | null
    /**
     * Filter, which Outflow to fetch.
     */
    where?: OutflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outflows to fetch.
     */
    orderBy?: OutflowOrderByWithRelationInput | OutflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outflows.
     */
    cursor?: OutflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outflows.
     */
    distinct?: OutflowScalarFieldEnum | OutflowScalarFieldEnum[]
  }

  /**
   * Outflow findFirstOrThrow
   */
  export type OutflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outflow
     */
    select?: OutflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutflowInclude<ExtArgs> | null
    /**
     * Filter, which Outflow to fetch.
     */
    where?: OutflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outflows to fetch.
     */
    orderBy?: OutflowOrderByWithRelationInput | OutflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outflows.
     */
    cursor?: OutflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outflows.
     */
    distinct?: OutflowScalarFieldEnum | OutflowScalarFieldEnum[]
  }

  /**
   * Outflow findMany
   */
  export type OutflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outflow
     */
    select?: OutflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutflowInclude<ExtArgs> | null
    /**
     * Filter, which Outflows to fetch.
     */
    where?: OutflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outflows to fetch.
     */
    orderBy?: OutflowOrderByWithRelationInput | OutflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outflows.
     */
    cursor?: OutflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outflows.
     */
    skip?: number
    distinct?: OutflowScalarFieldEnum | OutflowScalarFieldEnum[]
  }

  /**
   * Outflow create
   */
  export type OutflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outflow
     */
    select?: OutflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutflowInclude<ExtArgs> | null
    /**
     * The data needed to create a Outflow.
     */
    data: XOR<OutflowCreateInput, OutflowUncheckedCreateInput>
  }

  /**
   * Outflow createMany
   */
  export type OutflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outflows.
     */
    data: OutflowCreateManyInput | OutflowCreateManyInput[]
  }

  /**
   * Outflow createManyAndReturn
   */
  export type OutflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outflow
     */
    select?: OutflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Outflows.
     */
    data: OutflowCreateManyInput | OutflowCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutflowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outflow update
   */
  export type OutflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outflow
     */
    select?: OutflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutflowInclude<ExtArgs> | null
    /**
     * The data needed to update a Outflow.
     */
    data: XOR<OutflowUpdateInput, OutflowUncheckedUpdateInput>
    /**
     * Choose, which Outflow to update.
     */
    where: OutflowWhereUniqueInput
  }

  /**
   * Outflow updateMany
   */
  export type OutflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outflows.
     */
    data: XOR<OutflowUpdateManyMutationInput, OutflowUncheckedUpdateManyInput>
    /**
     * Filter which Outflows to update
     */
    where?: OutflowWhereInput
  }

  /**
   * Outflow upsert
   */
  export type OutflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outflow
     */
    select?: OutflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutflowInclude<ExtArgs> | null
    /**
     * The filter to search for the Outflow to update in case it exists.
     */
    where: OutflowWhereUniqueInput
    /**
     * In case the Outflow found by the `where` argument doesn't exist, create a new Outflow with this data.
     */
    create: XOR<OutflowCreateInput, OutflowUncheckedCreateInput>
    /**
     * In case the Outflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutflowUpdateInput, OutflowUncheckedUpdateInput>
  }

  /**
   * Outflow delete
   */
  export type OutflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outflow
     */
    select?: OutflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutflowInclude<ExtArgs> | null
    /**
     * Filter which Outflow to delete.
     */
    where: OutflowWhereUniqueInput
  }

  /**
   * Outflow deleteMany
   */
  export type OutflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outflows to delete
     */
    where?: OutflowWhereInput
  }

  /**
   * Outflow.job
   */
  export type Outflow$jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
  }

  /**
   * Outflow without action
   */
  export type OutflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outflow
     */
    select?: OutflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutflowInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PersonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const FacilityScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type FacilityScalarFieldEnum = (typeof FacilityScalarFieldEnum)[keyof typeof FacilityScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const InflowScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    date: 'date',
    description: 'description',
    personId: 'personId',
    facilityId: 'facilityId',
    jobId: 'jobId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InflowScalarFieldEnum = (typeof InflowScalarFieldEnum)[keyof typeof InflowScalarFieldEnum]


  export const OutflowScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    date: 'date',
    description: 'description',
    personId: 'personId',
    facilityId: 'facilityId',
    jobId: 'jobId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OutflowScalarFieldEnum = (typeof OutflowScalarFieldEnum)[keyof typeof OutflowScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: IntFilter<"Person"> | number
    name?: StringFilter<"Person"> | string
    email?: StringNullableFilter<"Person"> | string | null
    inflows?: InflowListRelationFilter
    outflows?: OutflowListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    inflows?: InflowOrderByRelationAggregateInput
    outflows?: OutflowOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    email?: string
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    inflows?: InflowListRelationFilter
    outflows?: OutflowListRelationFilter
  }, "id" | "name" | "email">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    _count?: PersonCountOrderByAggregateInput
    _avg?: PersonAvgOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
    _sum?: PersonSumOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Person"> | number
    name?: StringWithAggregatesFilter<"Person"> | string
    email?: StringNullableWithAggregatesFilter<"Person"> | string | null
  }

  export type FacilityWhereInput = {
    AND?: FacilityWhereInput | FacilityWhereInput[]
    OR?: FacilityWhereInput[]
    NOT?: FacilityWhereInput | FacilityWhereInput[]
    id?: IntFilter<"Facility"> | number
    name?: StringFilter<"Facility"> | string
    inflows?: InflowListRelationFilter
    outflow?: OutflowListRelationFilter
  }

  export type FacilityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    inflows?: InflowOrderByRelationAggregateInput
    outflow?: OutflowOrderByRelationAggregateInput
  }

  export type FacilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: FacilityWhereInput | FacilityWhereInput[]
    OR?: FacilityWhereInput[]
    NOT?: FacilityWhereInput | FacilityWhereInput[]
    inflows?: InflowListRelationFilter
    outflow?: OutflowListRelationFilter
  }, "id" | "name">

  export type FacilityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: FacilityCountOrderByAggregateInput
    _avg?: FacilityAvgOrderByAggregateInput
    _max?: FacilityMaxOrderByAggregateInput
    _min?: FacilityMinOrderByAggregateInput
    _sum?: FacilitySumOrderByAggregateInput
  }

  export type FacilityScalarWhereWithAggregatesInput = {
    AND?: FacilityScalarWhereWithAggregatesInput | FacilityScalarWhereWithAggregatesInput[]
    OR?: FacilityScalarWhereWithAggregatesInput[]
    NOT?: FacilityScalarWhereWithAggregatesInput | FacilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Facility"> | number
    name?: StringWithAggregatesFilter<"Facility"> | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: IntFilter<"Job"> | number
    name?: StringFilter<"Job"> | string
    inflows?: InflowListRelationFilter
    outflows?: OutflowListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    inflows?: InflowOrderByRelationAggregateInput
    outflows?: OutflowOrderByRelationAggregateInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    inflows?: InflowListRelationFilter
    outflows?: OutflowListRelationFilter
  }, "id" | "name">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Job"> | number
    name?: StringWithAggregatesFilter<"Job"> | string
  }

  export type InflowWhereInput = {
    AND?: InflowWhereInput | InflowWhereInput[]
    OR?: InflowWhereInput[]
    NOT?: InflowWhereInput | InflowWhereInput[]
    id?: IntFilter<"Inflow"> | number
    amount?: FloatFilter<"Inflow"> | number
    date?: DateTimeFilter<"Inflow"> | Date | string
    description?: StringNullableFilter<"Inflow"> | string | null
    personId?: IntFilter<"Inflow"> | number
    facilityId?: IntFilter<"Inflow"> | number
    jobId?: IntNullableFilter<"Inflow"> | number | null
    createdAt?: DateTimeFilter<"Inflow"> | Date | string
    updatedAt?: DateTimeFilter<"Inflow"> | Date | string
    person?: XOR<PersonRelationFilter, PersonWhereInput>
    facility?: XOR<FacilityRelationFilter, FacilityWhereInput>
    job?: XOR<JobNullableRelationFilter, JobWhereInput> | null
  }

  export type InflowOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrderInput | SortOrder
    personId?: SortOrder
    facilityId?: SortOrder
    jobId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    person?: PersonOrderByWithRelationInput
    facility?: FacilityOrderByWithRelationInput
    job?: JobOrderByWithRelationInput
  }

  export type InflowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InflowWhereInput | InflowWhereInput[]
    OR?: InflowWhereInput[]
    NOT?: InflowWhereInput | InflowWhereInput[]
    amount?: FloatFilter<"Inflow"> | number
    date?: DateTimeFilter<"Inflow"> | Date | string
    description?: StringNullableFilter<"Inflow"> | string | null
    personId?: IntFilter<"Inflow"> | number
    facilityId?: IntFilter<"Inflow"> | number
    jobId?: IntNullableFilter<"Inflow"> | number | null
    createdAt?: DateTimeFilter<"Inflow"> | Date | string
    updatedAt?: DateTimeFilter<"Inflow"> | Date | string
    person?: XOR<PersonRelationFilter, PersonWhereInput>
    facility?: XOR<FacilityRelationFilter, FacilityWhereInput>
    job?: XOR<JobNullableRelationFilter, JobWhereInput> | null
  }, "id">

  export type InflowOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrderInput | SortOrder
    personId?: SortOrder
    facilityId?: SortOrder
    jobId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InflowCountOrderByAggregateInput
    _avg?: InflowAvgOrderByAggregateInput
    _max?: InflowMaxOrderByAggregateInput
    _min?: InflowMinOrderByAggregateInput
    _sum?: InflowSumOrderByAggregateInput
  }

  export type InflowScalarWhereWithAggregatesInput = {
    AND?: InflowScalarWhereWithAggregatesInput | InflowScalarWhereWithAggregatesInput[]
    OR?: InflowScalarWhereWithAggregatesInput[]
    NOT?: InflowScalarWhereWithAggregatesInput | InflowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inflow"> | number
    amount?: FloatWithAggregatesFilter<"Inflow"> | number
    date?: DateTimeWithAggregatesFilter<"Inflow"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Inflow"> | string | null
    personId?: IntWithAggregatesFilter<"Inflow"> | number
    facilityId?: IntWithAggregatesFilter<"Inflow"> | number
    jobId?: IntNullableWithAggregatesFilter<"Inflow"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Inflow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Inflow"> | Date | string
  }

  export type OutflowWhereInput = {
    AND?: OutflowWhereInput | OutflowWhereInput[]
    OR?: OutflowWhereInput[]
    NOT?: OutflowWhereInput | OutflowWhereInput[]
    id?: IntFilter<"Outflow"> | number
    amount?: FloatFilter<"Outflow"> | number
    date?: DateTimeFilter<"Outflow"> | Date | string
    description?: StringNullableFilter<"Outflow"> | string | null
    personId?: IntFilter<"Outflow"> | number
    facilityId?: IntFilter<"Outflow"> | number
    jobId?: IntNullableFilter<"Outflow"> | number | null
    createdAt?: DateTimeFilter<"Outflow"> | Date | string
    updatedAt?: DateTimeFilter<"Outflow"> | Date | string
    person?: XOR<PersonRelationFilter, PersonWhereInput>
    facility?: XOR<FacilityRelationFilter, FacilityWhereInput>
    job?: XOR<JobNullableRelationFilter, JobWhereInput> | null
  }

  export type OutflowOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrderInput | SortOrder
    personId?: SortOrder
    facilityId?: SortOrder
    jobId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    person?: PersonOrderByWithRelationInput
    facility?: FacilityOrderByWithRelationInput
    job?: JobOrderByWithRelationInput
  }

  export type OutflowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OutflowWhereInput | OutflowWhereInput[]
    OR?: OutflowWhereInput[]
    NOT?: OutflowWhereInput | OutflowWhereInput[]
    amount?: FloatFilter<"Outflow"> | number
    date?: DateTimeFilter<"Outflow"> | Date | string
    description?: StringNullableFilter<"Outflow"> | string | null
    personId?: IntFilter<"Outflow"> | number
    facilityId?: IntFilter<"Outflow"> | number
    jobId?: IntNullableFilter<"Outflow"> | number | null
    createdAt?: DateTimeFilter<"Outflow"> | Date | string
    updatedAt?: DateTimeFilter<"Outflow"> | Date | string
    person?: XOR<PersonRelationFilter, PersonWhereInput>
    facility?: XOR<FacilityRelationFilter, FacilityWhereInput>
    job?: XOR<JobNullableRelationFilter, JobWhereInput> | null
  }, "id">

  export type OutflowOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrderInput | SortOrder
    personId?: SortOrder
    facilityId?: SortOrder
    jobId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OutflowCountOrderByAggregateInput
    _avg?: OutflowAvgOrderByAggregateInput
    _max?: OutflowMaxOrderByAggregateInput
    _min?: OutflowMinOrderByAggregateInput
    _sum?: OutflowSumOrderByAggregateInput
  }

  export type OutflowScalarWhereWithAggregatesInput = {
    AND?: OutflowScalarWhereWithAggregatesInput | OutflowScalarWhereWithAggregatesInput[]
    OR?: OutflowScalarWhereWithAggregatesInput[]
    NOT?: OutflowScalarWhereWithAggregatesInput | OutflowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Outflow"> | number
    amount?: FloatWithAggregatesFilter<"Outflow"> | number
    date?: DateTimeWithAggregatesFilter<"Outflow"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Outflow"> | string | null
    personId?: IntWithAggregatesFilter<"Outflow"> | number
    facilityId?: IntWithAggregatesFilter<"Outflow"> | number
    jobId?: IntNullableWithAggregatesFilter<"Outflow"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Outflow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Outflow"> | Date | string
  }

  export type PersonCreateInput = {
    name: string
    email?: string | null
    inflows?: InflowCreateNestedManyWithoutPersonInput
    outflows?: OutflowCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id?: number
    name: string
    email?: string | null
    inflows?: InflowUncheckedCreateNestedManyWithoutPersonInput
    outflows?: OutflowUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    inflows?: InflowUpdateManyWithoutPersonNestedInput
    outflows?: OutflowUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    inflows?: InflowUncheckedUpdateManyWithoutPersonNestedInput
    outflows?: OutflowUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id?: number
    name: string
    email?: string | null
  }

  export type PersonUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacilityCreateInput = {
    name: string
    inflows?: InflowCreateNestedManyWithoutFacilityInput
    outflow?: OutflowCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateInput = {
    id?: number
    name: string
    inflows?: InflowUncheckedCreateNestedManyWithoutFacilityInput
    outflow?: OutflowUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    inflows?: InflowUpdateManyWithoutFacilityNestedInput
    outflow?: OutflowUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    inflows?: InflowUncheckedUpdateManyWithoutFacilityNestedInput
    outflow?: OutflowUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityCreateManyInput = {
    id?: number
    name: string
  }

  export type FacilityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FacilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type JobCreateInput = {
    name: string
    inflows?: InflowCreateNestedManyWithoutJobInput
    outflows?: OutflowCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: number
    name: string
    inflows?: InflowUncheckedCreateNestedManyWithoutJobInput
    outflows?: OutflowUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    inflows?: InflowUpdateManyWithoutJobNestedInput
    outflows?: OutflowUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    inflows?: InflowUncheckedUpdateManyWithoutJobNestedInput
    outflows?: OutflowUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: number
    name: string
  }

  export type JobUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type JobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InflowCreateInput = {
    amount: number
    date: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutInflowsInput
    facility: FacilityCreateNestedOneWithoutInflowsInput
    job?: JobCreateNestedOneWithoutInflowsInput
  }

  export type InflowUncheckedCreateInput = {
    id?: number
    amount: number
    date: Date | string
    description?: string | null
    personId: number
    facilityId: number
    jobId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InflowUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutInflowsNestedInput
    facility?: FacilityUpdateOneRequiredWithoutInflowsNestedInput
    job?: JobUpdateOneWithoutInflowsNestedInput
  }

  export type InflowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InflowCreateManyInput = {
    id?: number
    amount: number
    date: Date | string
    description?: string | null
    personId: number
    facilityId: number
    jobId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InflowUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InflowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutflowCreateInput = {
    amount: number
    date: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutOutflowsInput
    facility: FacilityCreateNestedOneWithoutOutflowInput
    job?: JobCreateNestedOneWithoutOutflowsInput
  }

  export type OutflowUncheckedCreateInput = {
    id?: number
    amount: number
    date: Date | string
    description?: string | null
    personId: number
    facilityId: number
    jobId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutflowUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutOutflowsNestedInput
    facility?: FacilityUpdateOneRequiredWithoutOutflowNestedInput
    job?: JobUpdateOneWithoutOutflowsNestedInput
  }

  export type OutflowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutflowCreateManyInput = {
    id?: number
    amount: number
    date: Date | string
    description?: string | null
    personId: number
    facilityId: number
    jobId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutflowUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutflowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type InflowListRelationFilter = {
    every?: InflowWhereInput
    some?: InflowWhereInput
    none?: InflowWhereInput
  }

  export type OutflowListRelationFilter = {
    every?: OutflowWhereInput
    some?: OutflowWhereInput
    none?: OutflowWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InflowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutflowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type PersonAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type PersonSumOrderByAggregateInput = {
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type FacilityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FacilityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FacilityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FacilityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FacilitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PersonRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type FacilityRelationFilter = {
    is?: FacilityWhereInput
    isNot?: FacilityWhereInput
  }

  export type JobNullableRelationFilter = {
    is?: JobWhereInput | null
    isNot?: JobWhereInput | null
  }

  export type InflowCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrder
    personId?: SortOrder
    facilityId?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InflowAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    personId?: SortOrder
    facilityId?: SortOrder
    jobId?: SortOrder
  }

  export type InflowMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrder
    personId?: SortOrder
    facilityId?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InflowMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrder
    personId?: SortOrder
    facilityId?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InflowSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    personId?: SortOrder
    facilityId?: SortOrder
    jobId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type OutflowCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrder
    personId?: SortOrder
    facilityId?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutflowAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    personId?: SortOrder
    facilityId?: SortOrder
    jobId?: SortOrder
  }

  export type OutflowMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrder
    personId?: SortOrder
    facilityId?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutflowMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrder
    personId?: SortOrder
    facilityId?: SortOrder
    jobId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutflowSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    personId?: SortOrder
    facilityId?: SortOrder
    jobId?: SortOrder
  }

  export type InflowCreateNestedManyWithoutPersonInput = {
    create?: XOR<InflowCreateWithoutPersonInput, InflowUncheckedCreateWithoutPersonInput> | InflowCreateWithoutPersonInput[] | InflowUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: InflowCreateOrConnectWithoutPersonInput | InflowCreateOrConnectWithoutPersonInput[]
    createMany?: InflowCreateManyPersonInputEnvelope
    connect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
  }

  export type OutflowCreateNestedManyWithoutPersonInput = {
    create?: XOR<OutflowCreateWithoutPersonInput, OutflowUncheckedCreateWithoutPersonInput> | OutflowCreateWithoutPersonInput[] | OutflowUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: OutflowCreateOrConnectWithoutPersonInput | OutflowCreateOrConnectWithoutPersonInput[]
    createMany?: OutflowCreateManyPersonInputEnvelope
    connect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
  }

  export type InflowUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<InflowCreateWithoutPersonInput, InflowUncheckedCreateWithoutPersonInput> | InflowCreateWithoutPersonInput[] | InflowUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: InflowCreateOrConnectWithoutPersonInput | InflowCreateOrConnectWithoutPersonInput[]
    createMany?: InflowCreateManyPersonInputEnvelope
    connect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
  }

  export type OutflowUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<OutflowCreateWithoutPersonInput, OutflowUncheckedCreateWithoutPersonInput> | OutflowCreateWithoutPersonInput[] | OutflowUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: OutflowCreateOrConnectWithoutPersonInput | OutflowCreateOrConnectWithoutPersonInput[]
    createMany?: OutflowCreateManyPersonInputEnvelope
    connect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type InflowUpdateManyWithoutPersonNestedInput = {
    create?: XOR<InflowCreateWithoutPersonInput, InflowUncheckedCreateWithoutPersonInput> | InflowCreateWithoutPersonInput[] | InflowUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: InflowCreateOrConnectWithoutPersonInput | InflowCreateOrConnectWithoutPersonInput[]
    upsert?: InflowUpsertWithWhereUniqueWithoutPersonInput | InflowUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: InflowCreateManyPersonInputEnvelope
    set?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    disconnect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    delete?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    connect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    update?: InflowUpdateWithWhereUniqueWithoutPersonInput | InflowUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: InflowUpdateManyWithWhereWithoutPersonInput | InflowUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: InflowScalarWhereInput | InflowScalarWhereInput[]
  }

  export type OutflowUpdateManyWithoutPersonNestedInput = {
    create?: XOR<OutflowCreateWithoutPersonInput, OutflowUncheckedCreateWithoutPersonInput> | OutflowCreateWithoutPersonInput[] | OutflowUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: OutflowCreateOrConnectWithoutPersonInput | OutflowCreateOrConnectWithoutPersonInput[]
    upsert?: OutflowUpsertWithWhereUniqueWithoutPersonInput | OutflowUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: OutflowCreateManyPersonInputEnvelope
    set?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    disconnect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    delete?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    connect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    update?: OutflowUpdateWithWhereUniqueWithoutPersonInput | OutflowUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: OutflowUpdateManyWithWhereWithoutPersonInput | OutflowUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: OutflowScalarWhereInput | OutflowScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InflowUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<InflowCreateWithoutPersonInput, InflowUncheckedCreateWithoutPersonInput> | InflowCreateWithoutPersonInput[] | InflowUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: InflowCreateOrConnectWithoutPersonInput | InflowCreateOrConnectWithoutPersonInput[]
    upsert?: InflowUpsertWithWhereUniqueWithoutPersonInput | InflowUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: InflowCreateManyPersonInputEnvelope
    set?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    disconnect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    delete?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    connect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    update?: InflowUpdateWithWhereUniqueWithoutPersonInput | InflowUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: InflowUpdateManyWithWhereWithoutPersonInput | InflowUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: InflowScalarWhereInput | InflowScalarWhereInput[]
  }

  export type OutflowUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<OutflowCreateWithoutPersonInput, OutflowUncheckedCreateWithoutPersonInput> | OutflowCreateWithoutPersonInput[] | OutflowUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: OutflowCreateOrConnectWithoutPersonInput | OutflowCreateOrConnectWithoutPersonInput[]
    upsert?: OutflowUpsertWithWhereUniqueWithoutPersonInput | OutflowUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: OutflowCreateManyPersonInputEnvelope
    set?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    disconnect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    delete?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    connect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    update?: OutflowUpdateWithWhereUniqueWithoutPersonInput | OutflowUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: OutflowUpdateManyWithWhereWithoutPersonInput | OutflowUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: OutflowScalarWhereInput | OutflowScalarWhereInput[]
  }

  export type InflowCreateNestedManyWithoutFacilityInput = {
    create?: XOR<InflowCreateWithoutFacilityInput, InflowUncheckedCreateWithoutFacilityInput> | InflowCreateWithoutFacilityInput[] | InflowUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: InflowCreateOrConnectWithoutFacilityInput | InflowCreateOrConnectWithoutFacilityInput[]
    createMany?: InflowCreateManyFacilityInputEnvelope
    connect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
  }

  export type OutflowCreateNestedManyWithoutFacilityInput = {
    create?: XOR<OutflowCreateWithoutFacilityInput, OutflowUncheckedCreateWithoutFacilityInput> | OutflowCreateWithoutFacilityInput[] | OutflowUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: OutflowCreateOrConnectWithoutFacilityInput | OutflowCreateOrConnectWithoutFacilityInput[]
    createMany?: OutflowCreateManyFacilityInputEnvelope
    connect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
  }

  export type InflowUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<InflowCreateWithoutFacilityInput, InflowUncheckedCreateWithoutFacilityInput> | InflowCreateWithoutFacilityInput[] | InflowUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: InflowCreateOrConnectWithoutFacilityInput | InflowCreateOrConnectWithoutFacilityInput[]
    createMany?: InflowCreateManyFacilityInputEnvelope
    connect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
  }

  export type OutflowUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<OutflowCreateWithoutFacilityInput, OutflowUncheckedCreateWithoutFacilityInput> | OutflowCreateWithoutFacilityInput[] | OutflowUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: OutflowCreateOrConnectWithoutFacilityInput | OutflowCreateOrConnectWithoutFacilityInput[]
    createMany?: OutflowCreateManyFacilityInputEnvelope
    connect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
  }

  export type InflowUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<InflowCreateWithoutFacilityInput, InflowUncheckedCreateWithoutFacilityInput> | InflowCreateWithoutFacilityInput[] | InflowUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: InflowCreateOrConnectWithoutFacilityInput | InflowCreateOrConnectWithoutFacilityInput[]
    upsert?: InflowUpsertWithWhereUniqueWithoutFacilityInput | InflowUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: InflowCreateManyFacilityInputEnvelope
    set?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    disconnect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    delete?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    connect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    update?: InflowUpdateWithWhereUniqueWithoutFacilityInput | InflowUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: InflowUpdateManyWithWhereWithoutFacilityInput | InflowUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: InflowScalarWhereInput | InflowScalarWhereInput[]
  }

  export type OutflowUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<OutflowCreateWithoutFacilityInput, OutflowUncheckedCreateWithoutFacilityInput> | OutflowCreateWithoutFacilityInput[] | OutflowUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: OutflowCreateOrConnectWithoutFacilityInput | OutflowCreateOrConnectWithoutFacilityInput[]
    upsert?: OutflowUpsertWithWhereUniqueWithoutFacilityInput | OutflowUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: OutflowCreateManyFacilityInputEnvelope
    set?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    disconnect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    delete?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    connect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    update?: OutflowUpdateWithWhereUniqueWithoutFacilityInput | OutflowUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: OutflowUpdateManyWithWhereWithoutFacilityInput | OutflowUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: OutflowScalarWhereInput | OutflowScalarWhereInput[]
  }

  export type InflowUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<InflowCreateWithoutFacilityInput, InflowUncheckedCreateWithoutFacilityInput> | InflowCreateWithoutFacilityInput[] | InflowUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: InflowCreateOrConnectWithoutFacilityInput | InflowCreateOrConnectWithoutFacilityInput[]
    upsert?: InflowUpsertWithWhereUniqueWithoutFacilityInput | InflowUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: InflowCreateManyFacilityInputEnvelope
    set?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    disconnect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    delete?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    connect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    update?: InflowUpdateWithWhereUniqueWithoutFacilityInput | InflowUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: InflowUpdateManyWithWhereWithoutFacilityInput | InflowUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: InflowScalarWhereInput | InflowScalarWhereInput[]
  }

  export type OutflowUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<OutflowCreateWithoutFacilityInput, OutflowUncheckedCreateWithoutFacilityInput> | OutflowCreateWithoutFacilityInput[] | OutflowUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: OutflowCreateOrConnectWithoutFacilityInput | OutflowCreateOrConnectWithoutFacilityInput[]
    upsert?: OutflowUpsertWithWhereUniqueWithoutFacilityInput | OutflowUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: OutflowCreateManyFacilityInputEnvelope
    set?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    disconnect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    delete?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    connect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    update?: OutflowUpdateWithWhereUniqueWithoutFacilityInput | OutflowUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: OutflowUpdateManyWithWhereWithoutFacilityInput | OutflowUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: OutflowScalarWhereInput | OutflowScalarWhereInput[]
  }

  export type InflowCreateNestedManyWithoutJobInput = {
    create?: XOR<InflowCreateWithoutJobInput, InflowUncheckedCreateWithoutJobInput> | InflowCreateWithoutJobInput[] | InflowUncheckedCreateWithoutJobInput[]
    connectOrCreate?: InflowCreateOrConnectWithoutJobInput | InflowCreateOrConnectWithoutJobInput[]
    createMany?: InflowCreateManyJobInputEnvelope
    connect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
  }

  export type OutflowCreateNestedManyWithoutJobInput = {
    create?: XOR<OutflowCreateWithoutJobInput, OutflowUncheckedCreateWithoutJobInput> | OutflowCreateWithoutJobInput[] | OutflowUncheckedCreateWithoutJobInput[]
    connectOrCreate?: OutflowCreateOrConnectWithoutJobInput | OutflowCreateOrConnectWithoutJobInput[]
    createMany?: OutflowCreateManyJobInputEnvelope
    connect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
  }

  export type InflowUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<InflowCreateWithoutJobInput, InflowUncheckedCreateWithoutJobInput> | InflowCreateWithoutJobInput[] | InflowUncheckedCreateWithoutJobInput[]
    connectOrCreate?: InflowCreateOrConnectWithoutJobInput | InflowCreateOrConnectWithoutJobInput[]
    createMany?: InflowCreateManyJobInputEnvelope
    connect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
  }

  export type OutflowUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<OutflowCreateWithoutJobInput, OutflowUncheckedCreateWithoutJobInput> | OutflowCreateWithoutJobInput[] | OutflowUncheckedCreateWithoutJobInput[]
    connectOrCreate?: OutflowCreateOrConnectWithoutJobInput | OutflowCreateOrConnectWithoutJobInput[]
    createMany?: OutflowCreateManyJobInputEnvelope
    connect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
  }

  export type InflowUpdateManyWithoutJobNestedInput = {
    create?: XOR<InflowCreateWithoutJobInput, InflowUncheckedCreateWithoutJobInput> | InflowCreateWithoutJobInput[] | InflowUncheckedCreateWithoutJobInput[]
    connectOrCreate?: InflowCreateOrConnectWithoutJobInput | InflowCreateOrConnectWithoutJobInput[]
    upsert?: InflowUpsertWithWhereUniqueWithoutJobInput | InflowUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: InflowCreateManyJobInputEnvelope
    set?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    disconnect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    delete?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    connect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    update?: InflowUpdateWithWhereUniqueWithoutJobInput | InflowUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: InflowUpdateManyWithWhereWithoutJobInput | InflowUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: InflowScalarWhereInput | InflowScalarWhereInput[]
  }

  export type OutflowUpdateManyWithoutJobNestedInput = {
    create?: XOR<OutflowCreateWithoutJobInput, OutflowUncheckedCreateWithoutJobInput> | OutflowCreateWithoutJobInput[] | OutflowUncheckedCreateWithoutJobInput[]
    connectOrCreate?: OutflowCreateOrConnectWithoutJobInput | OutflowCreateOrConnectWithoutJobInput[]
    upsert?: OutflowUpsertWithWhereUniqueWithoutJobInput | OutflowUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: OutflowCreateManyJobInputEnvelope
    set?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    disconnect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    delete?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    connect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    update?: OutflowUpdateWithWhereUniqueWithoutJobInput | OutflowUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: OutflowUpdateManyWithWhereWithoutJobInput | OutflowUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: OutflowScalarWhereInput | OutflowScalarWhereInput[]
  }

  export type InflowUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<InflowCreateWithoutJobInput, InflowUncheckedCreateWithoutJobInput> | InflowCreateWithoutJobInput[] | InflowUncheckedCreateWithoutJobInput[]
    connectOrCreate?: InflowCreateOrConnectWithoutJobInput | InflowCreateOrConnectWithoutJobInput[]
    upsert?: InflowUpsertWithWhereUniqueWithoutJobInput | InflowUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: InflowCreateManyJobInputEnvelope
    set?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    disconnect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    delete?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    connect?: InflowWhereUniqueInput | InflowWhereUniqueInput[]
    update?: InflowUpdateWithWhereUniqueWithoutJobInput | InflowUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: InflowUpdateManyWithWhereWithoutJobInput | InflowUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: InflowScalarWhereInput | InflowScalarWhereInput[]
  }

  export type OutflowUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<OutflowCreateWithoutJobInput, OutflowUncheckedCreateWithoutJobInput> | OutflowCreateWithoutJobInput[] | OutflowUncheckedCreateWithoutJobInput[]
    connectOrCreate?: OutflowCreateOrConnectWithoutJobInput | OutflowCreateOrConnectWithoutJobInput[]
    upsert?: OutflowUpsertWithWhereUniqueWithoutJobInput | OutflowUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: OutflowCreateManyJobInputEnvelope
    set?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    disconnect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    delete?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    connect?: OutflowWhereUniqueInput | OutflowWhereUniqueInput[]
    update?: OutflowUpdateWithWhereUniqueWithoutJobInput | OutflowUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: OutflowUpdateManyWithWhereWithoutJobInput | OutflowUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: OutflowScalarWhereInput | OutflowScalarWhereInput[]
  }

  export type PersonCreateNestedOneWithoutInflowsInput = {
    create?: XOR<PersonCreateWithoutInflowsInput, PersonUncheckedCreateWithoutInflowsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutInflowsInput
    connect?: PersonWhereUniqueInput
  }

  export type FacilityCreateNestedOneWithoutInflowsInput = {
    create?: XOR<FacilityCreateWithoutInflowsInput, FacilityUncheckedCreateWithoutInflowsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutInflowsInput
    connect?: FacilityWhereUniqueInput
  }

  export type JobCreateNestedOneWithoutInflowsInput = {
    create?: XOR<JobCreateWithoutInflowsInput, JobUncheckedCreateWithoutInflowsInput>
    connectOrCreate?: JobCreateOrConnectWithoutInflowsInput
    connect?: JobWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PersonUpdateOneRequiredWithoutInflowsNestedInput = {
    create?: XOR<PersonCreateWithoutInflowsInput, PersonUncheckedCreateWithoutInflowsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutInflowsInput
    upsert?: PersonUpsertWithoutInflowsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutInflowsInput, PersonUpdateWithoutInflowsInput>, PersonUncheckedUpdateWithoutInflowsInput>
  }

  export type FacilityUpdateOneRequiredWithoutInflowsNestedInput = {
    create?: XOR<FacilityCreateWithoutInflowsInput, FacilityUncheckedCreateWithoutInflowsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutInflowsInput
    upsert?: FacilityUpsertWithoutInflowsInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutInflowsInput, FacilityUpdateWithoutInflowsInput>, FacilityUncheckedUpdateWithoutInflowsInput>
  }

  export type JobUpdateOneWithoutInflowsNestedInput = {
    create?: XOR<JobCreateWithoutInflowsInput, JobUncheckedCreateWithoutInflowsInput>
    connectOrCreate?: JobCreateOrConnectWithoutInflowsInput
    upsert?: JobUpsertWithoutInflowsInput
    disconnect?: JobWhereInput | boolean
    delete?: JobWhereInput | boolean
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutInflowsInput, JobUpdateWithoutInflowsInput>, JobUncheckedUpdateWithoutInflowsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PersonCreateNestedOneWithoutOutflowsInput = {
    create?: XOR<PersonCreateWithoutOutflowsInput, PersonUncheckedCreateWithoutOutflowsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutOutflowsInput
    connect?: PersonWhereUniqueInput
  }

  export type FacilityCreateNestedOneWithoutOutflowInput = {
    create?: XOR<FacilityCreateWithoutOutflowInput, FacilityUncheckedCreateWithoutOutflowInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutOutflowInput
    connect?: FacilityWhereUniqueInput
  }

  export type JobCreateNestedOneWithoutOutflowsInput = {
    create?: XOR<JobCreateWithoutOutflowsInput, JobUncheckedCreateWithoutOutflowsInput>
    connectOrCreate?: JobCreateOrConnectWithoutOutflowsInput
    connect?: JobWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutOutflowsNestedInput = {
    create?: XOR<PersonCreateWithoutOutflowsInput, PersonUncheckedCreateWithoutOutflowsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutOutflowsInput
    upsert?: PersonUpsertWithoutOutflowsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutOutflowsInput, PersonUpdateWithoutOutflowsInput>, PersonUncheckedUpdateWithoutOutflowsInput>
  }

  export type FacilityUpdateOneRequiredWithoutOutflowNestedInput = {
    create?: XOR<FacilityCreateWithoutOutflowInput, FacilityUncheckedCreateWithoutOutflowInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutOutflowInput
    upsert?: FacilityUpsertWithoutOutflowInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutOutflowInput, FacilityUpdateWithoutOutflowInput>, FacilityUncheckedUpdateWithoutOutflowInput>
  }

  export type JobUpdateOneWithoutOutflowsNestedInput = {
    create?: XOR<JobCreateWithoutOutflowsInput, JobUncheckedCreateWithoutOutflowsInput>
    connectOrCreate?: JobCreateOrConnectWithoutOutflowsInput
    upsert?: JobUpsertWithoutOutflowsInput
    disconnect?: JobWhereInput | boolean
    delete?: JobWhereInput | boolean
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutOutflowsInput, JobUpdateWithoutOutflowsInput>, JobUncheckedUpdateWithoutOutflowsInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type InflowCreateWithoutPersonInput = {
    amount: number
    date: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    facility: FacilityCreateNestedOneWithoutInflowsInput
    job?: JobCreateNestedOneWithoutInflowsInput
  }

  export type InflowUncheckedCreateWithoutPersonInput = {
    id?: number
    amount: number
    date: Date | string
    description?: string | null
    facilityId: number
    jobId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InflowCreateOrConnectWithoutPersonInput = {
    where: InflowWhereUniqueInput
    create: XOR<InflowCreateWithoutPersonInput, InflowUncheckedCreateWithoutPersonInput>
  }

  export type InflowCreateManyPersonInputEnvelope = {
    data: InflowCreateManyPersonInput | InflowCreateManyPersonInput[]
  }

  export type OutflowCreateWithoutPersonInput = {
    amount: number
    date: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    facility: FacilityCreateNestedOneWithoutOutflowInput
    job?: JobCreateNestedOneWithoutOutflowsInput
  }

  export type OutflowUncheckedCreateWithoutPersonInput = {
    id?: number
    amount: number
    date: Date | string
    description?: string | null
    facilityId: number
    jobId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutflowCreateOrConnectWithoutPersonInput = {
    where: OutflowWhereUniqueInput
    create: XOR<OutflowCreateWithoutPersonInput, OutflowUncheckedCreateWithoutPersonInput>
  }

  export type OutflowCreateManyPersonInputEnvelope = {
    data: OutflowCreateManyPersonInput | OutflowCreateManyPersonInput[]
  }

  export type InflowUpsertWithWhereUniqueWithoutPersonInput = {
    where: InflowWhereUniqueInput
    update: XOR<InflowUpdateWithoutPersonInput, InflowUncheckedUpdateWithoutPersonInput>
    create: XOR<InflowCreateWithoutPersonInput, InflowUncheckedCreateWithoutPersonInput>
  }

  export type InflowUpdateWithWhereUniqueWithoutPersonInput = {
    where: InflowWhereUniqueInput
    data: XOR<InflowUpdateWithoutPersonInput, InflowUncheckedUpdateWithoutPersonInput>
  }

  export type InflowUpdateManyWithWhereWithoutPersonInput = {
    where: InflowScalarWhereInput
    data: XOR<InflowUpdateManyMutationInput, InflowUncheckedUpdateManyWithoutPersonInput>
  }

  export type InflowScalarWhereInput = {
    AND?: InflowScalarWhereInput | InflowScalarWhereInput[]
    OR?: InflowScalarWhereInput[]
    NOT?: InflowScalarWhereInput | InflowScalarWhereInput[]
    id?: IntFilter<"Inflow"> | number
    amount?: FloatFilter<"Inflow"> | number
    date?: DateTimeFilter<"Inflow"> | Date | string
    description?: StringNullableFilter<"Inflow"> | string | null
    personId?: IntFilter<"Inflow"> | number
    facilityId?: IntFilter<"Inflow"> | number
    jobId?: IntNullableFilter<"Inflow"> | number | null
    createdAt?: DateTimeFilter<"Inflow"> | Date | string
    updatedAt?: DateTimeFilter<"Inflow"> | Date | string
  }

  export type OutflowUpsertWithWhereUniqueWithoutPersonInput = {
    where: OutflowWhereUniqueInput
    update: XOR<OutflowUpdateWithoutPersonInput, OutflowUncheckedUpdateWithoutPersonInput>
    create: XOR<OutflowCreateWithoutPersonInput, OutflowUncheckedCreateWithoutPersonInput>
  }

  export type OutflowUpdateWithWhereUniqueWithoutPersonInput = {
    where: OutflowWhereUniqueInput
    data: XOR<OutflowUpdateWithoutPersonInput, OutflowUncheckedUpdateWithoutPersonInput>
  }

  export type OutflowUpdateManyWithWhereWithoutPersonInput = {
    where: OutflowScalarWhereInput
    data: XOR<OutflowUpdateManyMutationInput, OutflowUncheckedUpdateManyWithoutPersonInput>
  }

  export type OutflowScalarWhereInput = {
    AND?: OutflowScalarWhereInput | OutflowScalarWhereInput[]
    OR?: OutflowScalarWhereInput[]
    NOT?: OutflowScalarWhereInput | OutflowScalarWhereInput[]
    id?: IntFilter<"Outflow"> | number
    amount?: FloatFilter<"Outflow"> | number
    date?: DateTimeFilter<"Outflow"> | Date | string
    description?: StringNullableFilter<"Outflow"> | string | null
    personId?: IntFilter<"Outflow"> | number
    facilityId?: IntFilter<"Outflow"> | number
    jobId?: IntNullableFilter<"Outflow"> | number | null
    createdAt?: DateTimeFilter<"Outflow"> | Date | string
    updatedAt?: DateTimeFilter<"Outflow"> | Date | string
  }

  export type InflowCreateWithoutFacilityInput = {
    amount: number
    date: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutInflowsInput
    job?: JobCreateNestedOneWithoutInflowsInput
  }

  export type InflowUncheckedCreateWithoutFacilityInput = {
    id?: number
    amount: number
    date: Date | string
    description?: string | null
    personId: number
    jobId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InflowCreateOrConnectWithoutFacilityInput = {
    where: InflowWhereUniqueInput
    create: XOR<InflowCreateWithoutFacilityInput, InflowUncheckedCreateWithoutFacilityInput>
  }

  export type InflowCreateManyFacilityInputEnvelope = {
    data: InflowCreateManyFacilityInput | InflowCreateManyFacilityInput[]
  }

  export type OutflowCreateWithoutFacilityInput = {
    amount: number
    date: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutOutflowsInput
    job?: JobCreateNestedOneWithoutOutflowsInput
  }

  export type OutflowUncheckedCreateWithoutFacilityInput = {
    id?: number
    amount: number
    date: Date | string
    description?: string | null
    personId: number
    jobId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutflowCreateOrConnectWithoutFacilityInput = {
    where: OutflowWhereUniqueInput
    create: XOR<OutflowCreateWithoutFacilityInput, OutflowUncheckedCreateWithoutFacilityInput>
  }

  export type OutflowCreateManyFacilityInputEnvelope = {
    data: OutflowCreateManyFacilityInput | OutflowCreateManyFacilityInput[]
  }

  export type InflowUpsertWithWhereUniqueWithoutFacilityInput = {
    where: InflowWhereUniqueInput
    update: XOR<InflowUpdateWithoutFacilityInput, InflowUncheckedUpdateWithoutFacilityInput>
    create: XOR<InflowCreateWithoutFacilityInput, InflowUncheckedCreateWithoutFacilityInput>
  }

  export type InflowUpdateWithWhereUniqueWithoutFacilityInput = {
    where: InflowWhereUniqueInput
    data: XOR<InflowUpdateWithoutFacilityInput, InflowUncheckedUpdateWithoutFacilityInput>
  }

  export type InflowUpdateManyWithWhereWithoutFacilityInput = {
    where: InflowScalarWhereInput
    data: XOR<InflowUpdateManyMutationInput, InflowUncheckedUpdateManyWithoutFacilityInput>
  }

  export type OutflowUpsertWithWhereUniqueWithoutFacilityInput = {
    where: OutflowWhereUniqueInput
    update: XOR<OutflowUpdateWithoutFacilityInput, OutflowUncheckedUpdateWithoutFacilityInput>
    create: XOR<OutflowCreateWithoutFacilityInput, OutflowUncheckedCreateWithoutFacilityInput>
  }

  export type OutflowUpdateWithWhereUniqueWithoutFacilityInput = {
    where: OutflowWhereUniqueInput
    data: XOR<OutflowUpdateWithoutFacilityInput, OutflowUncheckedUpdateWithoutFacilityInput>
  }

  export type OutflowUpdateManyWithWhereWithoutFacilityInput = {
    where: OutflowScalarWhereInput
    data: XOR<OutflowUpdateManyMutationInput, OutflowUncheckedUpdateManyWithoutFacilityInput>
  }

  export type InflowCreateWithoutJobInput = {
    amount: number
    date: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutInflowsInput
    facility: FacilityCreateNestedOneWithoutInflowsInput
  }

  export type InflowUncheckedCreateWithoutJobInput = {
    id?: number
    amount: number
    date: Date | string
    description?: string | null
    personId: number
    facilityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InflowCreateOrConnectWithoutJobInput = {
    where: InflowWhereUniqueInput
    create: XOR<InflowCreateWithoutJobInput, InflowUncheckedCreateWithoutJobInput>
  }

  export type InflowCreateManyJobInputEnvelope = {
    data: InflowCreateManyJobInput | InflowCreateManyJobInput[]
  }

  export type OutflowCreateWithoutJobInput = {
    amount: number
    date: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutOutflowsInput
    facility: FacilityCreateNestedOneWithoutOutflowInput
  }

  export type OutflowUncheckedCreateWithoutJobInput = {
    id?: number
    amount: number
    date: Date | string
    description?: string | null
    personId: number
    facilityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutflowCreateOrConnectWithoutJobInput = {
    where: OutflowWhereUniqueInput
    create: XOR<OutflowCreateWithoutJobInput, OutflowUncheckedCreateWithoutJobInput>
  }

  export type OutflowCreateManyJobInputEnvelope = {
    data: OutflowCreateManyJobInput | OutflowCreateManyJobInput[]
  }

  export type InflowUpsertWithWhereUniqueWithoutJobInput = {
    where: InflowWhereUniqueInput
    update: XOR<InflowUpdateWithoutJobInput, InflowUncheckedUpdateWithoutJobInput>
    create: XOR<InflowCreateWithoutJobInput, InflowUncheckedCreateWithoutJobInput>
  }

  export type InflowUpdateWithWhereUniqueWithoutJobInput = {
    where: InflowWhereUniqueInput
    data: XOR<InflowUpdateWithoutJobInput, InflowUncheckedUpdateWithoutJobInput>
  }

  export type InflowUpdateManyWithWhereWithoutJobInput = {
    where: InflowScalarWhereInput
    data: XOR<InflowUpdateManyMutationInput, InflowUncheckedUpdateManyWithoutJobInput>
  }

  export type OutflowUpsertWithWhereUniqueWithoutJobInput = {
    where: OutflowWhereUniqueInput
    update: XOR<OutflowUpdateWithoutJobInput, OutflowUncheckedUpdateWithoutJobInput>
    create: XOR<OutflowCreateWithoutJobInput, OutflowUncheckedCreateWithoutJobInput>
  }

  export type OutflowUpdateWithWhereUniqueWithoutJobInput = {
    where: OutflowWhereUniqueInput
    data: XOR<OutflowUpdateWithoutJobInput, OutflowUncheckedUpdateWithoutJobInput>
  }

  export type OutflowUpdateManyWithWhereWithoutJobInput = {
    where: OutflowScalarWhereInput
    data: XOR<OutflowUpdateManyMutationInput, OutflowUncheckedUpdateManyWithoutJobInput>
  }

  export type PersonCreateWithoutInflowsInput = {
    name: string
    email?: string | null
    outflows?: OutflowCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutInflowsInput = {
    id?: number
    name: string
    email?: string | null
    outflows?: OutflowUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutInflowsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutInflowsInput, PersonUncheckedCreateWithoutInflowsInput>
  }

  export type FacilityCreateWithoutInflowsInput = {
    name: string
    outflow?: OutflowCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateWithoutInflowsInput = {
    id?: number
    name: string
    outflow?: OutflowUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityCreateOrConnectWithoutInflowsInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutInflowsInput, FacilityUncheckedCreateWithoutInflowsInput>
  }

  export type JobCreateWithoutInflowsInput = {
    name: string
    outflows?: OutflowCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutInflowsInput = {
    id?: number
    name: string
    outflows?: OutflowUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutInflowsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutInflowsInput, JobUncheckedCreateWithoutInflowsInput>
  }

  export type PersonUpsertWithoutInflowsInput = {
    update: XOR<PersonUpdateWithoutInflowsInput, PersonUncheckedUpdateWithoutInflowsInput>
    create: XOR<PersonCreateWithoutInflowsInput, PersonUncheckedCreateWithoutInflowsInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutInflowsInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutInflowsInput, PersonUncheckedUpdateWithoutInflowsInput>
  }

  export type PersonUpdateWithoutInflowsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    outflows?: OutflowUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutInflowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    outflows?: OutflowUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type FacilityUpsertWithoutInflowsInput = {
    update: XOR<FacilityUpdateWithoutInflowsInput, FacilityUncheckedUpdateWithoutInflowsInput>
    create: XOR<FacilityCreateWithoutInflowsInput, FacilityUncheckedCreateWithoutInflowsInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutInflowsInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutInflowsInput, FacilityUncheckedUpdateWithoutInflowsInput>
  }

  export type FacilityUpdateWithoutInflowsInput = {
    name?: StringFieldUpdateOperationsInput | string
    outflow?: OutflowUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutInflowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    outflow?: OutflowUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type JobUpsertWithoutInflowsInput = {
    update: XOR<JobUpdateWithoutInflowsInput, JobUncheckedUpdateWithoutInflowsInput>
    create: XOR<JobCreateWithoutInflowsInput, JobUncheckedCreateWithoutInflowsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutInflowsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutInflowsInput, JobUncheckedUpdateWithoutInflowsInput>
  }

  export type JobUpdateWithoutInflowsInput = {
    name?: StringFieldUpdateOperationsInput | string
    outflows?: OutflowUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutInflowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    outflows?: OutflowUncheckedUpdateManyWithoutJobNestedInput
  }

  export type PersonCreateWithoutOutflowsInput = {
    name: string
    email?: string | null
    inflows?: InflowCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutOutflowsInput = {
    id?: number
    name: string
    email?: string | null
    inflows?: InflowUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutOutflowsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutOutflowsInput, PersonUncheckedCreateWithoutOutflowsInput>
  }

  export type FacilityCreateWithoutOutflowInput = {
    name: string
    inflows?: InflowCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateWithoutOutflowInput = {
    id?: number
    name: string
    inflows?: InflowUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityCreateOrConnectWithoutOutflowInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutOutflowInput, FacilityUncheckedCreateWithoutOutflowInput>
  }

  export type JobCreateWithoutOutflowsInput = {
    name: string
    inflows?: InflowCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutOutflowsInput = {
    id?: number
    name: string
    inflows?: InflowUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutOutflowsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutOutflowsInput, JobUncheckedCreateWithoutOutflowsInput>
  }

  export type PersonUpsertWithoutOutflowsInput = {
    update: XOR<PersonUpdateWithoutOutflowsInput, PersonUncheckedUpdateWithoutOutflowsInput>
    create: XOR<PersonCreateWithoutOutflowsInput, PersonUncheckedCreateWithoutOutflowsInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutOutflowsInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutOutflowsInput, PersonUncheckedUpdateWithoutOutflowsInput>
  }

  export type PersonUpdateWithoutOutflowsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    inflows?: InflowUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutOutflowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    inflows?: InflowUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type FacilityUpsertWithoutOutflowInput = {
    update: XOR<FacilityUpdateWithoutOutflowInput, FacilityUncheckedUpdateWithoutOutflowInput>
    create: XOR<FacilityCreateWithoutOutflowInput, FacilityUncheckedCreateWithoutOutflowInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutOutflowInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutOutflowInput, FacilityUncheckedUpdateWithoutOutflowInput>
  }

  export type FacilityUpdateWithoutOutflowInput = {
    name?: StringFieldUpdateOperationsInput | string
    inflows?: InflowUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateWithoutOutflowInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    inflows?: InflowUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type JobUpsertWithoutOutflowsInput = {
    update: XOR<JobUpdateWithoutOutflowsInput, JobUncheckedUpdateWithoutOutflowsInput>
    create: XOR<JobCreateWithoutOutflowsInput, JobUncheckedCreateWithoutOutflowsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutOutflowsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutOutflowsInput, JobUncheckedUpdateWithoutOutflowsInput>
  }

  export type JobUpdateWithoutOutflowsInput = {
    name?: StringFieldUpdateOperationsInput | string
    inflows?: InflowUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutOutflowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    inflows?: InflowUncheckedUpdateManyWithoutJobNestedInput
  }

  export type InflowCreateManyPersonInput = {
    id?: number
    amount: number
    date: Date | string
    description?: string | null
    facilityId: number
    jobId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutflowCreateManyPersonInput = {
    id?: number
    amount: number
    date: Date | string
    description?: string | null
    facilityId: number
    jobId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InflowUpdateWithoutPersonInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility?: FacilityUpdateOneRequiredWithoutInflowsNestedInput
    job?: JobUpdateOneWithoutInflowsNestedInput
  }

  export type InflowUncheckedUpdateWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facilityId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InflowUncheckedUpdateManyWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facilityId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutflowUpdateWithoutPersonInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facility?: FacilityUpdateOneRequiredWithoutOutflowNestedInput
    job?: JobUpdateOneWithoutOutflowsNestedInput
  }

  export type OutflowUncheckedUpdateWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facilityId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutflowUncheckedUpdateManyWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    facilityId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InflowCreateManyFacilityInput = {
    id?: number
    amount: number
    date: Date | string
    description?: string | null
    personId: number
    jobId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutflowCreateManyFacilityInput = {
    id?: number
    amount: number
    date: Date | string
    description?: string | null
    personId: number
    jobId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InflowUpdateWithoutFacilityInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutInflowsNestedInput
    job?: JobUpdateOneWithoutInflowsNestedInput
  }

  export type InflowUncheckedUpdateWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InflowUncheckedUpdateManyWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutflowUpdateWithoutFacilityInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutOutflowsNestedInput
    job?: JobUpdateOneWithoutOutflowsNestedInput
  }

  export type OutflowUncheckedUpdateWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutflowUncheckedUpdateManyWithoutFacilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InflowCreateManyJobInput = {
    id?: number
    amount: number
    date: Date | string
    description?: string | null
    personId: number
    facilityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutflowCreateManyJobInput = {
    id?: number
    amount: number
    date: Date | string
    description?: string | null
    personId: number
    facilityId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InflowUpdateWithoutJobInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutInflowsNestedInput
    facility?: FacilityUpdateOneRequiredWithoutInflowsNestedInput
  }

  export type InflowUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InflowUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutflowUpdateWithoutJobInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutOutflowsNestedInput
    facility?: FacilityUpdateOneRequiredWithoutOutflowNestedInput
  }

  export type OutflowUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutflowUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: IntFieldUpdateOperationsInput | number
    facilityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PersonCountOutputTypeDefaultArgs instead
     */
    export type PersonCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacilityCountOutputTypeDefaultArgs instead
     */
    export type FacilityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FacilityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobCountOutputTypeDefaultArgs instead
     */
    export type JobCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PersonDefaultArgs instead
     */
    export type PersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacilityDefaultArgs instead
     */
    export type FacilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FacilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobDefaultArgs instead
     */
    export type JobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InflowDefaultArgs instead
     */
    export type InflowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InflowDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OutflowDefaultArgs instead
     */
    export type OutflowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OutflowDefaultArgs<ExtArgs>

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