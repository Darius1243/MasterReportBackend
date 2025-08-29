import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateDocumentTypeArgs } from "./args/AggregateDocumentTypeArgs";
import { CreateManyAndReturnDocumentTypeArgs } from "./args/CreateManyAndReturnDocumentTypeArgs";
import { CreateManyDocumentTypeArgs } from "./args/CreateManyDocumentTypeArgs";
import { CreateOneDocumentTypeArgs } from "./args/CreateOneDocumentTypeArgs";
import { DeleteManyDocumentTypeArgs } from "./args/DeleteManyDocumentTypeArgs";
import { DeleteOneDocumentTypeArgs } from "./args/DeleteOneDocumentTypeArgs";
import { FindFirstDocumentTypeArgs } from "./args/FindFirstDocumentTypeArgs";
import { FindFirstDocumentTypeOrThrowArgs } from "./args/FindFirstDocumentTypeOrThrowArgs";
import { FindManyDocumentTypeArgs } from "./args/FindManyDocumentTypeArgs";
import { FindUniqueDocumentTypeArgs } from "./args/FindUniqueDocumentTypeArgs";
import { FindUniqueDocumentTypeOrThrowArgs } from "./args/FindUniqueDocumentTypeOrThrowArgs";
import { GroupByDocumentTypeArgs } from "./args/GroupByDocumentTypeArgs";
import { UpdateManyDocumentTypeArgs } from "./args/UpdateManyDocumentTypeArgs";
import { UpdateOneDocumentTypeArgs } from "./args/UpdateOneDocumentTypeArgs";
import { UpsertOneDocumentTypeArgs } from "./args/UpsertOneDocumentTypeArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { DocumentType } from "../../../models/DocumentType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDocumentType } from "../../outputs/AggregateDocumentType";
import { CreateManyAndReturnDocumentType } from "../../outputs/CreateManyAndReturnDocumentType";
import { DocumentTypeGroupBy } from "../../outputs/DocumentTypeGroupBy";

@TypeGraphQL.Resolver(_of => DocumentType)
export class DocumentTypeCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateDocumentType, {
    nullable: false
  })
  async aggregateDocumentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDocumentTypeArgs): Promise<AggregateDocumentType> {
    return getPrismaFromContext(ctx).documentType.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyDocumentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyDocumentTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnDocumentType], {
    nullable: false
  })
  async createManyAndReturnDocumentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnDocumentTypeArgs): Promise<CreateManyAndReturnDocumentType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => DocumentType, {
    nullable: false
  })
  async createOneDocumentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneDocumentTypeArgs): Promise<DocumentType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDocumentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyDocumentTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => DocumentType, {
    nullable: true
  })
  async deleteOneDocumentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneDocumentTypeArgs): Promise<DocumentType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => DocumentType, {
    nullable: true
  })
  async findFirstDocumentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDocumentTypeArgs): Promise<DocumentType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => DocumentType, {
    nullable: true
  })
  async findFirstDocumentTypeOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDocumentTypeOrThrowArgs): Promise<DocumentType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [DocumentType], {
    nullable: false
  })
  async documentTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyDocumentTypeArgs): Promise<DocumentType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => DocumentType, {
    nullable: true
  })
  async documentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueDocumentTypeArgs): Promise<DocumentType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => DocumentType, {
    nullable: true
  })
  async getDocumentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueDocumentTypeOrThrowArgs): Promise<DocumentType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [DocumentTypeGroupBy], {
    nullable: false
  })
  async groupByDocumentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDocumentTypeArgs): Promise<DocumentTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDocumentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyDocumentTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => DocumentType, {
    nullable: true
  })
  async updateOneDocumentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneDocumentTypeArgs): Promise<DocumentType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => DocumentType, {
    nullable: false
  })
  async upsertOneDocumentType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneDocumentTypeArgs): Promise<DocumentType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).documentType.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
