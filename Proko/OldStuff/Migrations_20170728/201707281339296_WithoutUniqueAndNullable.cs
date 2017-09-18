namespace Back.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class WithoutUniqueAndNullable : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Questions", new[] { "ChosenIndex" });
            AlterColumn("dbo.Questions", "ChosenIndex", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Questions", "ChosenIndex", c => c.Int());
            CreateIndex("dbo.Questions", "ChosenIndex", unique: true);
        }
    }
}
