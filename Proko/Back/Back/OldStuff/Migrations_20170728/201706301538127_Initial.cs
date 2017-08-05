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
                        SurveyUserID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.AnswerID)
                .ForeignKey("dbo.Questions", t => t.QuestionID, cascadeDelete: true)
                .ForeignKey("dbo.SurveyUsers", t => t.SurveyUserID, cascadeDelete: true)
                .Index(t => t.QuestionID)
                .Index(t => t.SurveyUserID);
            
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
                "dbo.SurveyUsers",
                c => new
                    {
                        SurveyUserID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        SurveyUserTypeID = c.Int(nullable: false),
                        ContractorID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.SurveyUserID)
                .ForeignKey("dbo.Contractors", t => t.ContractorID, cascadeDelete: true)
                .ForeignKey("dbo.SurveyUserTypes", t => t.SurveyUserTypeID, cascadeDelete: true)
                .Index(t => t.SurveyUserTypeID)
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
                "dbo.SurveyUserTypes",
                c => new
                    {
                        SurveyUserTypeID = c.Int(nullable: false, identity: true),
                        Text = c.String(),
                    })
                .PrimaryKey(t => t.SurveyUserTypeID);
            
            CreateTable(
                "dbo.AspNetRoles",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "RoleNameIndex");
            
            CreateTable(
                "dbo.AspNetUserRoles",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        RoleId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.UserId, t.RoleId })
                .ForeignKey("dbo.AspNetRoles", t => t.RoleId, cascadeDelete: true)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);
            
            CreateTable(
                "dbo.AspNetUsers",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Email = c.String(maxLength: 256),
                        EmailConfirmed = c.Boolean(nullable: false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(nullable: false),
                        TwoFactorEnabled = c.Boolean(nullable: false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(nullable: false),
                        AccessFailedCount = c.Int(nullable: false),
                        UserName = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.UserName, unique: true, name: "UserNameIndex");
            
            CreateTable(
                "dbo.AspNetUserClaims",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.String(nullable: false, maxLength: 128),
                        ClaimType = c.String(),
                        ClaimValue = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.AspNetUserLogins",
                c => new
                    {
                        LoginProvider = c.String(nullable: false, maxLength: 128),
                        ProviderKey = c.String(nullable: false, maxLength: 128),
                        UserId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.LoginProvider, t.ProviderKey, t.UserId })
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AspNetUserRoles", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserLogins", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserRoles", "RoleId", "dbo.AspNetRoles");
            DropForeignKey("dbo.SurveyUsers", "SurveyUserTypeID", "dbo.SurveyUserTypes");
            DropForeignKey("dbo.SurveyUsers", "ContractorID", "dbo.Contractors");
            DropForeignKey("dbo.Answers", "SurveyUserID", "dbo.SurveyUsers");
            DropForeignKey("dbo.QuestionMethods", "QuestionScaleID", "dbo.QuestionScales");
            DropForeignKey("dbo.Questions", "QuestionMethodID", "dbo.QuestionMethods");
            DropForeignKey("dbo.Answers", "QuestionID", "dbo.Questions");
            DropIndex("dbo.AspNetUserLogins", new[] { "UserId" });
            DropIndex("dbo.AspNetUserClaims", new[] { "UserId" });
            DropIndex("dbo.AspNetUsers", "UserNameIndex");
            DropIndex("dbo.AspNetUserRoles", new[] { "RoleId" });
            DropIndex("dbo.AspNetUserRoles", new[] { "UserId" });
            DropIndex("dbo.AspNetRoles", "RoleNameIndex");
            DropIndex("dbo.SurveyUsers", new[] { "ContractorID" });
            DropIndex("dbo.SurveyUsers", new[] { "SurveyUserTypeID" });
            DropIndex("dbo.QuestionMethods", new[] { "QuestionScaleID" });
            DropIndex("dbo.Questions", new[] { "QuestionMethodID" });
            DropIndex("dbo.Answers", new[] { "SurveyUserID" });
            DropIndex("dbo.Answers", new[] { "QuestionID" });
            DropTable("dbo.AspNetUserLogins");
            DropTable("dbo.AspNetUserClaims");
            DropTable("dbo.AspNetUsers");
            DropTable("dbo.AspNetUserRoles");
            DropTable("dbo.AspNetRoles");
            DropTable("dbo.SurveyUserTypes");
            DropTable("dbo.Contractors");
            DropTable("dbo.SurveyUsers");
            DropTable("dbo.QuestionScales");
            DropTable("dbo.QuestionMethods");
            DropTable("dbo.Questions");
            DropTable("dbo.Answers");
        }
    }
}
