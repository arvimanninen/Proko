namespace Back.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LastMigrationReversed : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.QuestionSets", "Title", c => c.String());
            DropColumn("dbo.QuestionSets", "MainQuestion");
        }
        
        public override void Down()
        {
            AddColumn("dbo.QuestionSets", "MainQuestion", c => c.String());
            DropColumn("dbo.QuestionSets", "Title");
        }
    }
}
