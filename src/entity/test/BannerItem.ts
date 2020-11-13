import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("banner_item", { schema: "bua" })
export class BannerItem {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "img", nullable: true, length: 255 })
  img: string | null;

  @Column("varchar", { name: "keyword", nullable: true, length: 50 })
  keyword: string | null;

  @Column("smallint", { name: "type", unsigned: true, default: () => "'0'" })
  type: number;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    default: () => "'CURRENT_TIMESTAMP(3)'",
  })
  createTime: Date | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    default: () => "'CURRENT_TIMESTAMP(3)'",
  })
  updateTime: Date | null;

  @Column("datetime", { name: "delete_time", nullable: true })
  deleteTime: Date | null;

  @Column("int", { name: "banner_id", unsigned: true })
  bannerId: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;
}
