import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  Person: crudResolvers.PersonCrudResolver,
  Facility: crudResolvers.FacilityCrudResolver,
  Job: crudResolvers.JobCrudResolver,
  Inflow: crudResolvers.InflowCrudResolver,
  Outflow: crudResolvers.OutflowCrudResolver
};
const actionResolversMap = {
  Person: {
    aggregatePerson: actionResolvers.AggregatePersonResolver,
    createManyPerson: actionResolvers.CreateManyPersonResolver,
    createManyAndReturnPerson: actionResolvers.CreateManyAndReturnPersonResolver,
    createOnePerson: actionResolvers.CreateOnePersonResolver,
    deleteManyPerson: actionResolvers.DeleteManyPersonResolver,
    deleteOnePerson: actionResolvers.DeleteOnePersonResolver,
    findFirstPerson: actionResolvers.FindFirstPersonResolver,
    findFirstPersonOrThrow: actionResolvers.FindFirstPersonOrThrowResolver,
    people: actionResolvers.FindManyPersonResolver,
    person: actionResolvers.FindUniquePersonResolver,
    getPerson: actionResolvers.FindUniquePersonOrThrowResolver,
    groupByPerson: actionResolvers.GroupByPersonResolver,
    updateManyPerson: actionResolvers.UpdateManyPersonResolver,
    updateOnePerson: actionResolvers.UpdateOnePersonResolver,
    upsertOnePerson: actionResolvers.UpsertOnePersonResolver
  },
  Facility: {
    aggregateFacility: actionResolvers.AggregateFacilityResolver,
    createManyFacility: actionResolvers.CreateManyFacilityResolver,
    createManyAndReturnFacility: actionResolvers.CreateManyAndReturnFacilityResolver,
    createOneFacility: actionResolvers.CreateOneFacilityResolver,
    deleteManyFacility: actionResolvers.DeleteManyFacilityResolver,
    deleteOneFacility: actionResolvers.DeleteOneFacilityResolver,
    findFirstFacility: actionResolvers.FindFirstFacilityResolver,
    findFirstFacilityOrThrow: actionResolvers.FindFirstFacilityOrThrowResolver,
    facilities: actionResolvers.FindManyFacilityResolver,
    facility: actionResolvers.FindUniqueFacilityResolver,
    getFacility: actionResolvers.FindUniqueFacilityOrThrowResolver,
    groupByFacility: actionResolvers.GroupByFacilityResolver,
    updateManyFacility: actionResolvers.UpdateManyFacilityResolver,
    updateOneFacility: actionResolvers.UpdateOneFacilityResolver,
    upsertOneFacility: actionResolvers.UpsertOneFacilityResolver
  },
  Job: {
    aggregateJob: actionResolvers.AggregateJobResolver,
    createManyJob: actionResolvers.CreateManyJobResolver,
    createManyAndReturnJob: actionResolvers.CreateManyAndReturnJobResolver,
    createOneJob: actionResolvers.CreateOneJobResolver,
    deleteManyJob: actionResolvers.DeleteManyJobResolver,
    deleteOneJob: actionResolvers.DeleteOneJobResolver,
    findFirstJob: actionResolvers.FindFirstJobResolver,
    findFirstJobOrThrow: actionResolvers.FindFirstJobOrThrowResolver,
    jobs: actionResolvers.FindManyJobResolver,
    job: actionResolvers.FindUniqueJobResolver,
    getJob: actionResolvers.FindUniqueJobOrThrowResolver,
    groupByJob: actionResolvers.GroupByJobResolver,
    updateManyJob: actionResolvers.UpdateManyJobResolver,
    updateOneJob: actionResolvers.UpdateOneJobResolver,
    upsertOneJob: actionResolvers.UpsertOneJobResolver
  },
  Inflow: {
    aggregateInflow: actionResolvers.AggregateInflowResolver,
    createManyInflow: actionResolvers.CreateManyInflowResolver,
    createManyAndReturnInflow: actionResolvers.CreateManyAndReturnInflowResolver,
    createOneInflow: actionResolvers.CreateOneInflowResolver,
    deleteManyInflow: actionResolvers.DeleteManyInflowResolver,
    deleteOneInflow: actionResolvers.DeleteOneInflowResolver,
    findFirstInflow: actionResolvers.FindFirstInflowResolver,
    findFirstInflowOrThrow: actionResolvers.FindFirstInflowOrThrowResolver,
    inflows: actionResolvers.FindManyInflowResolver,
    inflow: actionResolvers.FindUniqueInflowResolver,
    getInflow: actionResolvers.FindUniqueInflowOrThrowResolver,
    groupByInflow: actionResolvers.GroupByInflowResolver,
    updateManyInflow: actionResolvers.UpdateManyInflowResolver,
    updateOneInflow: actionResolvers.UpdateOneInflowResolver,
    upsertOneInflow: actionResolvers.UpsertOneInflowResolver
  },
  Outflow: {
    aggregateOutflow: actionResolvers.AggregateOutflowResolver,
    createManyOutflow: actionResolvers.CreateManyOutflowResolver,
    createManyAndReturnOutflow: actionResolvers.CreateManyAndReturnOutflowResolver,
    createOneOutflow: actionResolvers.CreateOneOutflowResolver,
    deleteManyOutflow: actionResolvers.DeleteManyOutflowResolver,
    deleteOneOutflow: actionResolvers.DeleteOneOutflowResolver,
    findFirstOutflow: actionResolvers.FindFirstOutflowResolver,
    findFirstOutflowOrThrow: actionResolvers.FindFirstOutflowOrThrowResolver,
    outflows: actionResolvers.FindManyOutflowResolver,
    outflow: actionResolvers.FindUniqueOutflowResolver,
    getOutflow: actionResolvers.FindUniqueOutflowOrThrowResolver,
    groupByOutflow: actionResolvers.GroupByOutflowResolver,
    updateManyOutflow: actionResolvers.UpdateManyOutflowResolver,
    updateOneOutflow: actionResolvers.UpdateOneOutflowResolver,
    upsertOneOutflow: actionResolvers.UpsertOneOutflowResolver
  }
};
const crudResolversInfo = {
  Person: ["aggregatePerson", "createManyPerson", "createManyAndReturnPerson", "createOnePerson", "deleteManyPerson", "deleteOnePerson", "findFirstPerson", "findFirstPersonOrThrow", "people", "person", "getPerson", "groupByPerson", "updateManyPerson", "updateOnePerson", "upsertOnePerson"],
  Facility: ["aggregateFacility", "createManyFacility", "createManyAndReturnFacility", "createOneFacility", "deleteManyFacility", "deleteOneFacility", "findFirstFacility", "findFirstFacilityOrThrow", "facilities", "facility", "getFacility", "groupByFacility", "updateManyFacility", "updateOneFacility", "upsertOneFacility"],
  Job: ["aggregateJob", "createManyJob", "createManyAndReturnJob", "createOneJob", "deleteManyJob", "deleteOneJob", "findFirstJob", "findFirstJobOrThrow", "jobs", "job", "getJob", "groupByJob", "updateManyJob", "updateOneJob", "upsertOneJob"],
  Inflow: ["aggregateInflow", "createManyInflow", "createManyAndReturnInflow", "createOneInflow", "deleteManyInflow", "deleteOneInflow", "findFirstInflow", "findFirstInflowOrThrow", "inflows", "inflow", "getInflow", "groupByInflow", "updateManyInflow", "updateOneInflow", "upsertOneInflow"],
  Outflow: ["aggregateOutflow", "createManyOutflow", "createManyAndReturnOutflow", "createOneOutflow", "deleteManyOutflow", "deleteOneOutflow", "findFirstOutflow", "findFirstOutflowOrThrow", "outflows", "outflow", "getOutflow", "groupByOutflow", "updateManyOutflow", "updateOneOutflow", "upsertOneOutflow"]
};
const argsInfo = {
  AggregatePersonArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPersonArgs: ["data"],
  CreateManyAndReturnPersonArgs: ["data"],
  CreateOnePersonArgs: ["data"],
  DeleteManyPersonArgs: ["where"],
  DeleteOnePersonArgs: ["where"],
  FindFirstPersonArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPersonOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPersonArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePersonArgs: ["where"],
  FindUniquePersonOrThrowArgs: ["where"],
  GroupByPersonArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPersonArgs: ["data", "where"],
  UpdateOnePersonArgs: ["data", "where"],
  UpsertOnePersonArgs: ["where", "create", "update"],
  AggregateFacilityArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyFacilityArgs: ["data"],
  CreateManyAndReturnFacilityArgs: ["data"],
  CreateOneFacilityArgs: ["data"],
  DeleteManyFacilityArgs: ["where"],
  DeleteOneFacilityArgs: ["where"],
  FindFirstFacilityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstFacilityOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFacilityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueFacilityArgs: ["where"],
  FindUniqueFacilityOrThrowArgs: ["where"],
  GroupByFacilityArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyFacilityArgs: ["data", "where"],
  UpdateOneFacilityArgs: ["data", "where"],
  UpsertOneFacilityArgs: ["where", "create", "update"],
  AggregateJobArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyJobArgs: ["data"],
  CreateManyAndReturnJobArgs: ["data"],
  CreateOneJobArgs: ["data"],
  DeleteManyJobArgs: ["where"],
  DeleteOneJobArgs: ["where"],
  FindFirstJobArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstJobOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyJobArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueJobArgs: ["where"],
  FindUniqueJobOrThrowArgs: ["where"],
  GroupByJobArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyJobArgs: ["data", "where"],
  UpdateOneJobArgs: ["data", "where"],
  UpsertOneJobArgs: ["where", "create", "update"],
  AggregateInflowArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyInflowArgs: ["data"],
  CreateManyAndReturnInflowArgs: ["data"],
  CreateOneInflowArgs: ["data"],
  DeleteManyInflowArgs: ["where"],
  DeleteOneInflowArgs: ["where"],
  FindFirstInflowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstInflowOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyInflowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueInflowArgs: ["where"],
  FindUniqueInflowOrThrowArgs: ["where"],
  GroupByInflowArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyInflowArgs: ["data", "where"],
  UpdateOneInflowArgs: ["data", "where"],
  UpsertOneInflowArgs: ["where", "create", "update"],
  AggregateOutflowArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyOutflowArgs: ["data"],
  CreateManyAndReturnOutflowArgs: ["data"],
  CreateOneOutflowArgs: ["data"],
  DeleteManyOutflowArgs: ["where"],
  DeleteOneOutflowArgs: ["where"],
  FindFirstOutflowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstOutflowOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOutflowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueOutflowArgs: ["where"],
  FindUniqueOutflowOrThrowArgs: ["where"],
  GroupByOutflowArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyOutflowArgs: ["data", "where"],
  UpdateOneOutflowArgs: ["data", "where"],
  UpsertOneOutflowArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "createManyAndReturn", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Person: relationResolvers.PersonRelationsResolver,
  Facility: relationResolvers.FacilityRelationsResolver,
  Job: relationResolvers.JobRelationsResolver,
  Inflow: relationResolvers.InflowRelationsResolver,
  Outflow: relationResolvers.OutflowRelationsResolver
};
const relationResolversInfo = {
  Person: ["inflows", "outflows"],
  Facility: ["inflows", "outflow"],
  Job: ["inflows", "outflows"],
  Inflow: ["person", "facility", "job"],
  Outflow: ["person", "facility", "job"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Person: ["id", "name", "email"],
  Facility: ["id", "name"],
  Job: ["id", "name"],
  Inflow: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  Outflow: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregatePerson: ["_count", "_avg", "_sum", "_min", "_max"],
  PersonGroupBy: ["id", "name", "email", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFacility: ["_count", "_avg", "_sum", "_min", "_max"],
  FacilityGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateJob: ["_count", "_avg", "_sum", "_min", "_max"],
  JobGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateInflow: ["_count", "_avg", "_sum", "_min", "_max"],
  InflowGroupBy: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOutflow: ["_count", "_avg", "_sum", "_min", "_max"],
  OutflowGroupBy: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  PersonCount: ["inflows", "outflows"],
  PersonCountAggregate: ["id", "name", "email", "_all"],
  PersonAvgAggregate: ["id"],
  PersonSumAggregate: ["id"],
  PersonMinAggregate: ["id", "name", "email"],
  PersonMaxAggregate: ["id", "name", "email"],
  FacilityCount: ["inflows", "outflow"],
  FacilityCountAggregate: ["id", "name", "_all"],
  FacilityAvgAggregate: ["id"],
  FacilitySumAggregate: ["id"],
  FacilityMinAggregate: ["id", "name"],
  FacilityMaxAggregate: ["id", "name"],
  JobCount: ["inflows", "outflows"],
  JobCountAggregate: ["id", "name", "_all"],
  JobAvgAggregate: ["id"],
  JobSumAggregate: ["id"],
  JobMinAggregate: ["id", "name"],
  JobMaxAggregate: ["id", "name"],
  InflowCountAggregate: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "_all"],
  InflowAvgAggregate: ["id", "amount", "personId", "facilityId", "jobId"],
  InflowSumAggregate: ["id", "amount", "personId", "facilityId", "jobId"],
  InflowMinAggregate: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowMaxAggregate: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  OutflowCountAggregate: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "_all"],
  OutflowAvgAggregate: ["id", "amount", "personId", "facilityId", "jobId"],
  OutflowSumAggregate: ["id", "amount", "personId", "facilityId", "jobId"],
  OutflowMinAggregate: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  OutflowMaxAggregate: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  CreateManyAndReturnPerson: ["id", "name", "email"],
  CreateManyAndReturnFacility: ["id", "name"],
  CreateManyAndReturnJob: ["id", "name"],
  CreateManyAndReturnInflow: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "person", "facility", "job"],
  CreateManyAndReturnOutflow: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "person", "facility", "job"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  PersonWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "inflows", "outflows"],
  PersonOrderByWithRelationInput: ["id", "name", "email", "inflows", "outflows"],
  PersonWhereUniqueInput: ["id", "name", "email", "AND", "OR", "NOT", "inflows", "outflows"],
  PersonOrderByWithAggregationInput: ["id", "name", "email", "_count", "_avg", "_max", "_min", "_sum"],
  PersonScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email"],
  FacilityWhereInput: ["AND", "OR", "NOT", "id", "name", "inflows", "outflow"],
  FacilityOrderByWithRelationInput: ["id", "name", "inflows", "outflow"],
  FacilityWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "inflows", "outflow"],
  FacilityOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  FacilityScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  JobWhereInput: ["AND", "OR", "NOT", "id", "name", "inflows", "outflows"],
  JobOrderByWithRelationInput: ["id", "name", "inflows", "outflows"],
  JobWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "inflows", "outflows"],
  JobOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  JobScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  InflowWhereInput: ["AND", "OR", "NOT", "id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "person", "facility", "job"],
  InflowOrderByWithRelationInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "person", "facility", "job"],
  InflowWhereUniqueInput: ["id", "AND", "OR", "NOT", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "person", "facility", "job"],
  InflowOrderByWithAggregationInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  InflowScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  OutflowWhereInput: ["AND", "OR", "NOT", "id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "person", "facility", "job"],
  OutflowOrderByWithRelationInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "person", "facility", "job"],
  OutflowWhereUniqueInput: ["id", "AND", "OR", "NOT", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "person", "facility", "job"],
  OutflowOrderByWithAggregationInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  OutflowScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  PersonCreateInput: ["name", "email", "inflows", "outflows"],
  PersonUncheckedCreateInput: ["id", "name", "email", "inflows", "outflows"],
  PersonUpdateInput: ["name", "email", "inflows", "outflows"],
  PersonUncheckedUpdateInput: ["id", "name", "email", "inflows", "outflows"],
  PersonCreateManyInput: ["id", "name", "email"],
  PersonUpdateManyMutationInput: ["name", "email"],
  PersonUncheckedUpdateManyInput: ["id", "name", "email"],
  FacilityCreateInput: ["name", "inflows", "outflow"],
  FacilityUncheckedCreateInput: ["id", "name", "inflows", "outflow"],
  FacilityUpdateInput: ["name", "inflows", "outflow"],
  FacilityUncheckedUpdateInput: ["id", "name", "inflows", "outflow"],
  FacilityCreateManyInput: ["id", "name"],
  FacilityUpdateManyMutationInput: ["name"],
  FacilityUncheckedUpdateManyInput: ["id", "name"],
  JobCreateInput: ["name", "inflows", "outflows"],
  JobUncheckedCreateInput: ["id", "name", "inflows", "outflows"],
  JobUpdateInput: ["name", "inflows", "outflows"],
  JobUncheckedUpdateInput: ["id", "name", "inflows", "outflows"],
  JobCreateManyInput: ["id", "name"],
  JobUpdateManyMutationInput: ["name"],
  JobUncheckedUpdateManyInput: ["id", "name"],
  InflowCreateInput: ["amount", "date", "description", "createdAt", "updatedAt", "person", "facility", "job"],
  InflowUncheckedCreateInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowUpdateInput: ["amount", "date", "description", "createdAt", "updatedAt", "person", "facility", "job"],
  InflowUncheckedUpdateInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowCreateManyInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowUpdateManyMutationInput: ["amount", "date", "description", "createdAt", "updatedAt"],
  InflowUncheckedUpdateManyInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  OutflowCreateInput: ["amount", "date", "description", "createdAt", "updatedAt", "person", "facility", "job"],
  OutflowUncheckedCreateInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  OutflowUpdateInput: ["amount", "date", "description", "createdAt", "updatedAt", "person", "facility", "job"],
  OutflowUncheckedUpdateInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  OutflowCreateManyInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  OutflowUpdateManyMutationInput: ["amount", "date", "description", "createdAt", "updatedAt"],
  OutflowUncheckedUpdateManyInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  InflowListRelationFilter: ["every", "some", "none"],
  OutflowListRelationFilter: ["every", "some", "none"],
  SortOrderInput: ["sort", "nulls"],
  InflowOrderByRelationAggregateInput: ["_count"],
  OutflowOrderByRelationAggregateInput: ["_count"],
  PersonCountOrderByAggregateInput: ["id", "name", "email"],
  PersonAvgOrderByAggregateInput: ["id"],
  PersonMaxOrderByAggregateInput: ["id", "name", "email"],
  PersonMinOrderByAggregateInput: ["id", "name", "email"],
  PersonSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  FacilityCountOrderByAggregateInput: ["id", "name"],
  FacilityAvgOrderByAggregateInput: ["id"],
  FacilityMaxOrderByAggregateInput: ["id", "name"],
  FacilityMinOrderByAggregateInput: ["id", "name"],
  FacilitySumOrderByAggregateInput: ["id"],
  JobCountOrderByAggregateInput: ["id", "name"],
  JobAvgOrderByAggregateInput: ["id"],
  JobMaxOrderByAggregateInput: ["id", "name"],
  JobMinOrderByAggregateInput: ["id", "name"],
  JobSumOrderByAggregateInput: ["id"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PersonRelationFilter: ["is", "isNot"],
  FacilityRelationFilter: ["is", "isNot"],
  JobNullableRelationFilter: ["is", "isNot"],
  InflowCountOrderByAggregateInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowAvgOrderByAggregateInput: ["id", "amount", "personId", "facilityId", "jobId"],
  InflowMaxOrderByAggregateInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowMinOrderByAggregateInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowSumOrderByAggregateInput: ["id", "amount", "personId", "facilityId", "jobId"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  OutflowCountOrderByAggregateInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  OutflowAvgOrderByAggregateInput: ["id", "amount", "personId", "facilityId", "jobId"],
  OutflowMaxOrderByAggregateInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  OutflowMinOrderByAggregateInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  OutflowSumOrderByAggregateInput: ["id", "amount", "personId", "facilityId", "jobId"],
  InflowCreateNestedManyWithoutPersonInput: ["create", "connectOrCreate", "createMany", "connect"],
  OutflowCreateNestedManyWithoutPersonInput: ["create", "connectOrCreate", "createMany", "connect"],
  InflowUncheckedCreateNestedManyWithoutPersonInput: ["create", "connectOrCreate", "createMany", "connect"],
  OutflowUncheckedCreateNestedManyWithoutPersonInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  InflowUpdateManyWithoutPersonNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OutflowUpdateManyWithoutPersonNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  InflowUncheckedUpdateManyWithoutPersonNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OutflowUncheckedUpdateManyWithoutPersonNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  InflowCreateNestedManyWithoutFacilityInput: ["create", "connectOrCreate", "createMany", "connect"],
  OutflowCreateNestedManyWithoutFacilityInput: ["create", "connectOrCreate", "createMany", "connect"],
  InflowUncheckedCreateNestedManyWithoutFacilityInput: ["create", "connectOrCreate", "createMany", "connect"],
  OutflowUncheckedCreateNestedManyWithoutFacilityInput: ["create", "connectOrCreate", "createMany", "connect"],
  InflowUpdateManyWithoutFacilityNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OutflowUpdateManyWithoutFacilityNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  InflowUncheckedUpdateManyWithoutFacilityNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OutflowUncheckedUpdateManyWithoutFacilityNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  InflowCreateNestedManyWithoutJobInput: ["create", "connectOrCreate", "createMany", "connect"],
  OutflowCreateNestedManyWithoutJobInput: ["create", "connectOrCreate", "createMany", "connect"],
  InflowUncheckedCreateNestedManyWithoutJobInput: ["create", "connectOrCreate", "createMany", "connect"],
  OutflowUncheckedCreateNestedManyWithoutJobInput: ["create", "connectOrCreate", "createMany", "connect"],
  InflowUpdateManyWithoutJobNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OutflowUpdateManyWithoutJobNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  InflowUncheckedUpdateManyWithoutJobNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OutflowUncheckedUpdateManyWithoutJobNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PersonCreateNestedOneWithoutInflowsInput: ["create", "connectOrCreate", "connect"],
  FacilityCreateNestedOneWithoutInflowsInput: ["create", "connectOrCreate", "connect"],
  JobCreateNestedOneWithoutInflowsInput: ["create", "connectOrCreate", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  PersonUpdateOneRequiredWithoutInflowsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  FacilityUpdateOneRequiredWithoutInflowsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  JobUpdateOneWithoutInflowsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  PersonCreateNestedOneWithoutOutflowsInput: ["create", "connectOrCreate", "connect"],
  FacilityCreateNestedOneWithoutOutflowInput: ["create", "connectOrCreate", "connect"],
  JobCreateNestedOneWithoutOutflowsInput: ["create", "connectOrCreate", "connect"],
  PersonUpdateOneRequiredWithoutOutflowsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  FacilityUpdateOneRequiredWithoutOutflowNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  JobUpdateOneWithoutOutflowsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  InflowCreateWithoutPersonInput: ["amount", "date", "description", "createdAt", "updatedAt", "facility", "job"],
  InflowUncheckedCreateWithoutPersonInput: ["id", "amount", "date", "description", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowCreateOrConnectWithoutPersonInput: ["where", "create"],
  InflowCreateManyPersonInputEnvelope: ["data"],
  OutflowCreateWithoutPersonInput: ["amount", "date", "description", "createdAt", "updatedAt", "facility", "job"],
  OutflowUncheckedCreateWithoutPersonInput: ["id", "amount", "date", "description", "facilityId", "jobId", "createdAt", "updatedAt"],
  OutflowCreateOrConnectWithoutPersonInput: ["where", "create"],
  OutflowCreateManyPersonInputEnvelope: ["data"],
  InflowUpsertWithWhereUniqueWithoutPersonInput: ["where", "update", "create"],
  InflowUpdateWithWhereUniqueWithoutPersonInput: ["where", "data"],
  InflowUpdateManyWithWhereWithoutPersonInput: ["where", "data"],
  InflowScalarWhereInput: ["AND", "OR", "NOT", "id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  OutflowUpsertWithWhereUniqueWithoutPersonInput: ["where", "update", "create"],
  OutflowUpdateWithWhereUniqueWithoutPersonInput: ["where", "data"],
  OutflowUpdateManyWithWhereWithoutPersonInput: ["where", "data"],
  OutflowScalarWhereInput: ["AND", "OR", "NOT", "id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowCreateWithoutFacilityInput: ["amount", "date", "description", "createdAt", "updatedAt", "person", "job"],
  InflowUncheckedCreateWithoutFacilityInput: ["id", "amount", "date", "description", "personId", "jobId", "createdAt", "updatedAt"],
  InflowCreateOrConnectWithoutFacilityInput: ["where", "create"],
  InflowCreateManyFacilityInputEnvelope: ["data"],
  OutflowCreateWithoutFacilityInput: ["amount", "date", "description", "createdAt", "updatedAt", "person", "job"],
  OutflowUncheckedCreateWithoutFacilityInput: ["id", "amount", "date", "description", "personId", "jobId", "createdAt", "updatedAt"],
  OutflowCreateOrConnectWithoutFacilityInput: ["where", "create"],
  OutflowCreateManyFacilityInputEnvelope: ["data"],
  InflowUpsertWithWhereUniqueWithoutFacilityInput: ["where", "update", "create"],
  InflowUpdateWithWhereUniqueWithoutFacilityInput: ["where", "data"],
  InflowUpdateManyWithWhereWithoutFacilityInput: ["where", "data"],
  OutflowUpsertWithWhereUniqueWithoutFacilityInput: ["where", "update", "create"],
  OutflowUpdateWithWhereUniqueWithoutFacilityInput: ["where", "data"],
  OutflowUpdateManyWithWhereWithoutFacilityInput: ["where", "data"],
  InflowCreateWithoutJobInput: ["amount", "date", "description", "createdAt", "updatedAt", "person", "facility"],
  InflowUncheckedCreateWithoutJobInput: ["id", "amount", "date", "description", "personId", "facilityId", "createdAt", "updatedAt"],
  InflowCreateOrConnectWithoutJobInput: ["where", "create"],
  InflowCreateManyJobInputEnvelope: ["data"],
  OutflowCreateWithoutJobInput: ["amount", "date", "description", "createdAt", "updatedAt", "person", "facility"],
  OutflowUncheckedCreateWithoutJobInput: ["id", "amount", "date", "description", "personId", "facilityId", "createdAt", "updatedAt"],
  OutflowCreateOrConnectWithoutJobInput: ["where", "create"],
  OutflowCreateManyJobInputEnvelope: ["data"],
  InflowUpsertWithWhereUniqueWithoutJobInput: ["where", "update", "create"],
  InflowUpdateWithWhereUniqueWithoutJobInput: ["where", "data"],
  InflowUpdateManyWithWhereWithoutJobInput: ["where", "data"],
  OutflowUpsertWithWhereUniqueWithoutJobInput: ["where", "update", "create"],
  OutflowUpdateWithWhereUniqueWithoutJobInput: ["where", "data"],
  OutflowUpdateManyWithWhereWithoutJobInput: ["where", "data"],
  PersonCreateWithoutInflowsInput: ["name", "email", "outflows"],
  PersonUncheckedCreateWithoutInflowsInput: ["id", "name", "email", "outflows"],
  PersonCreateOrConnectWithoutInflowsInput: ["where", "create"],
  FacilityCreateWithoutInflowsInput: ["name", "outflow"],
  FacilityUncheckedCreateWithoutInflowsInput: ["id", "name", "outflow"],
  FacilityCreateOrConnectWithoutInflowsInput: ["where", "create"],
  JobCreateWithoutInflowsInput: ["name", "outflows"],
  JobUncheckedCreateWithoutInflowsInput: ["id", "name", "outflows"],
  JobCreateOrConnectWithoutInflowsInput: ["where", "create"],
  PersonUpsertWithoutInflowsInput: ["update", "create", "where"],
  PersonUpdateToOneWithWhereWithoutInflowsInput: ["where", "data"],
  PersonUpdateWithoutInflowsInput: ["name", "email", "outflows"],
  PersonUncheckedUpdateWithoutInflowsInput: ["id", "name", "email", "outflows"],
  FacilityUpsertWithoutInflowsInput: ["update", "create", "where"],
  FacilityUpdateToOneWithWhereWithoutInflowsInput: ["where", "data"],
  FacilityUpdateWithoutInflowsInput: ["name", "outflow"],
  FacilityUncheckedUpdateWithoutInflowsInput: ["id", "name", "outflow"],
  JobUpsertWithoutInflowsInput: ["update", "create", "where"],
  JobUpdateToOneWithWhereWithoutInflowsInput: ["where", "data"],
  JobUpdateWithoutInflowsInput: ["name", "outflows"],
  JobUncheckedUpdateWithoutInflowsInput: ["id", "name", "outflows"],
  PersonCreateWithoutOutflowsInput: ["name", "email", "inflows"],
  PersonUncheckedCreateWithoutOutflowsInput: ["id", "name", "email", "inflows"],
  PersonCreateOrConnectWithoutOutflowsInput: ["where", "create"],
  FacilityCreateWithoutOutflowInput: ["name", "inflows"],
  FacilityUncheckedCreateWithoutOutflowInput: ["id", "name", "inflows"],
  FacilityCreateOrConnectWithoutOutflowInput: ["where", "create"],
  JobCreateWithoutOutflowsInput: ["name", "inflows"],
  JobUncheckedCreateWithoutOutflowsInput: ["id", "name", "inflows"],
  JobCreateOrConnectWithoutOutflowsInput: ["where", "create"],
  PersonUpsertWithoutOutflowsInput: ["update", "create", "where"],
  PersonUpdateToOneWithWhereWithoutOutflowsInput: ["where", "data"],
  PersonUpdateWithoutOutflowsInput: ["name", "email", "inflows"],
  PersonUncheckedUpdateWithoutOutflowsInput: ["id", "name", "email", "inflows"],
  FacilityUpsertWithoutOutflowInput: ["update", "create", "where"],
  FacilityUpdateToOneWithWhereWithoutOutflowInput: ["where", "data"],
  FacilityUpdateWithoutOutflowInput: ["name", "inflows"],
  FacilityUncheckedUpdateWithoutOutflowInput: ["id", "name", "inflows"],
  JobUpsertWithoutOutflowsInput: ["update", "create", "where"],
  JobUpdateToOneWithWhereWithoutOutflowsInput: ["where", "data"],
  JobUpdateWithoutOutflowsInput: ["name", "inflows"],
  JobUncheckedUpdateWithoutOutflowsInput: ["id", "name", "inflows"],
  InflowCreateManyPersonInput: ["id", "amount", "date", "description", "facilityId", "jobId", "createdAt", "updatedAt"],
  OutflowCreateManyPersonInput: ["id", "amount", "date", "description", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowUpdateWithoutPersonInput: ["amount", "date", "description", "createdAt", "updatedAt", "facility", "job"],
  InflowUncheckedUpdateWithoutPersonInput: ["id", "amount", "date", "description", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowUncheckedUpdateManyWithoutPersonInput: ["id", "amount", "date", "description", "facilityId", "jobId", "createdAt", "updatedAt"],
  OutflowUpdateWithoutPersonInput: ["amount", "date", "description", "createdAt", "updatedAt", "facility", "job"],
  OutflowUncheckedUpdateWithoutPersonInput: ["id", "amount", "date", "description", "facilityId", "jobId", "createdAt", "updatedAt"],
  OutflowUncheckedUpdateManyWithoutPersonInput: ["id", "amount", "date", "description", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowCreateManyFacilityInput: ["id", "amount", "date", "description", "personId", "jobId", "createdAt", "updatedAt"],
  OutflowCreateManyFacilityInput: ["id", "amount", "date", "description", "personId", "jobId", "createdAt", "updatedAt"],
  InflowUpdateWithoutFacilityInput: ["amount", "date", "description", "createdAt", "updatedAt", "person", "job"],
  InflowUncheckedUpdateWithoutFacilityInput: ["id", "amount", "date", "description", "personId", "jobId", "createdAt", "updatedAt"],
  InflowUncheckedUpdateManyWithoutFacilityInput: ["id", "amount", "date", "description", "personId", "jobId", "createdAt", "updatedAt"],
  OutflowUpdateWithoutFacilityInput: ["amount", "date", "description", "createdAt", "updatedAt", "person", "job"],
  OutflowUncheckedUpdateWithoutFacilityInput: ["id", "amount", "date", "description", "personId", "jobId", "createdAt", "updatedAt"],
  OutflowUncheckedUpdateManyWithoutFacilityInput: ["id", "amount", "date", "description", "personId", "jobId", "createdAt", "updatedAt"],
  InflowCreateManyJobInput: ["id", "amount", "date", "description", "personId", "facilityId", "createdAt", "updatedAt"],
  OutflowCreateManyJobInput: ["id", "amount", "date", "description", "personId", "facilityId", "createdAt", "updatedAt"],
  InflowUpdateWithoutJobInput: ["amount", "date", "description", "createdAt", "updatedAt", "person", "facility"],
  InflowUncheckedUpdateWithoutJobInput: ["id", "amount", "date", "description", "personId", "facilityId", "createdAt", "updatedAt"],
  InflowUncheckedUpdateManyWithoutJobInput: ["id", "amount", "date", "description", "personId", "facilityId", "createdAt", "updatedAt"],
  OutflowUpdateWithoutJobInput: ["amount", "date", "description", "createdAt", "updatedAt", "person", "facility"],
  OutflowUncheckedUpdateWithoutJobInput: ["id", "amount", "date", "description", "personId", "facilityId", "createdAt", "updatedAt"],
  OutflowUncheckedUpdateManyWithoutJobInput: ["id", "amount", "date", "description", "personId", "facilityId", "createdAt", "updatedAt"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

