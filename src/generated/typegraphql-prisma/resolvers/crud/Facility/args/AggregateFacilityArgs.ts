import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FacilityOrderByWithRelationInput } from "../../../inputs/FacilityOrderByWithRelationInput";
import { FacilityWhereInput } from "../../../inputs/FacilityWhereInput";
import { FacilityWhereUniqueInput } from "../../../inputs/FacilityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFacilityArgs {
  @TypeGraphQL.Field(_type => FacilityWhereInput, {
    nullable: true
  })
  where?: FacilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FacilityOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FacilityOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FacilityWhereUniqueInput, {
    nullable: true
  })
  cursor?: FacilityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
