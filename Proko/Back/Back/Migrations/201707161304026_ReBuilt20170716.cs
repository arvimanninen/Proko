namespace Back.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ReBuilt20170716 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.QuestionMethods", "QuestionScaleID", "dbo.QuestionScales");
            DropForeignKey("dbo.Answers", "SurveyUserID", "dbo.SurveyUsers");
            DropForeignKey("dbo.SurveyUsers", "ContractorID", "dbo.Contractors");
            DropForeignKey("dbo.SurveyUsers", "SurveyUserTypeID", "dbo.SurveyUserTypes");
            DropIndex("dbo.Answers", new[] { "SurveyUserID" });
            DropIndex("dbo.QuestionMethods", new[] { "QuestionScaleID" });
            DropIndex("dbo.SurveyUsers", new[] { "SurveyUserTypeID" });
            DropIndex("dbo.SurveyUsers", new[] { "ContractorID" });
            AddColumn("dbo.Answers", "Date", c => c.DateTime(nullable: false));
            AddColumn("dbo.Questions", "ChosenIndex", c => c.Int(nullable: false));
            AddColumn("dbo.QuestionMethods", "ScaleMin", c => c.Int(nullable: false));
            AddColumn("dbo.QuestionMethods", "ScaleMax", c => c.Int(nullable: false));
            DropColumn("dbo.Answers", "SurveyUserID");
            DropColumn("dbo.QuestionMethods", "QuestionScaleID");
            DropTable("dbo.QuestionScales");
            DropTable("dbo.SurveyUsers");
            DropTable("dbo.Contractors");
            DropTable("dbo.SurveyUserTypes");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.SurveyUserTypes",
                c => new
                    {
                        SurveyUserTypeID = c.Int(nullable: false, identity: true),
                        Text = c.String(),
                    })
                .PrimaryKey(t => t.SurveyUserTypeID);
            
            CreateTable(
                "dbo.Contractors",
                c => new
                    {
                        ContractorID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.ContractorID);
            
            CreateTable(
                "dbo.SurveyUsers",
                c => new
                    {
                        SurveyUserID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        SurveyUserTypeID = c.Int(nullable: false),
                        ContractorID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.SurveyUserID);
            
            CreateTable(
                "dbo.QuestionScales",
                c => new
                    {
                        QuestionScaleID = c.Int(nullable: false, identity: true),
                        ScaleMin = c.Int(nullable: false),
                        ScaleMax = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.QuestionScaleID);
            
            AddColumn("dbo.QuestionMethods", "QuestionScaleID", c => c.Int(nullable: false));
            AddColumn("dbo.Answers", "SurveyUserID", c => c.Int(nullable: false));
            DropColumn("dbo.QuestionMethods", "ScaleMax");
            DropColumn("dbo.QuestionMethods", "ScaleMin");
            DropColumn("dbo.Questions", "ChosenIndex");
            DropColumn("dbo.Answers", "Date");
            CreateIndex("dbo.SurveyUsers", "ContractorID");
            CreateIndex("dbo.SurveyUsers", "SurveyUserTypeID");
            CreateIndex("dbo.QuestionMethods", "QuestionScaleID");
            CreateIndex("dbo.Answers", "SurveyUserID");
            AddForeignKey("dbo.SurveyUsers", "SurveyUserTypeID", "dbo.SurveyUserTypes", "SurveyUserTypeID", cascadeDelete: true);
            AddForeignKey("dbo.SurveyUsers", "ContractorID", "dbo.Contractors", "ContractorID", cascadeDelete: true);
            AddForeignKey("dbo.Answers", "SurveyUserID", "dbo.SurveyUsers", "SurveyUserID", cascadeDelete: true);
            AddForeignKey("dbo.QuestionMethods", "QuestionScaleID", "dbo.QuestionScales", "QuestionScaleID", cascadeDelete: true);
        }
    }
}
