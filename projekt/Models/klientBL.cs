using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using projekt.Models;
using projekt.DAL;

namespace projekt.Models
{
    public class klientBL
    {
        public List<klient> GetUsers()
        {
            KDB mDB = new KDB();
            return mDB.KlienciDB.ToList();
        }
        public void AddUser(klient u)
        {
            KDB mDB = new KDB();
            mDB.KlienciDB.Add(u);
            mDB.SaveChanges();
        }
        public void EditUser(klient model)
        {
            KDB mDB = new KDB();
            klient user = mDB.KlienciDB.Where(u => u.IdKlienta == model.IdKlienta).Single();
            user.Imie = model.Imie;
            user.Nazwisko = model.Nazwisko;
            user.Wiek = model.Wiek;
            user.Ulica = model.Ulica;
            user.NrDomu = model.NrDomu;
            mDB.SaveChanges();
        }
        public void RemoveUser(int id)
        {
            KDB mDB = new KDB();
            klient user = mDB.KlienciDB.Where(u => u.IdKlienta == id).FirstOrDefault();
            mDB.KlienciDB.Remove(user);
            mDB.SaveChanges();
        }
    }
}