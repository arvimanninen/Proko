namespace Back.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UniqueAndNullable : DbMigration
    {
        public override void Up()
        {
            Sql(@"CREATE UNIQUE NONCLUSTERED INDEX IX_ChosenIndex_notnull ON Questions(ChosenIndex) WHERE ChosenIndex IS NOT NULL;");
            // AlterColumn("dbo.Questions", "ChosenIndex", c => c.Int());
            // CreateIndex("dbo.Questions", "ChosenIndex", unique: true);
        }
        
        public override void Down()
        {
            DropIndex("dbo.Questions", "IX_ChosenIndex_notnull");
            //_notnull
            // DropIndex("dbo.Questions", new[] { "ChosenIndex" });
            // AlterColumn("dbo.Questions", "ChosenIndex", c => c.Int(nullable: false));
        }
    }
}
