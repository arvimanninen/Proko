namespace Back.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChosenAddedToAnswererType : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AnswererTypes", "Chosen", c => c.Boolean(nullable: false));
            AlterColumn("dbo.AnswererTypes", "Name", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.AnswererTypes", "Name", c => c.String());
            DropColumn("dbo.AnswererTypes", "Chosen");
        }
    }
}
