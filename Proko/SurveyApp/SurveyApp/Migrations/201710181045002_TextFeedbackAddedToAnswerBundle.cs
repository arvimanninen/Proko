namespace Back.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TextFeedbackAddedToAnswerBundle : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AnswerBundles", "TextFeedback", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.AnswerBundles", "TextFeedback");
        }
    }
}
