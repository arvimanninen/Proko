namespace Back.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class QsIDAndCIadded : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.ChosenQuestions", new[] { "QuestionSetID" });
            CreateIndex("dbo.ChosenQuestions", new[] { "QuestionSetID", "ChosenIndex" }, unique: true, name: "IX_QsIDAndCI");
        }
        
        public override void Down()
        {
            DropIndex("dbo.ChosenQuestions", "IX_QsIDAndCI");
            CreateIndex("dbo.ChosenQuestions", "QuestionSetID");
        }
    }
}
