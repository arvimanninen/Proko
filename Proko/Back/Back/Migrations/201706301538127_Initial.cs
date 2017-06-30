namespace Back.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Answers",
                c => new
                    {
                        AnswerID = c.Int(nullable: false, identity: true),
                        Value = c.Int(nullable: false),
                        QuestionID = c.Int(nullable: false),
                        UserID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.AnswerID)
                .ForeignKey("dbo.Questions", t => t.QuestionID, cascadeDelete: true)
                .ForeignKey("dbo.Users", t => t.UserID, cascadeDelete: true)
                .Index(t => t.QuestionID)
                .Index(t => t.UserID);
            
            CreateTable(
                "dbo.Questions",
                c => new
                    {
                        QuestionID = c.Int(nullable: false, identity: true),
                        Text = c.String(),
                        QuestionMethodID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.QuestionID)
                .ForeignKey("dbo.QuestionMethods", t => t.QuestionMethodID, cascadeDelete: true)
                .Index(t => t.QuestionMethodID);
            
            CreateTable(
                "dbo.QuestionMethods",
                c => new
                    {
                        QuestionMethodID = c.Int(nullable: false, identity: true),
                        Value = c.String(),
                        QuestionScaleID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.QuestionMethodID)
                .ForeignKey("dbo.QuestionScales", t => t.QuestionScaleID, cascadeDelete: true)
                .Index(t => t.QuestionScaleID);
            
            CreateTable(
                "dbo.QuestionScales",
                c => new
                    {
                        QuestionScaleID = c.Int(nullable: false, identity: true),
                        ScaleMin = c.Int(nullable: false),
                        ScaleMax = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.QuestionScaleID);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        UserTypeID = c.Int(nullable: false),
                        ContractorID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.UserID)
                .ForeignKey("dbo.Contractors", t => t.ContractorID, cascadeDelete: true)
                .ForeignKey("dbo.UserTypes", t => t.UserTypeID, cascadeDelete: true)
                .Index(t => t.UserTypeID)
                .Index(t => t.ContractorID);
            
            CreateTable(
                "dbo.Contractors",
                c => new
                    {
                        ContractorID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.ContractorID);
            
            CreateTable(
                "dbo.UserTypes",
                c => new
                    {
                        UserTypeID = c.Int(nullable: false, identity: true),
                        Text = c.String(),
                    })
                .PrimaryKey(t => t.UserTypeID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Users", "UserTypeID", "dbo.UserTypes");
            DropForeignKey("dbo.Users", "ContractorID", "dbo.Contractors");
            DropForeignKey("dbo.Answers", "UserID", "dbo.Users");
            DropForeignKey("dbo.QuestionMethods", "QuestionScaleID", "dbo.QuestionScales");
            DropForeignKey("dbo.Questions", "QuestionMethodID", "dbo.QuestionMethods");
            DropForeignKey("dbo.Answers", "QuestionID", "dbo.Questions");
            DropIndex("dbo.Users", new[] { "ContractorID" });
            DropIndex("dbo.Users", new[] { "UserTypeID" });
            DropIndex("dbo.QuestionMethods", new[] { "QuestionScaleID" });
            DropIndex("dbo.Questions", new[] { "QuestionMethodID" });
            DropIndex("dbo.Answers", new[] { "UserID" });
            DropIndex("dbo.Answers", new[] { "QuestionID" });
            DropTable("dbo.UserTypes");
            DropTable("dbo.Contractors");
            DropTable("dbo.Users");
            DropTable("dbo.QuestionScales");
            DropTable("dbo.QuestionMethods");
            DropTable("dbo.Questions");
            DropTable("dbo.Answers");
        }
    }
}
