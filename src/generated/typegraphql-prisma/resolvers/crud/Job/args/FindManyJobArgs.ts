import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JobOrderByWithRelationInput } from "../../../inputs/JobOrderByWithRelationInput";
import { JobWhereInput } from "../../../inputs/JobWhereInput";
import { JobWhereUniqueInput } from "../../../inputs/JobWhereUniqueInput";
import { JobScalarFieldEnum } from "../../../../enums/JobScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyJobArgs {
  @TypeGraphQL.Field(_type => JobWhereInput, {
    nullable: true
  })
  where?: JobWhereInput | undefined;

  @TypeGraphQL.Field(_type => [JobOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: JobOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => JobWhereUniqueInput, {
    nullable: true
  })
  cursor?: JobWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [JobScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}
