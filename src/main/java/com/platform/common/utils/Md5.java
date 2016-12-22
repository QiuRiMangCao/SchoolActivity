package com.platform.common.utils;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Md5 {
	public static String getVal(String plainText) {
		try {
			MessageDigest md = MessageDigest.getInstance("MD5");
			try {
				md.update(plainText.getBytes("GB2312"));
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
				return null;
			}
			byte b[] = md.digest();

			int i;
			StringBuffer buf = new StringBuffer("");
			for (int offset = 0; offset < b.length; offset++) {
				i = b[offset];
				if (i < 0)
					i += 256;
				if (i < 16)
					buf.append("0");
				buf.append(Integer.toHexString(i));
			}

			return buf.toString();

		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			return null;
		}
	}

	public static String getVal_bgk(String plainText) {
		try {
			MessageDigest md = MessageDigest.getInstance("MD5");
			md.update(plainText.getBytes("GBK"));
			byte b[] = md.digest();

			int i;
			StringBuffer buf = new StringBuffer("");
			for (int offset = 0; offset < b.length; offset++) {
				i = b[offset];
				if (i < 0)
					i += 256;
				if (i < 16)
					buf.append("0");
				buf.append(Integer.toHexString(i));
			}

			return buf.toString();

		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			return null;
		}

		catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			return null;
		}
	}

	public static String getVal_UTF8(String plainText) {
		try {
			MessageDigest md = MessageDigest.getInstance("MD5");
			md.update(plainText.getBytes("UTF-8"));
			byte b[] = md.digest();

			int i;
			StringBuffer buf = new StringBuffer("");
			for (int offset = 0; offset < b.length; offset++) {
				i = b[offset];
				if (i < 0)
					i += 256;
				if (i < 16)
					buf.append("0");
				buf.append(Integer.toHexString(i));
			}

			return buf.toString();

		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			return null;
		}

		catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			return null;
		}
	}
}
