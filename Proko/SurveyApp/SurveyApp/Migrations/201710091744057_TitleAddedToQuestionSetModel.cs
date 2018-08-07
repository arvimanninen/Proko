namespace Back.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TitleAddedToQuestionSetModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.QuestionSets", "Title", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.QuestionSets", "Title");
        }
    }
}
