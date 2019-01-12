namespace projekt.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.klients",
                c => new
                    {
                        IdKlienta = c.Int(nullable: false, identity: true),
                        Imie = c.String(),
                        Nazwisko = c.String(),
                        Wiek = c.Int(nullable: false),
                        Ulica = c.String(),
                        NrDomu = c.Int(nullable: false),
                        Discriminator = c.String(nullable: false, maxLength: 128),
                        ListaklientowtVM_IdKlienta = c.Int(),
                    })
                .PrimaryKey(t => t.IdKlienta)
                .ForeignKey("dbo.klients", t => t.ListaklientowtVM_IdKlienta)
                .Index(t => t.ListaklientowtVM_IdKlienta);
            
            CreateTable(
                "dbo.samochods",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Marka = c.String(),
                        Modell = c.String(),
                        Rok = c.Int(nullable: false),
                        TypSilnika = c.String(),
                        KM = c.Int(nullable: false),
                        Kolor = c.String(),
                        Discriminator = c.String(nullable: false, maxLength: 128),
                        ListaSamochodowVM_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.samochods", t => t.ListaSamochodowVM_Id)
                .Index(t => t.ListaSamochodowVM_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.samochods", "ListaSamochodowVM_Id", "dbo.samochods");
            DropForeignKey("dbo.klients", "ListaklientowtVM_IdKlienta", "dbo.klients");
            DropIndex("dbo.samochods", new[] { "ListaSamochodowVM_Id" });
            DropIndex("dbo.klients", new[] { "ListaklientowtVM_IdKlienta" });
            DropTable("dbo.samochods");
            DropTable("dbo.klients");
        }
    }
}
