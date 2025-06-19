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
  Inflow: crudResolvers.InflowCrudResolver
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
  }
};
const crudResolversInfo = {
  Person: ["aggregatePerson", "createManyPerson", "createManyAndReturnPerson", "createOnePerson", "deleteManyPerson", "deleteOnePerson", "findFirstPerson", "findFirstPersonOrThrow", "people", "person", "getPerson", "groupByPerson", "updateManyPerson", "updateOnePerson", "upsertOnePerson"],
  Facility: ["aggregateFacility", "createManyFacility", "createManyAndReturnFacility", "createOneFacility", "deleteManyFacility", "deleteOneFacility", "findFirstFacility", "findFirstFacilityOrThrow", "facilities", "facility", "getFacility", "groupByFacility", "updateManyFacility", "updateOneFacility", "upsertOneFacility"],
  Job: ["aggregateJob", "createManyJob", "createManyAndReturnJob", "createOneJob", "deleteManyJob", "deleteOneJob", "findFirstJob", "findFirstJobOrThrow", "jobs", "job", "getJob", "groupByJob", "updateManyJob", "updateOneJob", "upsertOneJob"],
  Inflow: ["aggregateInflow", "createManyInflow", "createManyAndReturnInflow", "createOneInflow", "deleteManyInflow", "deleteOneInflow", "findFirstInflow", "findFirstInflowOrThrow", "inflows", "inflow", "getInflow", "groupByInflow", "updateManyInflow", "updateOneInflow", "upsertOneInflow"]
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
  UpsertOneInflowArgs: ["where", "create", "update"]
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
  Inflow: relationResolvers.InflowRelationsResolver
};
const relationResolversInfo = {
  Person: ["inflows"],
  Facility: ["inflows"],
  Job: ["inflows"],
  Inflow: ["person", "facility", "job"]
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
  Person: ["id", "email", "name"],
  Facility: ["id", "name"],
  Job: ["id", "name"],
  Inflow: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"]
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
  PersonGroupBy: ["id", "email", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFacility: ["_count", "_avg", "_sum", "_min", "_max"],
  FacilityGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateJob: ["_count", "_avg", "_sum", "_min", "_max"],
  JobGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateInflow: ["_count", "_avg", "_sum", "_min", "_max"],
  InflowGroupBy: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  PersonCount: ["inflows"],
  PersonCountAggregate: ["id", "email", "name", "_all"],
  PersonAvgAggregate: ["id"],
  PersonSumAggregate: ["id"],
  PersonMinAggregate: ["id", "email", "name"],
  PersonMaxAggregate: ["id", "email", "name"],
  FacilityCount: ["inflows"],
  FacilityCountAggregate: ["id", "name", "_all"],
  FacilityAvgAggregate: ["id"],
  FacilitySumAggregate: ["id"],
  FacilityMinAggregate: ["id", "name"],
  FacilityMaxAggregate: ["id", "name"],
  JobCount: ["inflows"],
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
  CreateManyAndReturnPerson: ["id", "email", "name"],
  CreateManyAndReturnFacility: ["id", "name"],
  CreateManyAndReturnJob: ["id", "name"],
  CreateManyAndReturnInflow: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "person", "facility", "job"]
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
  PersonWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "inflows"],
  PersonOrderByWithRelationInput: ["id", "email", "name", "inflows"],
  PersonWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "name", "inflows"],
  PersonOrderByWithAggregationInput: ["id", "email", "name", "_count", "_avg", "_max", "_min", "_sum"],
  PersonScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name"],
  FacilityWhereInput: ["AND", "OR", "NOT", "id", "name", "inflows"],
  FacilityOrderByWithRelationInput: ["id", "name", "inflows"],
  FacilityWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "inflows"],
  FacilityOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  FacilityScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  JobWhereInput: ["AND", "OR", "NOT", "id", "name", "inflows"],
  JobOrderByWithRelationInput: ["id", "name", "inflows"],
  JobWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "inflows"],
  JobOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  JobScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  InflowWhereInput: ["AND", "OR", "NOT", "id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "person", "facility", "job"],
  InflowOrderByWithRelationInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "person", "facility", "job"],
  InflowWhereUniqueInput: ["id", "AND", "OR", "NOT", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "person", "facility", "job"],
  InflowOrderByWithAggregationInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  InflowScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  PersonCreateInput: ["email", "name", "inflows"],
  PersonUncheckedCreateInput: ["id", "email", "name", "inflows"],
  PersonUpdateInput: ["email", "name", "inflows"],
  PersonUncheckedUpdateInput: ["id", "email", "name", "inflows"],
  PersonCreateManyInput: ["id", "email", "name"],
  PersonUpdateManyMutationInput: ["email", "name"],
  PersonUncheckedUpdateManyInput: ["id", "email", "name"],
  FacilityCreateInput: ["name", "inflows"],
  FacilityUncheckedCreateInput: ["id", "name", "inflows"],
  FacilityUpdateInput: ["name", "inflows"],
  FacilityUncheckedUpdateInput: ["id", "name", "inflows"],
  FacilityCreateManyInput: ["id", "name"],
  FacilityUpdateManyMutationInput: ["name"],
  FacilityUncheckedUpdateManyInput: ["id", "name"],
  JobCreateInput: ["name", "inflows"],
  JobUncheckedCreateInput: ["id", "name", "inflows"],
  JobUpdateInput: ["name", "inflows"],
  JobUncheckedUpdateInput: ["id", "name", "inflows"],
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
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  InflowListRelationFilter: ["every", "some", "none"],
  SortOrderInput: ["sort", "nulls"],
  InflowOrderByRelationAggregateInput: ["_count"],
  PersonCountOrderByAggregateInput: ["id", "email", "name"],
  PersonAvgOrderByAggregateInput: ["id"],
  PersonMaxOrderByAggregateInput: ["id", "email", "name"],
  PersonMinOrderByAggregateInput: ["id", "email", "name"],
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
  PersonRelationFilter: ["is", "isNot"],
  FacilityRelationFilter: ["is", "isNot"],
  JobRelationFilter: ["is", "isNot"],
  InflowCountOrderByAggregateInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowAvgOrderByAggregateInput: ["id", "amount", "personId", "facilityId", "jobId"],
  InflowMaxOrderByAggregateInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowMinOrderByAggregateInput: ["id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowSumOrderByAggregateInput: ["id", "amount", "personId", "facilityId", "jobId"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  InflowCreateNestedManyWithoutPersonInput: ["create", "connectOrCreate", "createMany", "connect"],
  InflowUncheckedCreateNestedManyWithoutPersonInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  InflowUpdateManyWithoutPersonNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  InflowUncheckedUpdateManyWithoutPersonNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  InflowCreateNestedManyWithoutFacilityInput: ["create", "connectOrCreate", "createMany", "connect"],
  InflowUncheckedCreateNestedManyWithoutFacilityInput: ["create", "connectOrCreate", "createMany", "connect"],
  InflowUpdateManyWithoutFacilityNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  InflowUncheckedUpdateManyWithoutFacilityNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  InflowCreateNestedManyWithoutJobInput: ["create", "connectOrCreate", "createMany", "connect"],
  InflowUncheckedCreateNestedManyWithoutJobInput: ["create", "connectOrCreate", "createMany", "connect"],
  InflowUpdateManyWithoutJobNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  InflowUncheckedUpdateManyWithoutJobNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PersonCreateNestedOneWithoutInflowsInput: ["create", "connectOrCreate", "connect"],
  FacilityCreateNestedOneWithoutInflowsInput: ["create", "connectOrCreate", "connect"],
  JobCreateNestedOneWithoutInflowsInput: ["create", "connectOrCreate", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  PersonUpdateOneRequiredWithoutInflowsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  FacilityUpdateOneRequiredWithoutInflowsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  JobUpdateOneRequiredWithoutInflowsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
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
  InflowCreateWithoutPersonInput: ["amount", "date", "description", "createdAt", "updatedAt", "facility", "job"],
  InflowUncheckedCreateWithoutPersonInput: ["id", "amount", "date", "description", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowCreateOrConnectWithoutPersonInput: ["where", "create"],
  InflowCreateManyPersonInputEnvelope: ["data"],
  InflowUpsertWithWhereUniqueWithoutPersonInput: ["where", "update", "create"],
  InflowUpdateWithWhereUniqueWithoutPersonInput: ["where", "data"],
  InflowUpdateManyWithWhereWithoutPersonInput: ["where", "data"],
  InflowScalarWhereInput: ["AND", "OR", "NOT", "id", "amount", "date", "description", "personId", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowCreateWithoutFacilityInput: ["amount", "date", "description", "createdAt", "updatedAt", "person", "job"],
  InflowUncheckedCreateWithoutFacilityInput: ["id", "amount", "date", "description", "personId", "jobId", "createdAt", "updatedAt"],
  InflowCreateOrConnectWithoutFacilityInput: ["where", "create"],
  InflowCreateManyFacilityInputEnvelope: ["data"],
  InflowUpsertWithWhereUniqueWithoutFacilityInput: ["where", "update", "create"],
  InflowUpdateWithWhereUniqueWithoutFacilityInput: ["where", "data"],
  InflowUpdateManyWithWhereWithoutFacilityInput: ["where", "data"],
  InflowCreateWithoutJobInput: ["amount", "date", "description", "createdAt", "updatedAt", "person", "facility"],
  InflowUncheckedCreateWithoutJobInput: ["id", "amount", "date", "description", "personId", "facilityId", "createdAt", "updatedAt"],
  InflowCreateOrConnectWithoutJobInput: ["where", "create"],
  InflowCreateManyJobInputEnvelope: ["data"],
  InflowUpsertWithWhereUniqueWithoutJobInput: ["where", "update", "create"],
  InflowUpdateWithWhereUniqueWithoutJobInput: ["where", "data"],
  InflowUpdateManyWithWhereWithoutJobInput: ["where", "data"],
  PersonCreateWithoutInflowsInput: ["email", "name"],
  PersonUncheckedCreateWithoutInflowsInput: ["id", "email", "name"],
  PersonCreateOrConnectWithoutInflowsInput: ["where", "create"],
  FacilityCreateWithoutInflowsInput: ["name"],
  FacilityUncheckedCreateWithoutInflowsInput: ["id", "name"],
  FacilityCreateOrConnectWithoutInflowsInput: ["where", "create"],
  JobCreateWithoutInflowsInput: ["name"],
  JobUncheckedCreateWithoutInflowsInput: ["id", "name"],
  JobCreateOrConnectWithoutInflowsInput: ["where", "create"],
  PersonUpsertWithoutInflowsInput: ["update", "create", "where"],
  PersonUpdateToOneWithWhereWithoutInflowsInput: ["where", "data"],
  PersonUpdateWithoutInflowsInput: ["email", "name"],
  PersonUncheckedUpdateWithoutInflowsInput: ["id", "email", "name"],
  FacilityUpsertWithoutInflowsInput: ["update", "create", "where"],
  FacilityUpdateToOneWithWhereWithoutInflowsInput: ["where", "data"],
  FacilityUpdateWithoutInflowsInput: ["name"],
  FacilityUncheckedUpdateWithoutInflowsInput: ["id", "name"],
  JobUpsertWithoutInflowsInput: ["update", "create", "where"],
  JobUpdateToOneWithWhereWithoutInflowsInput: ["where", "data"],
  JobUpdateWithoutInflowsInput: ["name"],
  JobUncheckedUpdateWithoutInflowsInput: ["id", "name"],
  InflowCreateManyPersonInput: ["id", "amount", "date", "description", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowUpdateWithoutPersonInput: ["amount", "date", "description", "createdAt", "updatedAt", "facility", "job"],
  InflowUncheckedUpdateWithoutPersonInput: ["id", "amount", "date", "description", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowUncheckedUpdateManyWithoutPersonInput: ["id", "amount", "date", "description", "facilityId", "jobId", "createdAt", "updatedAt"],
  InflowCreateManyFacilityInput: ["id", "amount", "date", "description", "personId", "jobId", "createdAt", "updatedAt"],
  InflowUpdateWithoutFacilityInput: ["amount", "date", "description", "createdAt", "updatedAt", "person", "job"],
  InflowUncheckedUpdateWithoutFacilityInput: ["id", "amount", "date", "description", "personId", "jobId", "createdAt", "updatedAt"],
  InflowUncheckedUpdateManyWithoutFacilityInput: ["id", "amount", "date", "description", "personId", "jobId", "createdAt", "updatedAt"],
  InflowCreateManyJobInput: ["id", "amount", "date", "description", "personId", "facilityId", "createdAt", "updatedAt"],
  InflowUpdateWithoutJobInput: ["amount", "date", "description", "createdAt", "updatedAt", "person", "facility"],
  InflowUncheckedUpdateWithoutJobInput: ["id", "amount", "date", "description", "personId", "facilityId", "createdAt", "updatedAt"],
  InflowUncheckedUpdateManyWithoutJobInput: ["id", "amount", "date", "description", "personId", "facilityId", "createdAt", "updatedAt"]
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

