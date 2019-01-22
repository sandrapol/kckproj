package main.java.DAO;


import main.java.Utils.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class DBGeneric<T> {
    public T el;

    public void create(T el) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        Transaction tr = session.beginTransaction();
        session.save(el);
        tr.commit();
    }

    public void delete(T el) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        Transaction tr = session.beginTransaction();
        session.remove(el);
        tr.commit();
    }

    public void delete(Long id, T cl) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        Transaction tr = session.beginTransaction();
        T el = (T) session.get(cl.getClass(), id);
        session.remove(el);
        tr.commit();
    }

    public T getById(Long id, T cl) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        Transaction tr = session.beginTransaction();
        T el = (T) session.get(cl.getClass(), id);
        tr.commit();
        return el;
    }

    public List getAll(T cl) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        Transaction tr = session.beginTransaction();
        List<T> el = session.createQuery("FROM " + cl.getClass().getName()).list();
        tr.commit();
        return el;
    }

    public String getNameClass(T cl) {

        return cl.getClass().getName();
    }

    public void update(T el) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        Transaction tr = session.beginTransaction();
        session.update(el);
        tr.commit();
    }
    public List sortBy(String field, T cl){
        String className=  cl.getClass().getName();
        String hql = "FROM "+className+" c ORDER BY c."+field;
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        Transaction tr = session.beginTransaction();
        List<T> el = session.createQuery(hql).list();
        tr.commit();
        return el;
    }

}