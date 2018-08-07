namespace Back.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ExtendedDatabaseForNewFeatures : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Questions", "QuestionMethodID", "dbo.QuestionMethods");
            DropIndex("dbo.Questions", new[] { "ChosenIndex" });
            DropIndex("dbo.Questions", new[] { "QuestionMethodID" });
            CreateTable(
                "dbo.AnswerBundles",
                c => new
                    {
                        AnswerBundleID = c.Int(nullable: false, identity: true),
                        Date = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.AnswerBundleID);
            
            CreateTable(
                "dbo.AnswerSets",
                c => new
                    {
                        AnswerSetID = c.Int(nullable: false, identity: true),
                        AnswerBundleID = c.Int(nullable: false),
                        QuestionMethodID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.AnswerSetID)
                .ForeignKey("dbo.AnswerBundles", t => t.AnswerBundleID, cascadeDelete: true)
                .ForeignKey("dbo.QuestionMethods", t => t.QuestionMethodID, cascadeDelete: true)
                .Index(t => t.AnswerBundleID)
                .Index(t => t.QuestionMethodID);
            
            CreateTable(
                "dbo.ChosenQuestions",
                c => new
                    {
                        QuestionSetID = c.Int(nullable: false),
                        QuestionID = c.Int(nullable: false),
                        ChosenIndex = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.QuestionSetID, t.QuestionID })
                .ForeignKey("dbo.Questions", t => t.QuestionID, cascadeDelete: true)
                .ForeignKey("dbo.QuestionSets", t => t.QuestionSetID, cascadeDelete: true)
                .Index(t => t.QuestionSetID)
                .Index(t => t.QuestionID);
            
            CreateTable(
                "dbo.QuestionSets",
                c => new
                    {
                        QuestionSetID = c.Int(nullable: false, identity: true),
                        QuestionMethodID = c.Int(nullable: false),
                        ChosenIndex = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.QuestionSetID)
                .ForeignKey("dbo.QuestionMethods", t => t.QuestionMethodID, cascadeDelete: true)
                .Index(t => t.QuestionMethodID)
                .Index(t => t.ChosenIndex, unique: true);
            
            AddColumn("dbo.Answers", "AnswerSetID", c => c.Int(nullable: false));
            CreateIndex("dbo.Answers", "AnswerSetID");
            AddForeignKey("dbo.Answers", "AnswerSetID", "dbo.AnswerSets", "AnswerSetID", cascadeDelete: true);
            DropColumn("dbo.Answers", "Date");
            DropColumn("dbo.Questions", "Chosen");
            DropColumn("dbo.Questions", "ChosenIndex");
            DropColumn("dbo.Questions", "QuestionMethodID");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Questions", "QuestionMethodID", c => c.Int(nullable: false));
            AddColumn("dbo.Questions", "ChosenIndex", c => c.Int(nullable: false));
            AddColumn("dbo.Questions", "Chosen", c => c.Boolean(nullable: false));
            AddColumn("dbo.Answers", "Date", c => c.DateTime(nullable: false));
            DropForeignKey("dbo.QuestionSets", "QuestionMethodID", "dbo.QuestionMethods");
            DropForeignKey("dbo.AnswerSets", "QuestionMethodID", "dbo.QuestionMethods");
            DropForeignKey("dbo.ChosenQuestions", "QuestionSetID", "dbo.QuestionSets");
            DropForeignKey("dbo.ChosenQuestions", "QuestionID", "dbo.Questions");
            DropForeignKey("dbo.Answers", "AnswerSetID", "dbo.AnswerSets");
            DropForeignKey("dbo.AnswerSets", "AnswerBundleID", "dbo.AnswerBundles");
            DropIndex("dbo.QuestionSets", new[] { "ChosenIndex" });
            DropIndex("dbo.QuestionSets", new[] { "QuestionMethodID" });
            DropIndex("dbo.ChosenQuestions", new[] { "QuestionID" });
            DropIndex("dbo.ChosenQuestions", new[] { "QuestionSetID" });
            DropIndex("dbo.Answers", new[] { "AnswerSetID" });
            DropIndex("dbo.AnswerSets", new[] { "QuestionMethodID" });
            DropIndex("dbo.AnswerSets", new[] { "AnswerBundleID" });
            DropColumn("dbo.Answers", "AnswerSetID");
            DropTable("dbo.QuestionSets");
            DropTable("dbo.ChosenQuestions");
            DropTable("dbo.AnswerSets");
            DropTable("dbo.AnswerBundles");
            CreateIndex("dbo.Questions", "QuestionMethodID");
            CreateIndex("dbo.Questions", "ChosenIndex", unique: true);
            AddForeignKey("dbo.Questions", "QuestionMethodID", "dbo.QuestionMethods", "QuestionMethodID", cascadeDelete: true);
        }
    }
}
