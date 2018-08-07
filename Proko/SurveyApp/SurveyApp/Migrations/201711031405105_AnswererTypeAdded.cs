namespace Back.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AnswererTypeAdded : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.AnswererTypes",
                c => new
                    {
                        AnswererTypeID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.AnswererTypeID);
            
            AddColumn("dbo.AnswerBundles", "AnswererTypeID", c => c.Int(nullable: false));
            CreateIndex("dbo.AnswerBundles", "AnswererTypeID");
            AddForeignKey("dbo.AnswerBundles", "AnswererTypeID", "dbo.AnswererTypes", "AnswererTypeID", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AnswerBundles", "AnswererTypeID", "dbo.AnswererTypes");
            DropIndex("dbo.AnswerBundles", new[] { "AnswererTypeID" });
            DropColumn("dbo.AnswerBundles", "AnswererTypeID");
            DropTable("dbo.AnswererTypes");
        }
    }
}
