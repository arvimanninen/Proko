namespace Back.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ScaleMinRemovedFromQuestionMethod : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.QuestionMethods", "ScaleMin");
        }
        
        public override void Down()
        {
            AddColumn("dbo.QuestionMethods", "ScaleMin", c => c.Int(nullable: false));
        }
    }
}
