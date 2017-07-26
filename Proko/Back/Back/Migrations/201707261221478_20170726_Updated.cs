namespace Back.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _20170726_Updated : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Questions", "Chosen", c => c.Boolean(nullable: false));
            AlterColumn("dbo.Questions", "Text", c => c.String(nullable: false));
            AlterColumn("dbo.QuestionMethods", "Value", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.QuestionMethods", "Value", c => c.String());
            AlterColumn("dbo.Questions", "Text", c => c.String());
            DropColumn("dbo.Questions", "Chosen");
        }
    }
}
