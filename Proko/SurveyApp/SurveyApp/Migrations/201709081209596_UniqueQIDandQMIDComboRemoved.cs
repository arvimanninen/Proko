namespace Back.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UniqueQIDandQMIDComboRemoved : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Questions", "IX_QuestionIDAndQuestionMethodID");
            CreateIndex("dbo.Questions", "QuestionMethodID");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Questions", new[] { "QuestionMethodID" });
            CreateIndex("dbo.Questions", new[] { "QuestionID", "QuestionMethodID" }, unique: true, name: "IX_QuestionIDAndQuestionMethodID");
        }
    }
}
