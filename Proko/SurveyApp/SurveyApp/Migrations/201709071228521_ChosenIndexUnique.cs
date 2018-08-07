namespace Back.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChosenIndexUnique : DbMigration
    {
        public override void Up()
        {
            CreateIndex("dbo.Questions", "ChosenIndex", unique: true);
        }
        
        public override void Down()
        {
            DropIndex("dbo.Questions", new[] { "ChosenIndex" });
        }
    }
}
